const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Password : {

        type: String,
        required : true 
        
    },
   
}, { timestamps: true });



const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;