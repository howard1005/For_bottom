const express = require('express');
const fs = require('fs');
const path = require("path");
const router = express.Router();

router.get(`/`, function(req, res){
    console.log("[index][/] " + Date());
    release_path = path.join(global.resource_path, "/index.html")
    global.logger.info("[index][/] " + "release_path : " +  release_path);
    fs.exists(release_path, exists => {
        if(exists) res.sendFile(release_path);
        else res.status(400).send("Not release!");
    })
});


module.exports = router;