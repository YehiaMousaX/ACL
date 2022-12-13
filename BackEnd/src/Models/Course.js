const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type: String,
        required: true,
    },
    excercises: {
        type: String,
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
    rate: {
        type: Array,
        required: false,


    },
    review: {
        type: String,
        required: false,

    }


}, { timestamps: true });



const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;