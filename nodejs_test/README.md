# Nodejs 학습
## 환경 및 settings
- Ubuntu18.04
- nodejs, npm 설치
- 버전이 낮게 설치될 경우를 피하기 위하여 아래와 같이 curl이용하여 apt repo 설정 필요
(react 필수 버전 : " Node 14.0.0 혹은 상위 버전 및 npm 5.6 혹은 상위 버전")
```bash
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt install nodejs
```

## 실행 방법
```bash
$ npm install
$ npm install -g nodemon

$ npm start

or

$ nodemon start
```