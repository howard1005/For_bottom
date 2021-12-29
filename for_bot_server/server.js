const indexRouter = require('./routes/index');
const championRouter = require('./routes/champion');
const recommendRouter = require('./routes/recommend');
const analysisRouter = require('./routes/analysis');

const sequelize = require('./models').sequelize;

const express = require("express");
const app = express();

sequelize.sync();

global.logger = require('./config/winston');
global.serverAdress = "211.218.215.226:8081";
global.port = 8080;

app.listen(port, function(){
    console.log(`for bot server start ${global.port} \n external server adress : ${global.serverAdress}`);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    next();
});


app.use('/', indexRouter);
app.use('/forbot/v1/champion', championRouter);
app.use('/forbot/v1/recommend', recommendRouter);
app.use('/forbot/v1/analysis', analysisRouter);
