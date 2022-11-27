const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubtitleSchema = new Schema({
    subtitleid: {
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



const Subtitle = mongoose.model('Subtitle', SubtitleSchema);
module.exports = Subtitle;