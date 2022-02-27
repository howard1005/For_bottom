# Riot API

- 관련 자료 : https://blog.uniony.me/lol/riot-api/
- 라이엇에서는 개발용 api key와 공개용 api key를 구분하여 발급해 준다. 공개용(대형 오픈 웹사이트)은 절차에 따라 적절한 기준을 충족해줘야 발급해준다.일단 개발용으로 사용 하며, expire기간이 짧은 만큼 개발시에 수시로 갱신하여 사용해야 할것 같다.
- RATE LIMITS
  20 requests every 1 seconds(s)
  100 requests every 2 minutes(s)

# API

- 라이엇 개발 페이지에서 API test를 온라인으로 제공해 준다(https://developer.riotgames.com/apis)이를 참고하여 기능 정리필요하다.
- 데이터 분석이 필요 하므로 기본 구현은 Python으로 api class 구현

# 구글 Docs에 API 정리중이다.
https://docs.google.com/spreadsheets/d/1ud1CjRezWv2N13RCcIIF3utwKzC4JEF1cA16CM1cXzg/edit#gid=0

# TODO
-[ ] API 설명 정리
-[ ] API field 값 정리
- https://developer.riotgames.com/docs/lol 데이터 가공

# API Url List

- ACCOUNT-V1
  |     | URL                                                            | 설명                          |
  | --- | -------------------------------------------------------------- | ----------------------------- |
  | GET | /riot/account/v1/accounts/by-puuid/{puuid}                     | Get account by puuid          | 
  | GET | /riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}      | Get account by riot id        | 
  | GET | /riot/account/v1/accounts/meGet                                | account by access token       |
  | GET | /riot/account/v1/active-shards/by-game/{game}/by-puuid/{puuid} | Get active shard for a player |
- CHAMPION-MASTERY-V4
  |     | URL                                                                                                    | 설명                                                                                                |
  | --- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
  | GET | /lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}                          | Get all champion mastery entries sorted by number of champion points descending                     |
  | GET | /lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId}/by-champion/{championId} | Get a champion mastery by player ID and champion ID                                                 |
  | GET | /lol/champion-mastery/v4/scores/by-summoner/{encryptedSummonerId}                                      | Get a player's total champion mastery score, which is the sum of individual champion mastery levels |
- CHAMPION-V3
  |     | URL                                 | 설명                                                                                           |
  | --- | ----------------------------------- | ---------------------------------------------------------------------------------------------- |
  | GET | /lol/platform/v3/champion-rotations | Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST) |

- CLASH-V1
  |     | URL                                            | 설명                                    |
  | --- | ---------------------------------------------- | --------------------------------------- |
  | GET | /lol/clash/v1/players/by-summoner/{summonerId} | Get players by summoner ID.             |
  | GET | /lol/clash/v1/teams/{teamId}                   | Get team by ID.                         |
  | GET | /lol/clash/v1/tournaments                      | Get all active or upcoming tournaments. |
  | GET | /lol/clash/v1/tournaments/by-team/{teamId}     | Get tournament by team ID.              |
  | GET | /lol/clash/v1/tournaments/{tournamentId}       | Get tournament by ID.                   |
