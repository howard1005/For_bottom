const express = require('express');
const router = express.Router();
const fs = require('fs');

// router.use(`/images`, function(req, res, next) {
//     console.log(`call static images ${req.url}`);
//     next();
// });
router.use(`/images`, express.static(__dirname + `/champion_images`));

router.get(`/info/all`, function(req, res){
    res.send("TODO");
});

var imgUrlList = [];
router.get(`/img/all-url`, function(req, res){
    logger.info(`[${__filename}][/img/all-url] `, req.headers);
    if (imgUrlList.length == 0){
        fs.readdir(__dirname + `/champion_images`, function(error, filelist){
            for (var i in filelist) {
                var fileName = filelist[i]
                imgUrlList.push({id : fileName, url : `http://${adress}/forbot/v1/champion/images/${fileName}`});
            }
        })
    }
    res.send({champion_images : imgUrlList});
});

module.exports = router;