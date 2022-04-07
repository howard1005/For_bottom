const express = require('express');
const router = express.Router();

router.get(`/champions/:champion_name`, function(req, res){
    res.send([{
            opponent: `1`,
            weight: `추천 정도`
        },
        {
            opponent: `2`,
            weight: `추천 정도`
        },
    ]);
});


module.exports = router;