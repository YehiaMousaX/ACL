const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
   
   
    Countrycurrency : {
       
        type: String,
    }
}, { timestamps: true });



const Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest;