## Mentor and Student Assigning with Database

1. Web developer task for Mentor and student assigning with database

2. Created a Folder and done the basic setup for backend and installed the dependencies
```
npm init
npm install nodemon
npm install express
npm install dotenv
```
3. Schema for Mentor
```
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
```  

4. Schema for students
```
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

```

5. Routes for mentor

    To create a mentor POST  => http://localhost:3001/mentors/java

    To get all mentors GET => http://localhost:3001/mentors/

    To assign student to mentor PUT  => http://localhost:3001/mentors/assign-student

    To view student for mentor  GET => http://localhost:3001/mentors/students/:mentorEmail

    To assign student to mentors PUT => http://localhost:3001/mentors/assign-students/:mentorEmail

6. Routes for student 

    To create a student POST  => http://localhost:3001/students/

    To get all students GET => http://localhost:3001/students/create 

    To get previous mentor for student GET => http://localhost:3001/students/previous-mentor/:studentEmail

7. The controllers for mentor and student are in mentorController & studentController.

8. The server and app is in the index.js

9. Here the specifications and constraints are 
      Back-End: Node Js
      Database: MongoDB

10. To run the server give command npm run dev .      



    
