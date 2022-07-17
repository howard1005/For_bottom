const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../models/index');

let getChampionJson = function(championName, cb){
    fs.readFile(path.join(global.dragontail_path, `/data/ko_KR/champion/${championName}.json`), (err, data) => { 
        if (err) throw err
        cb(JSON.parse(data))
    })
}

 /**
  * @swagger
  * /forbot/v1/champion/all-url:
  *   get:
  *     summary: 챔피언 모든 url 가져오기
  *     tags: [Champion]
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
    const ip = req.header["x-forwarded-for"] || req.connection.remoteAddress;
    global.logger.info(`[${__filename}][/img/all-url] ip : ${ip}`, req.headers);
    // global.logger.info(`${req.headers}`)
    (new Promise((resolve, reject) => {
        imgs_path = path.join(global.dragontail_path, `/img/champion`)
        fs.readdir(imgs_path, function(error, filelist){
            var urlList = [];
            for (var i in filelist) {
                var fileName = filelist[i]
                var id = fileName.replace('.png','')
                urlList.push({
                    id : id, 
                    img_href : `http://${global.serverAdress}/dragontail/img/champion/${fileName}`,
                    ability : `http://${global.serverAdress}/forbot/v1/champion/ability/${id}`
                });
            }
            resolve(urlList);
        })
    })).then((urlList) => res.send({data : urlList}))
});

 /**
  * @swagger
  * /forbot/v1/champion/ability/{id}:
  *   get:
  *     summary: 챔피언 id로 정보 가져오기
  *     tags: [Champion]
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: string
  *           description: champion id
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
  router.get(`/ability/:id`, function(req, res){
    global.logger.info(`[${__filename}][/ability/${req.params.id}] `, req.headers);
    (new Promise((resolve, reject) => {
        getChampionJson(req.params.id, (data) => {
            var champInfo = data.data[`${req.params.id}`]
            champInfo.image.full = `http://${global.serverAdress}/dragontail/img/champion/` + champInfo.image.full
            var spells = champInfo.spells
            for (var i in spells){
                spells[i].image['full'] = `http://${global.serverAdress}/dragontail/img/spell/` + spells[i].image.full
            }
            var passive = champInfo.passive
            passive.image.full = `http://${global.serverAdress}/dragontail/img/passive/` +  passive.image.full
            resolve(champInfo)
        })
    })).then((data) => res.send({
        data : data
    }))
});

module.exports = router;