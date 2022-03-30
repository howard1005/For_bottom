const express = require('express');
const router = express.Router();

router.get(`/champions/:champion_name`, function(req, res){
    res.send({
        opponent: `who is!`,
        weight: `추천 정도`
    });
});


module.exports = router;