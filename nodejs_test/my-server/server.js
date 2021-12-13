const express = require("express");
const app = express();

app.listen(8080, function(){
    console.log("asd1asd");
});

app.get('/test', function(req, res){
    res.send("최창우의 적극적인 참여 바람!");
});