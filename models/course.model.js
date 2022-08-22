const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Assignment = mongoose.model("Assignment", AssignmentSchema);

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
  Assignments: {
    type: [AssignmentSchema],
  },
});

const Course = mongoose.model("CourseData", CourseSchema);

module.exports = Course;
