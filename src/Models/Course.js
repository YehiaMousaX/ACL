const mongoose = require('mongoose');
const Excercise = require('./Excercise');
const Exercise = require('./Excercise');
const Subtitle = require('./Subtitle');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    Courseid: {
        type: String,
        required: true,
        unique: true
    },
    instractorid : {

        type: Number,
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

    excercises: {
        type: String,
        required: true,

    },
    subtitles: {
        type: Subtitle,
        required: true,

    },
    excercises: {
        type: Excercise,
        required: true,

    },
    price: {
        type: Number,
        required: true

    },
    discount: {
        type: Number,
        required: true

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