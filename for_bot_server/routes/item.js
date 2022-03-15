const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../models/index');

let getItemJson = function(cb){
    fs.readFile(path.join(global.dragontail_path, `/data/ko_KR/item.json`), (err, data) => { 
        if (err) throw err
        cb(JSON.parse(data))
    })
}

 /**
  * @swagger
  * /forbot/v1/item/all-url:
  *   get:
  *     summary: item 모든 url 가져오기
  *     tags: [Item]
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
        imgs_path = path.join(global.dragontail_path, `/img/item`)
        fs.readdir(imgs_path, function(error, filelist){
            getItemJson((itemJSon) => {
                var imgUrlList = [];
                for (var i in filelist) {
                    var fileName = filelist[i]
                    imgUrlList.push({
                      id: fileName.replace(".png", ""),
                      name: itemJSon.data[fileName.replace(".png", "")]["name"],
                      img_href: `http://${global.serverAdress}/dragontail/img/item/${fileName}`,
                      data_api: `http://${global.serverAdress}/forbot/v1/item/${fileName.replace(".png", "")}`
                    });
                }
                resolve(imgUrlList);
            });

        })
    })).then((imgUrlList) => res.send({item_images : imgUrlList}))
});

 /**
  * @swagger
  * /forbot/v1/item/img/all-url:
  *   get:
  *     summary: item 이미지모든 url 가져오기
  *     tags: [Item]
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
        imgs_path = path.join(global.dragontail_path, `/img/item`)
        fs.readdir(imgs_path, function(error, filelist){
            getItemJson((itemJSon) => {
                var imgUrlList = [];
                for (var i in filelist) {
                    var fileName = filelist[i]
                    imgUrlList.push({
                      id: fileName.replace(".png", ""),
                      name: itemJSon.data[fileName.replace(".png", "")]["name"],
                      url: `http://${global.serverAdress}/dragontail/img/item/${fileName}`,
                      data_api: `http://${global.serverAdress}/forbot/v1/item/${fileName.replace(".png", "")}`
                    });
                }
                resolve(imgUrlList);
            });

        })
    })).then((imgUrlList) => res.send({item_images : imgUrlList}))
});

 /**
  * @swagger
  * /forbot/v1/item/{id}:
  *   get:
  *     summary: item에 대한 상세 정보 가져오기
  *     tags: [Item]
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: string
  *           description: item id
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
router.get(`/:id`, function (req, res) {
  global.logger.info(`[${__filename}][/${req.params.id}] `, req.headers);

  new Promise((resolve, reject) => {
    getItemJson((itemJSon) => resolve(itemJSon.data[req.params.id]));
  }).then((imgUrlList) => res.send({ item_images: imgUrlList }));
});

module.exports = router;