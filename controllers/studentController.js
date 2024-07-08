const MentorModel = require("../models/mentor.js");
const StudentModel = require("../models/student.js");

const getAllStudents = async(req,res)=>{
    try {
        let students = await StudentModel.find({})
        res.status(200).send({
            message:"Student Data Fetched Successfully",
            students
        })
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Internal Server Error'  
        })
    }
}

const createStudent = async(req,res)=>{
    try {
        let {studentName,studentEmail} = req.body
        let student = await StudentModel.findOne({studentEmail:studentEmail})

        if(!student)
        {
           
            await StudentModel.create({studentName,studentEmail})

            res.status(200).send({
                message:"Student Created Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`student with ${studentEmail} already exists`
            })
        }
        
    } catch (error) {
        res.status(500).send({
            message: error.message || 'Internal Server Error'  
        })
    }
}

const previousMentorForStudent=async (req,res)=>{
    try {
        const {studentEmail}=req.params;

        const student=await StudentModel.findOne({studentEmail:studentEmail});
        //  console.log(student);
        if(!student){
            res.status(404).send("Student not found");
        }

        if(!student?.assignedMentor){
            res.status(404).send("Student doesn't have mentor");
        }

        const mentor=await MentorModel.findOne({_id:student.assignedMentor})
        res.status(200).send({
            message:`Previous Mentor for student ${student.studentName} was ${mentor.mentorName}`,
            mentor:mentor
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createStudent,
    getAllStudents,
    previousMentorForStudent
}