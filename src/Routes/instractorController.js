const express = require("express");
const User = require("../Models/User");
const  Course = require("../Models/Course");

const router = express.Router()

router.get("/home", async(req, res) => {

    res.status(200).send("You have everything good !");

});

router.post('/AddCourse', async(req, res) => {
    console.log("Course is added")

    {
        // Insert the new course if they do not exist yet
        const course = new Course({
            Courseid: req.body.Courseid ,
            title: req.body.title,
            subtitle: req.body.subtitle,
            price: req.body.price,
            shortsummary: req.body.shortsummary
        });
        try{
            await course.save();
            console.log("this course is added successfully"+ req.body.Courseid);
          }
          catch(error){
            console.log(error)
            console.log("this course is added before"+ ":  "+ req.body.Courseid) 
            
          }
        
        res.sendStatus(200);

    }
    

});




module.exports = router;