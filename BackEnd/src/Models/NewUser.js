const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewuserSchema = new Schema({
    Password : {
        type: String,
        required : true ,

        },
    
    Email: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    }

}, { timestamps: true });



const NewUser = mongoose.model('NewUser', NewuserSchema);
module.exports = NewUser;