const router =  require("express").Router();

const { UploadUser } = require("../contollers/loginContoller");
const {Upload} = require("../img")

router.post("/",Upload.single("upload"),UploadUser)
module.exports = router