const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  teachersID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserData",
  },
});

const Course = mongoose.model("CourseData", CourseSchema);

module.exports = Course;
