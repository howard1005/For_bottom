const express = require('express');
const fs = require('fs');
const path = require("path");
const router = express.Router();

router.get(`/`, function(req, res){
    console.log("[index][/] " + Date());
    release_path = path.join(__dirname, "../../for_bot/build/index.html")
    console.log("[index][/] " + "release_path : " +  release_path);
    fs.exists(release_path, exists => {
        if(exists) res.sendFile(release_path);
        else res.send("Not release!");
    })
});


module.exports = router;