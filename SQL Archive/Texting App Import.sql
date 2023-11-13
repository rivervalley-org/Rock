SELECT 
	 [subscribed_user_phone]
	,PRIMARYPERSON.Id
	,PRIMARYPERSON.[NickName]
	,PRIMARYPERSON.[LastName]
    ,CONTACT.[Info] AS [Linked People]
FROM [_csv_SubscriberExport] SE
OUTER APPLY (
	SELECT
	STUFF((
	SELECT ' ' + '<a href="/Person/' + CAST(P.Id AS VARCHAR) + '">' + P.NickName + ' ' + P.LastName + ' (' + DV.[Value] + ')</a><br/>' 
	FROM Person P
	INNER JOIN GroupMember GM
		ON GM.PersonId = P.Id
		AND GM.GroupId = P.PrimaryFamilyId
	INNER JOIN PhoneNumber PN
		ON PN.PersonId = P.Id
	INNER JOIN DefinedValue DV
		ON DV.Id = PN.NumberTypeValueId
	WHERE PN.Number = REPLACE(SE.subscribed_user_phone, '+1','')
		AND PN.NumberTypeValueId = 12
		AND P.RecordTypeValueId = 1
	ORDER BY GM.GroupRoleId, P.Gender
	FOR XML PATH (''), TYPE
    ).value('.', 'varchar(max)'), 1, 1, '') AS [Info]
) CONTACT
OUTER APPLY (
	SELECT TOP 1 P.Id, P.NickName, P.LastName
	FROM Person P
	INNER JOIN GroupMember GM
		ON GM.PersonId = P.Id
		AND GM.GroupId = P.PrimaryFamilyId
	INNER JOIN PhoneNumber PN
		ON PN.PersonId = P.Id
	INNER JOIN DefinedValue DV
		ON DV.Id = PN.NumberTypeValueId
	WHERE PN.Number = REPLACE(SE.subscribed_user_phone, '+1','')
		AND PN.NumberTypeValueId = 12
		AND P.RecordTypeValueId = 1
	ORDER BY GM.GroupRoleId, P.Gender
) PRIMARYPERSON