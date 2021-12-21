const express = require("express");
const app = express();
const router = express.Router();

const fs = require('fs');
const adress = "14.32.21.158:8081";

const port = 8080;

app.listen(port, function(){
    console.log(`for bot server start ${port} \n external adress : ${adress}`);
});

app.get(`/`, function(req, res){
    res.send("최창우의 적극적인 참여 바람!");
});

app.use(`/images`, function(req, res, next) {
    console.log(`call static images ${req.url}`);
    next();
});
app.use(`/images`, express.static(__dirname + `/images`));

app.get(`/forbot/v1/champion/info/all`, function(req, res){
    res.send("TODO");
});

app.get(`/forbot/v1/champion/img/all-url`, function(req, res){
    fs.readdir(__dirname + `/images`, function(error, filelist){
        var img_url_list = [];
        for (var i in filelist) {
            var file_name = filelist[i]
            console.log(file_name);
            img_url_list.push({id : file_name, url : `${adress}/images/${file_name}`});
        }
        res.send(img_url_list);
    })
});

app.get(`/forbot/v1/recommend/champions/:champion_name`, function(req, res){
    res.send("TODO");
});

app.get(`/forbot/v1/analysis/bottom-match/:user_name`, function(req, res){
    res.send("TODO");
});