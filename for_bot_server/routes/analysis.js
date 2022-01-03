const express = require('express');
const router = express.Router();

const pythonHandler = require('../python_handler/python_handler')

router.get(`/bottom-match/:user_name`, function(req, res){
    res.send("TODO");
});


module.exports = router;