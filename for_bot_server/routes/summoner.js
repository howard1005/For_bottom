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

 /**
  * @swagger
  * /forbot/v1/summoner/data:
  *   get:
  *     summary: summoner(소환사 주문) 데이터 가져오기
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
router.get(`/data`, function(req, res){
    global.logger.info(`[${__filename}][/data] `, req.headers);
    (new Promise((resolve, reject) => {
        getSummonerJson((data) => resolve(data))
    })).then((data) => res.send({summoner : data.data}))
});

module.exports = router;