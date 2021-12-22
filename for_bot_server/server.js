const express = require("express");
const app = express();
const championRouter = require('./routes/champion');
const recommendRouter = require('./routes/recommend');
const analysisRouter = require('./routes/analysis');

global.adress = "14.32.21.158:8081";
global.port = 8080;

app.listen(port, function(){
    console.log(`for bot server start ${port} \n external adress : ${adress}`);
});

app.get(`/`, function(req, res){
    res.send("최창우의 적극적인 참여 바람!");
});

app.use('/forbot/v1/champion', championRouter);
app.use('/forbot/v1/recommend', recommendRouter);
app.use('/forbot/v1/analysis', analysisRouter);
