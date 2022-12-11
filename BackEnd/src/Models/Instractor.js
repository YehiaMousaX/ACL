const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instractorSchema = new Schema({
    

    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Biography: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required : true ,

        },
    Country: {
        type: String,
        required: true
    }
}, { timestamps: true });



const Instractor = mongoose.model('Instractor', instractorSchema);
module.exports = Instractor;