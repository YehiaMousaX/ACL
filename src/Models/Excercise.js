const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExcerciseSchema = new Schema({
    Excerciseid: {
        type: String,
        required: true,
        unique: true
    },
    courseid: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,

    },
    totalHours: {
        type: Number,
        required: true,

    }


}, { timestamps: true });



const Excercise = mongoose.model('Excercise', ExcerciseSchema);
module.exports = Excercise;