/*
    This was a one time clean up report used for migrating all of the individual "Next" dates into
    one attribute.
*/

SELECT
	 P.Id
	,P.LastName + ', ' + P.NickName AS [Name]
	,T2.[NEXT 1]
	,T2.[NEXT 2]
	,T2.[NEXT 3]
	,T2.[NEXT 4]
	,T2.[NEXT 5]
	,T2.[NEXT 6]
	,(SELECT MAX(LastUpdateDate) FROM (VALUES (T2.[NEXT 1]),(T2.[NEXT 2]),(T2.[NEXT 3]),(T2.[NEXT 4]),(T2.[NEXT 5]),(T2.[NEXT 6])) AS UpdateDate(LastUpdateDate)) AS [Most Recent Completion Date]
	,T2.[Total Completed]
	--,T2.[Total Completed (2020)]
	,CASE 
		WHEN T2.[Total Completed] >= 4 THEN 'Yes' 
		WHEN  1=1 THEN ''
	 END AS [Should get new completion date]
FROM (
	SELECT 
		 T1.[Id]
		,T1.[NEXT 1]
		,T1.[NEXT 2]
		,T1.[NEXT 3]
		,T1.[NEXT 4]
		,T1.[NEXT 5]
		,T1.[NEXT 6]
		,CASE WHEN [NEXT 1] IS NOT NULL THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 2] IS NOT NULL THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 3] IS NOT NULL THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 4] IS NOT NULL THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 5] IS NOT NULL THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 6] IS NOT NULL THEN 1 ELSE 0 END AS [Total Completed]
		,CASE WHEN [NEXT 1] >= '1/1/2020' THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 2] >= '1/1/2020' THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 3] >= '1/1/2020' THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 4] >= '1/1/2020' THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 5] >= '1/1/2020' THEN 1 ELSE 0 END +
			CASE WHEN [NEXT 6] >= '1/1/2020' THEN 1 ELSE 0 END AS [Total Completed (2020)]
	FROM (
		SELECT 
			P.Id
			,CAST(NEXT1.[ValueAsDateTime] AS DATE) AS [NEXT 1]
			,CAST(NEXT2.[ValueAsDateTime] AS DATE) AS [NEXT 2]
			,CAST(NEXT3.[ValueAsDateTime] AS DATE) AS [NEXT 3]
			,CAST(NEXT4.[ValueAsDateTime] AS DATE) AS [NEXT 4]
			,CAST(NEXT5.[ValueAsDateTime] AS DATE) AS [NEXT 5]
			,CAST(NEXT6.[ValueAsDateTime] AS DATE) AS [NEXT 6]
		FROM Person P
		LEFT OUTER JOIN AttributeValue NEXT1 ON NEXT1.EntityId = P.Id AND NEXT1.AttributeId = 3006
		LEFT OUTER JOIN AttributeValue NEXT2 ON NEXT2.EntityId = P.Id AND NEXT2.AttributeId = 3008
		LEFT OUTER JOIN AttributeValue NEXT3 ON NEXT3.EntityId = P.Id AND NEXT3.AttributeId = 3010
		LEFT OUTER JOIN AttributeValue NEXT4 ON NEXT4.EntityId = P.Id AND NEXT4.AttributeId = 3012
		LEFT OUTER JOIN AttributeValue NEXT5 ON NEXT5.EntityId = P.Id AND NEXT5.AttributeId = 3014
		LEFT OUTER JOIN AttributeValue NEXT6 ON NEXT6.EntityId = P.Id AND NEXT6.AttributeId = 3016
		LEFT OUTER JOIN AttributeValue AV ON AV.EntityId = P.Id AND AV.AttributeId = 35170
		WHERE (
			NEXT1.[ValueAsDateTime] IS NOT NULL OR
			NEXT2.[ValueAsDateTime] IS NOT NULL OR
			NEXT3.[ValueAsDateTime] IS NOT NULL OR
			NEXT4.[ValueAsDateTime] IS NOT NULL OR
			NEXT5.[ValueAsDateTime] IS NOT NULL OR
			NEXT6.[ValueAsDateTime] IS NOT NULL
		)
		AND AV.Id IS NULL
	) T1
) T2
INNER JOIN Person P ON P.Id = T2.Id
ORDER BY P.LastName, P.NickName
