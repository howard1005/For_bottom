# For Bottom Server
Server based on Server

## Server 구동
```bash
nodemon server.js

or

node server.js

or

npm start
```

## Nodejs 기본소양
- https://myeonguni.tistory.com/1582

## ORM sequelize
- https://charlie-choi.tistory.com/m/227
- https://baeharam.netlify.app/posts/Node.js/Node.js-Sequelize-%EB%8B%A4%EB%A3%A8%EA%B8%B0
- https://alencion.tistory.com/48

## SERVER API LIST
- 기본적인 api
    ||URL|설명|
    |-----|---|---|
    |GET|/forbot/v1/champion/info/all|모든 챔피언 정보 리스트 받기|
    |GET|/forbot/v1/champion/img/all-url|모든 챔피언 이미지(url) 받기|

- 분석이 필요한 api
    ||URL|설명|
    |-----|---|---|
    |GET|/forbot/v1/recommend/champions/{champion name}|챔파온 이름으로 추천 봇듀 챔피언 목록들|
    |GET|/forbot/v1/analysis/bottom-match/{user name}|유처 이름으로 현재 인게임 유불리 분석|

