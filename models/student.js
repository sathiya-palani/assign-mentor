
const mongoose = require('mongoose');



const studentSchema = new mongoose.Schema({
    studentName:{
        type:String,
        required:true,
        message:"Name is Required"
    },
    studentEmail:{
        type:String,
        required:true,
        unique:true,
        
    },
   assignedMentor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "mentors"
    }
},
{
    versionKey:false,
    collection:'students'
})

module.exports = mongoose.model('students',studentSchema)

