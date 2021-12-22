const express = require('express');
const router = express.Router();

router.get(`/champions/:champion_name`, function(req, res){
    res.send("TODO");
});


module.exports = router;