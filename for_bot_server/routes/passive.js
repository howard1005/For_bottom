const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../models/index');

 /**
  * @swagger
  * /forbot/v1/passive/all-url:
  *   get:
  *     summary: passive 모든 url 가져오기
  *     tags: [Passive]
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
        imgs_path = path.join(global.dragontail_path, `/img/passive`)
        fs.readdir(imgs_path, function(error, filelist){
            var urlList = [];
            for (var i in filelist) {
                var fileName = filelist[i]
                urlList.push({
                    id : fileName.replace('.png',''), 
                    img_href : `http://${global.serverAdress}/dragontail/img/passive/${fileName}`}
                    );
            }
            resolve(urlList);
        })
    })).then((urlList) => res.send({data : urlList}))
});


module.exports = router;