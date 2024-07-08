

const  express = require('express');
const mentorRouter = express.Router();
const mentorController = require('../controllers/mentorController');



mentorRouter.get('/',mentorController.getAllMentors)
mentorRouter.post('/java',mentorController.createMentor)
mentorRouter.put('/assign-student', mentorController.assignStudentToMentor) 
mentorRouter.get('/students/:mentorEmail', mentorController.viewStudentsForMentor) 
mentorRouter.put('/assign-students/:mentorEmail', mentorController.assignStudentsToMentor); 


module.exports = mentorRouter;