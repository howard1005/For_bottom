const indexRouter = require('./routes/index');
const championRouter = require('./routes/champion');
const recommendRouter = require('./routes/recommend');
const analysisRouter = require('./routes/analysis');
const itemRouter = require('./routes/item');
const passiveRouter = require('./routes/passive');
const summonerRouter = require('./routes/summoner');

const sequelize = require('./models').sequelize;
const path = require("path");
const cors = require('cors');

const { swaggerUi, specs } = require('./swagger/swagger');

const express = require("express");
const app = express();

sequelize.sync();

global.logger = require('./config/winston');
global.serverAdress = "211.218.213.188:8081";
global.port = 8080;
global.resource_path = path.join(__dirname, "../for_bot/build")
global.dragontail_path = path.join(__dirname, "./dragontail-12.3.1/12.3.1")



app.listen(port, function(){
    console.log(`for bot server start ${global.port} \n external server adress : ${global.serverAdress}`);
});

app.use(function(req, res, next) {
    global.logger.info(`for bot server req url : ` + req.url);
    next();
});

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/static', express.static(path.join(global.resource_path, "/static")));
app.use('/dragontail', express.static(global.dragontail_path));

app.use('/forbot/v1/champion', championRouter);
app.use('/forbot/v1/recommend', recommendRouter);
app.use('/forbot/v1/analysis', analysisRouter);
app.use('/forbot/v1/item', itemRouter);
app.use('/forbot/v1/passive', passiveRouter);
app.use('/forbot/v1/summoner', summonerRouter);

app.use('*', indexRouter);