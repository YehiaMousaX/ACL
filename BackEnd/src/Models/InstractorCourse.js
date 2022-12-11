const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instractorcourseSchema = new Schema({
    instractorid : {

        type: String,
        required : true ,
        unique : false
    
    },

    Courseid  :{
       type:String ,
       required : true ,
       unique : false

    }
}, { timestamps: true });

//

const InstractorCourse = mongoose.model('InstractorCourse', instractorcourseSchema);
module.exports = InstractorCourse;