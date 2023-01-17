const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "Corporateuser",
    required: true,
  },
  courseId: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  type: {
    type: String,
    enum: ["technical", "financial", "other"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "solved", "in-progress"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;
