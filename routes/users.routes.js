const { requireAuth } = require("../middlewares/authentication");
const { checkIfTeacher } = require("../middlewares/professionMiddlewares");
const express = require("express");
const router = express.Router();

const { info } = require("../contollers/user.controller");
const {
  createCourse,
  getAllCourse,
} = require("../contollers/course.controller");

router.route("/info").get(info);
router.route("/getAllCourse").get(requireAuth, getAllCourse);
router.route("/createCourse").post(requireAuth, createCourse);

module.exports = router;
