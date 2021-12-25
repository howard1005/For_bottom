const express = require('express');
const router = express.Router();
const fs = require('fs');

router.use(`/images`, function(req, res, next) {
    console.log(`call static images ${req.url}`);
    next();
});
router.use(`/images`, express.static(__dirname + `/champion_images`));

router.get(`/info/all`, function(req, res){
    res.send("TODO");
});

var img_url_list = [];
router.get(`/img/all-url`, function(req, res){
    logger.info(`[${__filename}][/img/all-url] ` , req.headers);
    fs.readdir(__dirname + `/champion_images`, function(error, filelist){
        if (img_url_list.length == 0){
            for (var i in filelist) {
                var file_name = filelist[i]
                img_url_list.push({id : file_name, url : `http://${adress}/forbot/v1/champion/images/${file_name}`});
            }
        }
        res.send({champion_images : img_url_list});
    })
});

module.exports = router;