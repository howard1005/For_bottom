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

router.get(`/img/all-url`, function(req, res){
    global.logger.info(`[${__filename}][/img/all-url] `, req.headers);
    (new Promise((resolve, reject) => {
        fs.readdir(__dirname + `/champion_images`, function(error, filelist){
            var imgUrlList = [];
            for (var i in filelist) {
                var fileName = filelist[i]
                imgUrlList.push({id : fileName.replace('.png',''), url : `http://${global.serverAdress}/forbot/v1/champion/images/${fileName}`});
            }
            resolve(imgUrlList);
        })
    })).then((imgUrlList) => res.send({champion_images : imgUrlList}))
});

module.exports = router;