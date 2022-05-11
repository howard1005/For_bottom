const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../models/index');

let getSummonerJson = function(cb){
    fs.readFile(path.join(global.dragontail_path, `/data/ko_KR/summoner.json`), (err, data) => { 
        if (err) throw err
        cb(JSON.parse(data))
    })
}

// getChampionJson(req.params.id, (data) => {
//     var champInfo = data.data[`${req.params.id}`]
//     champInfo.image.full = `http://${global.serverAdress}/dragontail/img/champion/` + champInfo.image.full
//     var spells = champInfo.spells
//     for (var i in spells){
//         spells[i].image['full'] = `http://${global.serverAdress}/dragontail/img/spell/` + spells[i].image.full
//     }
//     var passive = champInfo.passive
//     passive.image.full = `http://${global.serverAdress}/dragontail/img/passive/` +  passive.image.full
//     resolve(champInfo)
// })

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
                summonerSpell.image.full = `http://${global.serverAdress}/dragontail/img/champion/` + summonerSpell.image.full
            }
            resolve(summonerJson.data);
        })
    })).then((urlList) => res.send({data : urlList}))
});

 /**
  * @swagger
  * /forbot/v1/summoner/{id}:
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
router.get(`/:id`, function(req, res){
    global.logger.info(`[${__filename}][/${req.params.id}] `, req.headers);
    (new Promise((resolve, reject) => {
        getSummonerJson((summonerJson) => {
            resolve(summonerJson.data[`${req.params.id}`]);
        })
    })).then((data) => res.send(data))
});

module.exports = router;