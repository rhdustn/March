const {signUp} = require("../contollers/signupContoller");

const router = require("express").Router();

router.post('/',signUp);

module.exports = router