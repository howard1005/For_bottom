# Riot API TEST
 - 관련 자료 : https://blog.uniony.me/lol/riot-api/
 - 라이엇에서는 개발용 api key와 공개용 api key를 구분하여 발급해 준다. 공개용(대형 오픈 웹사이트)은 절차에 따라 적절한 기준을 충족해줘야 발급해준다.  
 일단 개발용으로 사용 하며, expire기간이 짧은 만큼 개발시에 수시로 갱신하여 사용해야 할것 같다.

 - RATE LIMITS  
    20 requests every 1 seconds(s)  
    100 requests every 2 minutes(s)
 - API key :  RGAPI-a402494a-e0ac-4a97-9ec1-08e9e706fe2d  
   (Expires: Wed, Dec 15th, 2021 @ 5:43am (PT) in 23 hours and 59 minutes)

# API 정리
 - 라이엇 개발 페이지에서 API test를 온라인으로 제공해 준다(https://developer.riotgames.com/apis#account-v1/GET_getByPuuid)  
 이를 참고하여 기능 정리하겠다.