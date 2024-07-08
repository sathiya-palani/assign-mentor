
const  express = require('express');
const studentRouter = express.Router();
const studentController = require('../controllers/studentController');


studentRouter.get('/',studentController.getAllStudents)
studentRouter.post('/create',studentController.createStudent)
studentRouter.get('/previous-mentor/:studentEmail',studentController.previousMentorForStudent)

module.exports = studentRouter;
