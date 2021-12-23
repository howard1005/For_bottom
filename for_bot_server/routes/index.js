const express = require('express');
const router = express.Router();

router.get(`/`, function(req, res){
    res.send("최창우의 적극적인 참여 바람!");
});


module.exports = router;