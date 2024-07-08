const mongoose = require('mongoose');



const mentorSchema = new mongoose.Schema({
    mentorName:{
        type:String,
        required:true,
        message:"Name is Required"
    },
    mentorEmail:{
        type:String,
        required:true,
        unique:true,
        
    },
    assignedStudents:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"students"
        }
    ]
},
{
    versionKey:false,
    collection:'mentors'
})

module.exports = mongoose.model('mentors',mentorSchema);

