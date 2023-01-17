const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccessRequestSchema = new Schema({
  userEmail: {
    type: String,
  },
  courseId: {
    type: String,
  },
  reason: {
    type: String,
  },
  status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const AccessRequest = mongoose.model("AccessRequest", AccessRequestSchema);
module.exports = AccessRequest;
