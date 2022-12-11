const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instractorSchema = new Schema({
    

    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: false,
    },
    Biography: {
        type: String,
        required: false,
    },
    Age: {
        type: Number,
        required: false,
    },
    PhoneNumber: {
        type: String,
        required: false
    },
    password : {
        type: String,
        required : true ,

        },
    Country: {
        type: String,
        required: false
    }
}, { timestamps: true });



const Instractor = mongoose.model('Instractor', instractorSchema);
module.exports = Instractor;