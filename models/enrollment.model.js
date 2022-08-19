import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.ObjectId, ref: "Course" },
  studentId: { type: mongoose.Schema.ObjectId, ref: "User" },
  lessonStatus: [
    {
      lesson: { type: mongoose.Schema.ObjectId, ref: "Lesson" },
    },
  ],
});

export default mongoose.model("Enrollment", EnrollmentSchema);
