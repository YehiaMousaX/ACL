const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CorporateuserSchema = new Schema({
    password : {
        type: String,
        required : true ,

        },
    Name: {
        type: String,

    },
    Email: {
        type: String,
        required: false ,
        
    },
    Age: {
        type: Number,
        required: false,
    },
    BornIn: {
        type: String,
        required: false ,
    },
    Country: {
        type: String,
        required: false,
    },
    MartialStatus: {
        type: String,
        required: false,
    },
    PhoneNumber: {
        type: String,
        required: false, 
    },
    Job: {
        type: String,
        required: false,
    },
    RegisteredCourseid :{
    type: Array
    } ,
    RegisteredCourseid1: {
        type: Array,
        
    },
    RegisteredCourseid2: {
        type: Array,
        
    },
    Countrycurrency : {
        type: String,
    }
}, { timestamps: true });



const Corporateuser = mongoose.model('Corporateuser', CorporateuserSchema);
module.exports = Corporateuser;