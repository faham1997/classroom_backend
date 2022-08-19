const express = require("express");
const router = express.Router();

const { info } = require("../contollers/user.controller");
const {
  createCourse,
  getAllCourse,
} = require("../contollers/course.controller");

router.route("/info").get(info);
router.route("/getAllCourse").get(getAllCourse);
router.route("/createCourse").post(createCourse);

module.exports = router;
