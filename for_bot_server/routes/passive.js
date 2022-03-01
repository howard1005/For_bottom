const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const db = require('../models/index');

router.get(`/img/all-url`, function(req, res){
    global.logger.info(`[${__filename}][/img/all-url] `, req.headers);
    (new Promise((resolve, reject) => {
        imgs_path = path.join(global.dragontail_path, `/img/passive`)
        fs.readdir(imgs_path, function(error, filelist){
            var imgUrlList = [];
            for (var i in filelist) {
                var fileName = filelist[i]
                imgUrlList.push({id : fileName.replace('.png',''), url : `http://${global.serverAdress}/dragontail/img/passive/${fileName}`});
            }
            resolve(imgUrlList);
        })
    })).then((imgUrlList) => res.send({champion_images : imgUrlList}))
});

module.exports = router;