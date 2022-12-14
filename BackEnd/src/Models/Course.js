const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var url = require('url');

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
    excercises: {
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true

    },
    discount: {
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
    videos : {
        type: Array,
        required: false,
    }, 
    preview : {
        type: String,
        required: false,
    }, 


}, { timestamps: true });



const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;