const express = require('express');
const router = express.Router();

const async = require('async');
const pythonHandler = require('../python_handler/python_handler')

let riot_api = function(url, args, cb){
    var python_args = []
    python_args.concat(url, args)
    pythonHandler(__dirname + "/../../riot_api/riot_dispatcher.py", python_args).then((data) => cb(null, data));
}

router.get(`/bottom-match/:champion_name`, function(req, res){
    console.log("champion name : " + req.params.champion_name)
    datas = [];

    async.waterfall([
        function(callback) {
            pythonHandler(__dirname + '/../../riot_api/riot_dispatcher.py', 
                    ['riot-api/get-summoner-by-summoner-name', 'hide on bush'])
                    .then((data) => callback(null, data))
        },
        function(data, callback) {
            datas.push(data)
            pythonHandler(__dirname + '/../../riot_api/riot_dispatcher.py', 
                    ['riot-api/get-league-entries-by-summoner-name', 'hide on bush'])
                    .then((data) => callback(null, data))
        },
        function(data, callback) {
            datas.push(data)
            pythonHandler(__dirname + '/../../riot_api/riot_dispatcher.py', 
                    ['riot-api/get-matchs-by-summoner-name', 'hide on bush'])
                    .then((data) => callback(null, data))
        },
        function(data, callback) {
            datas.push(data);
            res.send(datas);
        }
    ], function (err, result) {
        if(err){
          console.log('Error 발생');
        }else {
          console.log('result : '+ result);
        } 
    });
});


module.exports = router;