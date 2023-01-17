const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  userEmail: {
    type: String,
  },
  courseId: {
    type: String ,
  },
  typeoftheUser: {
    type: String,
  },
  typeoftheProblem: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Report = mongoose.model("Report", ReportSchema);
module.exports = Report;
