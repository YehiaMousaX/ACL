const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    Courseid: {
        type: String,
        required: true,
        unique: true
    },

    Subject: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,

    },
    subtitle: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true,

    },
    shortsummary: {
        type: String,
        required: true,

    },
    rating: {
        type: Number,
        required: false,


    },
    review: {
        type: String,
        required: false,

    }


}, { timestamps: true });



const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;