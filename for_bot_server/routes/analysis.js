const express = require('express');
const router = express.Router();

const pythonHandler = require('../python_handler/python_handler')

router.get(`/bottom-match`, function(req, res){
    pythonHandler(__dirname + '/../../riot_api/riot_dispatcher.py', 
                    ['riot-api/get-summoner-by-summoner-name', 'hide on bush'],
                    (data) => res.send({'data' : data}));
});


module.exports = router;