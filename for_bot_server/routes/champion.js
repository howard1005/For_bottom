const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../models/index');

router.get(`/info/all`, function(req, res){
    res.send("TODO");
});


 /**
  * @swagger
  * /forbot/v1/champion/img/all-url:
  *   get:
  *     summary: 챔피언 이미지의 모든 url 가져오기
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
router.get(`/img/all-url`, function(req, res){
    global.logger.info(`[${__filename}][/img/all-url] `, req.headers);
    (new Promise((resolve, reject) => {
        imgs_path = path.join(global.dragontail_path, `/img/champion`)
        fs.readdir(imgs_path, function(error, filelist){
            var imgUrlList = [];
            for (var i in filelist) {
                var fileName = filelist[i]
                imgUrlList.push({id : fileName.replace('.png',''), url : `http://${global.serverAdress}/dragontail/img/champion/${fileName}`});
            }
            resolve(imgUrlList);
        })
    })).then((imgUrlList) => res.send({champion_images : imgUrlList}))
});

 /**
  * @swagger
  * /forbot/v1/champion/ability/all-url:
  *   get:
  *     summary: 챔피언 능력치 정보의 모든 url 가져오기
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
router.get(`/ability/all-url`, function(req, res){
    global.logger.info(`[${__filename}][/ability/all-url] `, req.headers);
    (new Promise((resolve, reject) => {
        imgs_path = path.join(global.dragontail_path, `/data/ko_KR/champion`)
        fs.readdir(imgs_path, function(error, filelist){
            var imgUrlList = [];
            for (var i in filelist) {
                var fileName = filelist[i]
                imgUrlList.push({id : fileName, url : `http://${global.serverAdress}/dragontail/data/ko_KR/champion/${fileName}`});
            }
            resolve(imgUrlList);
        })
    })).then((imgUrlList) => res.send({champion_images : imgUrlList}))
});

module.exports = router;