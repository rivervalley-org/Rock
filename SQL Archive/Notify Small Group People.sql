/*
Notify Small Group People - Did Not Get a Notification
*/

SELECT
	 P.Id
	,P.NickName
	,P.LastName
	,G.[Id] AS [GroupId]
	,G.[Name] AS [Group]
	,C.[Name] AS [Campus]
	,CAST(GM.DateTimeAdded AS DATE) AS [DateAdded]
	,CAST(AV1.[ValueAsDateTime] AS DATE) AS [StartDate]
	,L.Street1 + '<br/>' + L.[City] + ', ' + L.[State] + ' ' + L.PostalCode AS [Address]
	,CONVERT(varchar, S.WeeklyTimeOfDay, 100) AS [StartTime]
	--,'<a href="/WorkflowEntry/200?PersonId=' + CAST(P.Id AS VARCHAR) + '&GroupId=' + CAST(G.Id AS VARCHAR) + '" target="_blank" class="btn btn-danger"><i class="fa fa-gear"></i></a>' AS [Launch Notification Workflow]
	--,dbo._org_rivervalley_ufnConvertMultiValueToDefinedValues( AV.[Value]) AS [Lifegroup Type(s)]
FROM GroupMember GM
INNER JOIN Person P ON P.Id = GM.PersonId
INNER JOIN [Group] G ON G.Id = GM.GroupId
INNER JOIN [Schedule] S ON S.Id = G.ScheduleId
INNER JOIN Campus C ON C.Id = G.CampusId
INNER JOIN [Location] L ON L.Id = C.LocationId
INNER JOIN AttributeValue AV ON AV.EntityId = G.Id
INNER JOIN Attribute A ON A.Id = AV.AttributeId AND A.[Key] = 'Type'
INNER JOIN AttributeValue AV1 ON AV1.EntityId = G.Id
INNER JOIN Attribute A1 ON A1.Id = AV1.AttributeId AND A1.[Key] = 'StartDate'
WHERE G.GroupTypeId = 32 -- Lifegroups Area
	AND GM.DateTimeAdded >= '8/1/2019'
	AND AV1.[ValueAsDateTime] >= GETDATE() -- start date
	AND GM.GroupMemberStatus = 1
	AND GM.GroupRoleId = 49 -- member
	AND P.Email != ''
	AND P.IsEmailActive = 1
	/* Person did not already receive a survey notification */
	AND P.Id NOT IN ( 
		SELECT PA.PersonId
		FROM Workflow W
		INNER JOIN AttributeValue AV ON AV.EntityId = W.Id
		INNER JOIN Attribute A ON A.Id = AV.AttributeId AND A.[Key] = 'Person'
		INNER JOIN PersonAlias PA ON PA.[Guid] = TRY_CAST(AV.[Value] AS uniqueidentifier)
		WHERE W.WorkflowTypeId = 200
	)
	/* The life group type is one of these... */
	AND (
		AV.[Value] LIKE '%c6cebc3e-cac6-4a6c-bf7c-497c08108142%' OR -- Sisterhood
		AV.[Value] LIKE '%6f65acb1-37a9-41c7-b433-074ce659a210%' OR -- Alpha
		AV.[Value] LIKE '%730a2799-ae90-4eef-8fee-5b272d75c606%' -- Freedom
	)
	/* excluding campuses that do not meet on campus */
	AND C.[Name] != 'Minneapolis'
	AND C.[Name] != 'St Paul'
ORDER BY C.[Name], P.LastName, P.NickName


