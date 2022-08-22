const { requireAuth } = require("../middlewares/authentication");
const express = require("express");
const router = express.Router();

const {
  createCourse,
  getAllCourse,
} = require("../contollers/course.controller");

router.route("/getAllCourse").get(requireAuth, getAllCourse);
router.route("/createCourse").post(createCourse);

module.exports = router;
