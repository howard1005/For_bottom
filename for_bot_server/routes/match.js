const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../models/index');


function get_matchs(name){
    var url = global.riotApiAdress + `/forbot/v1/get_matchs/${name}`
    fetch(url, options)
    .then((response) => console.log("response:", response))
    .catch((error) => console.log("error:", error));
}

 /**
  * @swagger
  * /forbot/v1/match/all-url:
  *   get:
  *     summary: match관련 모든 url 가져오기
  *     tags: [Match]
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
        var urlList = [];
        urlList.push({
            get_matchs : `http://${global.serverAdress}/forbot/v1/match/"{name}"`}
        );
        resolve(urlList);
    })).then((urlList) => res.send({data : urlList}))
});

 /**
  * @swagger
  * /forbot/v1/match/{name}:
  *   get:
  *     summary: 소환사 이름기반으로 match 정보 가져오기
  *     tags: [Match]
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
router.get(`/:name`, function(req, res){
    global.logger.info(`[${__filename}][/${req.params.name}] `, req.headers);
    (new Promise((resolve, reject) => {
        resolve("TODO")
    })).then((data) => res.send(data))
});


module.exports = router;