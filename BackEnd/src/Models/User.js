const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    password : {
        type: String,
        required : true ,

        },
    Name: {
        type: String,

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
    BornIn: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: false
    },
    MartialStatus: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Job: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
      },

      RegisteredCourseid: {
        type: Array,
        
    },
     RegisteredCourseid1: {
        type: Array,
        
    },
    RegisteredCourseid2: {
        type: Array,
        
    },
    Countrycurrency : {
        type: String,
    },
    CompletedCourseid: {
        type: Array,    
    },
    balance : {
        type: Number,
    }
    

}, { timestamps: true });



const User = mongoose.model('User', userSchema);
module.exports = User;