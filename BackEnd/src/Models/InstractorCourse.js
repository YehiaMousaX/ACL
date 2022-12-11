const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instractorcourseSchema = new Schema({
    instractorid : {

        type: Number,
        required : true ,
        unique : false
    
    },

    courseid  :{
       type:String ,
       required : true ,
       unique : true

    }
}, { timestamps: true });

//

const InstractorCourse = mongoose.model('InstractorCourse', instractorcourseSchema);
module.exports = InstractorCourse;