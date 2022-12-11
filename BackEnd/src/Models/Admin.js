const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    Password : {

        type: String,
        required : true ,
        unique : false
        
    },
    Email: {
        type: String,
        required : false
    }

}, { timestamps: true });



const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;