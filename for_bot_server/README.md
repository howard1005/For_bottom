# For Bottom Server
Server based on Server

## SERVER API LIST
- 기본적인 api
    ||URL|설명|
    |-----|---|---|
    |GET|/forbot/v1/champion/all/info|모든 챔피언 정보 리스트 받기|
    |GET|/forbot/v1/champion/all/img|모든 챔피언 이미지(url) 받기|

- 분석이 필요한 api
    ||URL|설명|
    |-----|---|---|
    |GET|/forbot/v1/recommend/champions/{champion name}|챔파온 이름으로 추천 봇듀 챔피언 목록들|
    |GET|/forbot/v1/analysis/bottom-match/{user name}|유처 이름으로 현재 인게임 유불리 분석|

