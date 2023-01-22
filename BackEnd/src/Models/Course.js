const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionOptionSchema = new mongoose.Schema({
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
        },
        isCorrect: {
          type: Boolean,
          required: true
        }
      }
    ]
  });
  

const CourseSchema = new Schema({
    Courseid: {
        type: String,
        required: true,
        unique: true
    },
    instractorid : {

        type: String,
        required : true ,
        unique : false
    
    },

    Subject: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,

    },

    totalHours: {
        type: Number,
        required: true,

    },
    subtitles: {
        type: Array,
        required: false,
    },
    excercises: [questionOptionSchema],
    price: {
        type: Number,
        required: true

    },
    discount: {
        type: String,
        required: false

    },
    discountdeadline: {
      type: String,
      required: false

  },
    shortsummary: {
        type: String,
        required: true,

    },
    rate: {
        type: Array,
        required: false,


    },
    review: {
        type: String,
        required: false,

    },
    
    preview : {
        type: String,
        required: false,
    }, 
    videos: [
      {
        id: {
          type: String,
          required: true
        },
        link: {
          type: String,
        },
        courseID: {
          type: String,
          required: true
    }
      }
    ],


}, { timestamps: true });


const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
