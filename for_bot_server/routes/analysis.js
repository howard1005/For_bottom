const express = require('express');
const router = express.Router();

const pythonHandler = require('../python_handler/python_handler')
router.get(`/bottom-match`, function(req, res){
    datas = [];
    pythonHandler(__dirname + '/../../riot_api/riot_dispatcher.py', 
                    ['riot-api/get-summoner-by-summoner-name', 'hide on bush'])
                    .then((data) => datas.push(data))
                    .then(
    pythonHandler(__dirname + '/../../riot_api/riot_dispatcher.py', 
                    ['riot-api/get-league-entries-by-summoner-name', 'hide on bush'])
                    .then((data) => datas.push(data))
                    ).then(() => res.send(datas))
});


module.exports = router;