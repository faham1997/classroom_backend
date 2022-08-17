const express = require("express");
const router = express.Router();

const { info } = require("../contollers/user.controller");

router.route("/info").get(info);

module.exports = router;
