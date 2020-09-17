const soundCloudController = require("../controllers/SoundCloudController")
const express = require("express");

let router = express.Router();


router.route('').get(function (req, res){
res.send("works")
})
router.route("/*")
.get(soundCloudController.handleDownloadRequest)


module.exports = router;