const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    options: [
      {
        id: {
          type: Number,
          required: true
        },
        text: {
          type: String,
          required: true
        },
        isCorrect: {
          type: Boolean,
          required: true
        }
      }
    ]
  });
  const question = mongoose.model('question', questionSchema);
module.exports = question;