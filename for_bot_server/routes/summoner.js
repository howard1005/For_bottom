const express = require('express');
const router = express.Router();
const api = require('../util/api');
const fs = require('fs');
const path = require('path');
const db = require('../models/index');

let getSummonerJson = function(cb){
    fs.readFile(path.join(global.dragontail_path, `/data/ko_KR/summoner.json`), (err, data) => { 
        if (err) throw err
        cb(JSON.parse(data))
    })
}

 /**
  * @swagger
  * /forbot/v1/summoner/all-url:
  *   get:
  *     summary: summoner(소환사 주문) 모든 url 가져오기
  *     tags: [Summoner]
  *     responses:
  *       200:
  *         description: 성공
  *       403:
  *         description: BadRequest
  *       404:
  *         description: NotFound
  *       500:
  *         description: InternalError
  */
  router.get(`/all-url`, function(req, res){
    global.logger.info(`[${__filename}][/all-url] `, req.headers);
    (new Promise((resolve, reject) => {
        getSummonerJson((summonerJson) => {
            for (var i in summonerJson.data){
                summonerSpell = summonerJson.data[i]
                summonerSpell.image.full = `http://${global.serverAdress}/dragontail/img/spell/` + summonerSpell.image.full
                summonerSpell.image.sprite = `http://${global.serverAdress}/dragontail/img/sprite/` + summonerSpell.image.sprite
            }
            resolve(summonerJson.data);
        })
    })).then((urlList) => res.send({data : urlList}))
});

 /**
  * @swagger
  * /forbot/v1/summoner/spell/{id}:
  *   get:
  *     summary: summoner(소환사 주문) 데이터 가져오기
  *     tags: [Summoner]
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: string
  *           description: summoner id
  *     responses:
  *       200:
  *         description: 성공
  *       403:
  *         description: BadRequest
  *       404:
  *         description: NotFound
  *       500:
  *         description: InternalError
  */
router.get(`/spell/:id`, function(req, res){
    global.logger.info(`[${__filename}][/${req.params.id}] `, req.headers);
    (new Promise((resolve, reject) => {
        getSummonerJson((summonerJson) => {
            resolve(summonerJson.data[`${req.params.id}`]);
        })
    })).then((data) => res.send(data))
});

 /**
  * @swagger
  * /forbot/v1/summoner/info/{name}:
  *   get:
  *     summary: 소환사 닉네임 기반으로 summoner 정보 가져오기
  *     tags: [Summoner]
  *     parameters:
  *       - in: path
  *         name: name
  *         required: true
  *         schema:
  *           type: string
  *           description: summoner name
  *     responses:
  *       200:
  *         description: 성공
  *       403:
  *         description: BadRequest
  *       404:
  *         description: NotFound
  *       500:
  *         description: InternalError
  */
  router.get(`/info/:name`, function(req, res){
    global.logger.info(`[${__filename}][/${req.params.name}]`, req.headers);
    (new Promise((resolve, reject) => {
        api.get(`http://${global.riotApiAdress}/forbot/v1/summoner/${req.params.name}`)
        .then(data => resolve(data))
        .catch(e => {
            global.logger.error(e)
            reject(e)
        })
    })).then((data) => res.send(data)) // data를 entity에 매칭해야함
});

module.exports = router;
