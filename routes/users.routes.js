const express = require("express");
const router = express.Router();
const { info } = require("../contollers/user.controller");
const { requireAuth } = require("../middlewares/authentication");

router.route("/info").get(requireAuth, info);

module.exports = router;
