
/*
	Engagement dashboard by campus
*/

DECLARE @RunDate VARCHAR(100) = '{{ 'Global' | PageParameter:'Date' | Date:'MM-dd-yyyy' }}'
DECLARE @CampusId VARCHAR(3) = '{{ 'Global' | PageParameter:'CampusId' }}'

IF @RunDate <> ''
BEGIN
;WITH EngagementData AS (
	SELECT 
		 T3.[PersonId]
		,T3.PrimaryCampusId
		,T3.[CategoryId]
		,T3.[Category]
		,CAST(((CAST(SUM(T3.[Score]) AS DECIMAL(18,2)) / CAST(T3.[Weight] AS DECIMAL(18,2))) * 100)AS DECIMAL(18,2)) AS [Total]
		,SUM(T3.ScoreWeight) AS [TotalPossible]
	FROM (
		-- adding the individual's results 
		SELECT
			 T2.[PersonId]
			,T2.PrimaryCampusId
			,T2.[CategoryId]
			,T2.[Category]
			,T2.[Weight]
			,T2.[IndexId]
			,T2.[Index]
			,T2.[ScoreWeight]
			,CASE 
				WHEN T2.AllowMultipleCompletions = 1 THEN ISNULL(RESULTS.Completions, 0) * T2.[ScoreWeight] 
				WHEN RESULTS.Completions >= 1 THEN T2.[ScoreWeight] 
				ELSE 0
			 END AS [Score]
		FROM (
			-- a list of all engagement people outer applied to the list of engagement indices
			SELECT  
				 P.Id AS [PersonId]
				,P.PrimaryCampusId
				,T1.[CategoryId]
				,T1.[Category]
				,T1.[Weight]
				,T1.[IndexId]
				,T1.[Index]
				,T1.[ScoreWeight]
				,T1.[AllowMultipleCompletions]
			FROM Person P
			INNER JOIN DataViewPersistedValue V ON V.EntityId = P.Id AND V.DataViewID = 1150
			OUTER APPLY (
				-- this is a list of all active categories and indices
				SELECT 
					 C.Id AS [CategoryId]
					,C.[Name] AS [Category]
					,C.[Weight]
					,C.[HtmlColor]
					,I.Id AS [IndexId]
					,I.[Name] AS [Index]
					,I.[ScoreWeight]
					,I.[AllowMultipleCompletions]
				FROM [_org_rivervalley_engagement_engagementindex] I
				INNER JOIN [_org_rivervalley_engagement_engagementindexcategory] C ON C.Id = I.CategoryId
				WHERE C.IsActive = 1 AND I.IsActive = 1
			)  T1
			INNER JOIN Campus CC ON CC.Id = P.PrimaryCampusId
			WHERE(@CampusId = '-1' OR CC.Id = @CampusId)
		) T2
		LEFT JOIN (
			SELECT PA.[PersonId], R.[EngagementIndexId], R.[Completions]
			FROM [_org_rivervalley_engagement_engagementindexresult] R
			INNER JOIN PersonAlias PA ON PA.Id = R.PersonAliasId
			WHERE R.RunDate = @RunDate
		) RESULTS ON RESULTS.PersonId = T2.PersonId AND RESULTS.EngagementIndexId = T2.[IndexId]
	) T3
	GROUP BY T3.[PersonId], T3.PrimaryCampusId, T3.[CategoryId], T3.[Category], T3.[Weight]
)

SELECT 
	 AED.[CategoryId]
	,AED.[Category]
	,C.[HtmlColor]
	,CAST(AVG(AED.Total) AS DECIMAL(18,2)) AS [Total]
	,MAX(AED.[TotalPossible]) AS [TotalPossible]
	,COUNT(DISTINCT AED.PersonId) AS [TotalPeople]
FROM (
	SELECT *
	FROM EngagementData 

	UNION ALL

	SELECT ED.PersonId, ED.PrimaryCampusId, 0, 'Total Engagement Score', CAST((CAST(SUM(ED.Total) AS DECIMAL(18,2)) / CAST(COUNT(ED.Total) AS DECIMAL(18,2))) AS DECIMAL(18,2))  AS [Total], SUM(ED.[TotalPossible]) AS [TotalPossible]
	FROM EngagementData ED
	GROUP BY ED.PersonId, ED.PrimaryCampusId
) AED
LEFT OUTER JOIN [_org_rivervalley_engagement_engagementindexcategory] C ON C.Id = AED.CategoryId
GROUP BY AED.[CategoryId], AED.[Category], C.[Order], C.[HtmlColor]--, AED.[TotalPossible]
ORDER BY C.[Order]
END