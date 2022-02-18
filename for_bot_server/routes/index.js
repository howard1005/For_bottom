const express = require('express');
const router = express.Router();

router.get(`/`, function(req, res){
    console.log("[index][/] " + Date());
    release_path = path.join(__dirname, "../client/build", "index.html")
    fs.exists(release_path, exists => {
        if(exists) res.sendFile(release_path);
        else res.send("Not release!");
    })
});


module.exports = router;