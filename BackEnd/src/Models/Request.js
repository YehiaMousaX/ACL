const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  userEmail: {
    type: String,
  },
  courseId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Request = mongoose.model("Request", RequestSchema);
module.exports = Request;
