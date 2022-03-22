# For_bottom
LOL bottom match project

Realease : http://211.218.213.188:8081/

## 기반 language 고민자료 (Front:[react] - Back:[node.js or django])
https://velog.io/@sinichy7/Django-vs-NodeJS-vs-NestJS
http://tech.trenbe.com/?p=515
https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%AA%85%ED%95%9C_%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90_%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4%EB%93%A4

## 방향
프로젝트 목적등을 고려했을때, CRUD형식의 서비스 보다는 real-time 반응형 서비스로 django,spring 보다는 node.js가 Backend로 더 적합하다고 판단됨 

## React
https://ko.reactjs.org/tutorial/tutorial.html
https://codepen.io/gaearon/pen/oWWQNa?editors=0010
- CSS 자동 : https://www.toptal.com/developers/css3maker/css3-animation.html

## Django
공식 가이드 : https://docs.djangoproject.com/ko/3.2/intro/tutorial01/
동작 방식 : https://cocook.tistory.com/126

## Node.js
공식 가이드 : https://nodejs.org/ko/docs/guides/


## 요구사항



기능 리스트

1. 일단 로그인 없음
2. 바텀 챔피언 위주로 정보 보여주기
 - 원딜 챔피언이면 해당 챔피언과 라인에 섰을 때 가장 승률이 좋은 챔피언,  가장 조합 시너지가 잘 나는 챔피언(?) -> 이건 할 수 있으려나 모르겠네, 
 - 서포터 챔피언이면 해당 챔피언과 라인에 섰을 때 가장 승률이 좋은 챔피언, 위와 동일

3. 챔피언에 대한 정보 보여주기
 - 일단 스킬 찍는 순서 + 상황별 아이템 추천 또는 승률이 제일 높은 아이템 트리 추천

4. 챔피언 별 궁합 보여주기
5. 유튜브 링크 (바텀 유저)
6. 게시판 -> 고민중

[ STEP1 ]
[Main 기능 상세]
1. Mate 기능
- 해당 챔피언과 바텀라인을 섰을 때, 가장 승률이 좋은 챔피언 리스트
- (추후에 그럴 듯한 정보를 제공하기 위해 로직 추가)
2. 유, 불리 체크
- 챔피언 간 승률, gold, kda 를 통해 추출한 결과를 바탕으로 현재 상황의 유,불리를 5단계로 표헌한다.("매우 불리", "불리", "용호상박", "유리", "매우 유리")



![image](https://user-images.githubusercontent.com/16042073/143766155-565adbda-1573-44be-bcbc-5ad314c7cacd.png)
![image](https://user-images.githubusercontent.com/16042073/143766168-eff45c8c-2967-4589-9bb9-3bddf59f9fd9.png)
![image](https://user-images.githubusercontent.com/16042073/143766170-32b61278-079a-4325-9f51-cb484ebee1d5.png)
![image](https://user-images.githubusercontent.com/16042073/143766174-6da8fafe-0da1-418a-8b22-ccd0f729dcad.png)
![image](https://user-images.githubusercontent.com/16042073/143766176-c3cafe2a-fab5-4dad-858b-e9491c1a8aa2.png)
![image](https://user-images.githubusercontent.com/16042073/143766177-3cf195a5-886d-47bc-a4b1-97e384a0e40d.png)
![image](https://user-images.githubusercontent.com/16042073/146666643-7be8c925-a336-4141-938e-d0f899c0eebf.png)




[Mate Logic 접근]
1. 챔프끼리 잘 맞는다는 것의 정의 : "승률"을 기본으로 잡고, 거기서 나오는 다양한 feature들의 점수를 산정
2. feature(유저 데이터 + 객관적 데이터)를 조합해서 추천 로직을 만든다. 

[1 차 할 일]
1. 의범 : API 리펙토링
2. 나 : 전적 검색 페이지 만들기


[승률 구하기]
- League v4 api 에서 해당 티어 유저 가져오기 : encrypted summoner id 얻기
- Summoner v4 api 에서 puuid 가져오기 : 해당 유저의 puuid 얻기
- Match v5 api에서 puuid 로 match ID 가져오기 : Match ID 리스트 얻기
- Match v5 api에서 matchID 검색 : 해당 유저의 champid(플레이한 챔피언)와 승리 여부 확인할 수 
