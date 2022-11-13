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
        required: true,
    },

    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
        unique: false
    },
    price: {
        type: Number,
        required: true,

    },
    shortsummary: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5

    },
    review: {
        type: String,
        required: true
    }


}, { timestamps: true });



const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;