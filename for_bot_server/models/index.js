var path = require('path'); 
var Sequelize = require('sequelize'); 

var env = process.env.NODE_ENV || 'development'; 
var config = require(path.join(__dirname, '..', 'config', 'config.json'))[env]; 
var db = {}; 

var sequelize = new Sequelize(config.database, config.username, config.password, config); 

db.sequelize = sequelize; 
db.Sequelize = Sequelize; 

db.User = require('./user')(sequelize, Sequelize);
db.Champion = require('./champion')(sequelize, Sequelize);
db.SummonerDto = require('./summoner_dto')(sequelize, Sequelize);
db.PerkStyleDto = require('./perk_style_dto')(sequelize, Sequelize);
db.PerkStyleSelectionDto = require('./perk_style_selection_dto')(sequelize, Sequelize);

module.exports = db;