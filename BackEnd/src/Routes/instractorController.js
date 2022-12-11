const express = require("express");
const User = require("../Models/User");
const Course = require("../Models/Course");
const Admin = require("../Models/Admin");
const instractor = require("../Models/Instractor");
const InstractorCourse = require("../Models/InstractorCourse");

const X =[] ;
var p = "" ;
const router = express.Router()

router.get("/search", async(req, res) => {
  const y =[] ;
  const a = await Course.find({title : req.body.search } , {_id : 0});
  const b = await Course.find({Subject : req.body.search} , {_id : 0});
  const z = await Instractor.find({Name : req.body.search },{instractorid:1});
  const c = await Course.find({instractorid : z._id }, {_id : 0});
  
  if(a.length>0){
      res.send(a);
  }else if(b.length>0){
      res.send(b);
  }else{
      res.send(c);
  }
  console.log(z);
});


router.get("/home", async(req, res) => {

    res.status(200).send("You have everything good !");

});

router.post('/AddCourse', async(req, res) => {


    {
        // Insert the new course if they do not exist yet
        const course = new Course({
            Courseid: req.body.Courseid ,
            title: req.body.title,
            totalHours: req.body.totalHours,
            excercises: req.body.excercises,
            subtitles: req.body.subtitles,
            price: req.body.price,
            discount: req.body.discount,
            shortsummary: req.body.shortsummary,
            rating:req.body.rating ,
            Subject: req.body.Subject ,
            instractorid : req.body.instractorid ,
            review : req.body.rating 

        });
        
        
        try{
            await course.save();
            console.log("this course is added successfully : "+ req.body.Courseid);

        
          }
          catch(error){
            console.log(error)
            console.log("this course is added before"+ ":  "+ req.body.Courseid) 
            
          }
        res.sendStatus(200);

    }
    

});


router.get("/Mycoursestitles/:instractorid", async(req, res) => {
    
    const Courses = await Course.find({ instractorid : req.params['instractorid'] }, { _id: 0 ,title : 1 });
    
  res.send(Courses);
});


router.get("/AllCourses", async(req, res) => {
    
  X.push ( await Course.find({}, { instractorid: req.body.id , title : req.body.title, totalHours : req.body.totalHours, rating : req.body.rating }));
  
res.send(X);
});


router.get("/AllCourses/prices", async(req, res) => {
  
  X.push ( await Course.find({}, { _id: 0 ,title : 1, price : 1}));
  
res.send(X);
});


router.get("/AllCourses/:title/details", async(req, res) => {
  
  const details = await Course.find({title : req.params['title']}, { _id: 0 , subtitles : 1 , totalHours : 1, excercises : 1,price : 1, discount : 1});
  
res.send(details);
});


module.exports = router;