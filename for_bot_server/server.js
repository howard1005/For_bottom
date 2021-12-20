const express = require("express");
const app = express();

app.listen(8080, function(){
    console.log("for bot server start");
});

app.get('/test', function(req, res){
    res.send("최창우의 적극적인 참여 바람!");
});


app.get('/forbot/v1/champion/info/all', function(req, res){

});

app.get('/forbot/v1/champion/img/all-url', function(req, res){

});

app.get('/forbot/v1/recommend/champions/:champion_name', function(req, res){

});

app.get('/forbot/v1/analysis/bottom-match/:user_name', function(req, res){

});