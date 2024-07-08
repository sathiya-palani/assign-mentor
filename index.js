// 1. import express module
const express = require('express');
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');
const mentorRouter = require('./routes/mentorRoutes');
const studentRouter = require('./routes/studentRoutes');


// 2. create express app
const app = express();

// 5. middleware
app.use(express.json());

app.use('/mentors',mentorRouter);
app.use('/students',studentRouter);


// 3. run the server

console.log(`Connecting to MongoDB...`);

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // after connecting to MongoDB, start the server
        app.listen(3001, () => {
            console.log(`Server is running on http://localhost:3001`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });