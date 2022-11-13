const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instractorSchema = new Schema({
    instractorid : {

        type: Number,
        required : true ,
        unique : true
    },

    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Age: {
        type: Number,
        required: true,
    },
    PhoneNumber: {
        type: String,
        required: true
    }
}, { timestamps: true });



const Instractor = mongoose.model('Instractor', instractorSchema);
module.exports = Instractor;