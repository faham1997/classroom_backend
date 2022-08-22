import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.ObjectId, ref: "CourseData", required: true },
  student: { type: mongoose.Schema.ObjectId, ref: "UserData", required: true },
  AssignmentStatus: [
    {
      assignment: { type: mongoose.Schema.ObjectId, ref: "Assignment" },
      complete: Boolean,
    },
  ],
  completed: Date,
});

const Enrollment = mongoose.model("Enrollment", EnrollmentSchema);

module.exports = Enrollment;
