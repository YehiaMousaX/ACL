// #Task route solution
require("dotenv").config();
const express = require("express");
const Course = require("../Models/Course");
const Instractor = require("../Models/Instractor");
const Admin = require("../Models/Admin");
const InstractorCourse = require("../Models/InstractorCourse");
const User = require("../Models/User");
const newuser = require("../Models/NewUser")

const { response } = require("express");
const router = express.Router()
const NumberofCountry = 0;
const  countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];
const X =[] ;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.get("/search", async(req, res) => {
    const a = await Course.find({title : req.body.search } , {_id : 0});
    const b = await Course.find({Subject : req.body.search} , {_id : 0});
    const z = await Instractor.find({Name : req.body.search },{instractorid:1});
    const c = await Course.find({instractorid : z._id }, {_id : 0})
    if(a.length>0){
        res.send(a);
    }else if(b.length>0){
        res.send(b);
    }else{
        res.send(c);
    }
    console.log(z);
});


// row 11 

router.get("/rate", async(req, res) => {
    const Courses = await Course.find({ rate: req.body.rate });
    res.send(Courses);

});


router.get("/sub", async(req, res) => {
    const Courses = await Course.find({ Subject: req.body.Subject });
    res.send(Courses);
});

router.get("/subrate", async(req, res) => {
    const Courses = await Course.find({ Subject: req.body.Subject, rate: req.body.rate });
    res.send(Courses);
});

//row 12
router.get("/price", async(req, res) => {
  const Courses = await Course.find({ price: req.body.price });
  res.send(Courses);
});


// row 29 


router.post("/showquestions", async(req, res) => {
 
  try {
    const courses = await Course.find({ Courseid:req.body.courseid});

  
    // Map over the courses array and extract the excercises field from each course
    const exercises = courses.map((course) => course.excercises);
  
    res.send(exercises[0]);
    
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


// row 8




router.post("/signup",async(req,res)=>{
  const hashedPassword = await bcrypt.hash(req.body.Password, 10);

  const user = new User({
    password : req.body.Password ,
    Name: req.body.Name,
    Email: req.body.Email,
    Age: req.body.Age,
    BornIn: req.body.BornIn,
    MartialStatus: req.body.MartialStatus,
    PhoneNumber: req.body.PhoneNumber,
    Job: req.body.Job,
    Gender: req.body.Gender,
    Country : req.body.Country,
    balance : 0
});

const user1 = new newuser({
  Password : hashedPassword ,
  Email: req.body.Email,
  type : "user"
});
      
         await  user.save() ;
         await  user1.save()

         res.send({message:"user success added"})



}) 



router.post('/checkemail', (req, res) => {

  User.findOne({ Email : req.body.Email}, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    if (user) {
      return res.json(true);
    } else {
      return res.json(false);
    }
  });
});

router.post('/SelectCountry', async(req, res) => {


  await User.updateOne({Email: req.body.Email} ,{ $set: { Country:(countryList [req.body.Country -1] )} } )



});
// row 9
router.get("/AllCourses", async(req, res) => {
    
    const course = await Course.find( {} ,{ });
    
  res.send(course);
  });
 
  // 
  router.get("/Mycoursestitles2", async(req, res) => {
    X.push (await InstractorCourse.find( {_id : req.params.instractorid } ,{ _id : 0 ,courseid :1 } ) );
    //const Courses = await Course.find({ Courseid: Coursesid }, { title : 1 });
    res.send(X);
  });
  
  router.get("/AllCourses/prices", async(req, res) => {
    
    const x = await Course.find({}, {Courseid : 1, price : 1});
    
  res.send(x);
  });


  // row 33 
  router.put("/ChangePassword", async(req, res) => {


    var t = String( await User.findOne({Email: req.body.Email} ,  {_id : 0 , password:1}))  ;
    if (t.substring(13,t.length-3)==(req.body.OldPassword)) {
    await User.updateOne({Email: req.body.Email} ,{ $set: { password: req.body.NewPassword } } )
    console.log(" the new password is updated"+ ":  "+ req.body.NewPassword) 
    res.sendStatus(200);
    }
    else {
    console.log("you enter your old password wrong") 
    res.sendStatus(200);
    }
  
  
  
  });

// row 35



  //row 36 
  router.put("/ratecourse", async(req, res) => {
   
    await Course.updateOne({Courseid: req.body.courseid} ,{ $push: { rate: req.body.rate } } )
    await User.updateOne({ Email: req.body.Email, "RegisteredCourseid.Courseid": req.body.courseid}, { $push: { "RegisteredCourseid.$.rate": req.body.rate } });
    await User.updateOne({ Email: req.body.Email }, { $pull: { "RegisteredCourseid1": { "Courseid": req.body.courseid } } });

  

    res.send("true");

  });

  router.put("/rateinstractor", async(req, res) => {
   
    await Instractor.updateOne({ Email: req.body.Email}, { $push: { rate: req.body.rate } });
    await User.updateOne({ Email: req.body.Emailuser }, { $pull: { RegisteredCourseid2 : req.body.Email} });

  });
  router.post("/AllCourses/registerfor1", async(req, res) => {
    const registeredCourses = await User.aggregate([
      {$match: {Email: req.body.Email }},
      {$unwind: "$RegisteredCourseid1"},
      {$replaceRoot: {newRoot: "$RegisteredCourseid1"}}
    ]);
   
    
    res.send(registeredCourses);
    });

  // row 14
  router.get("/AllCourses/TitleDetails", async(req, res) => {
  
    const details = await Course.find({title : req.params.title}, { _id: 0 , subtitles : 1 , totalHours : 1, excercises : 1,price : 1, discount : 1});
    
  res.send(details);
  });


  // user register for course 
  router.put("/AllCourses/register", async(req, res) => {
  
    const course = await Course.find({ Courseid : req.body.courseid} );
    if (course.length >0 ) {
    await User.updateOne({ _id : req.body.id} ,{ $push: { RegisteredCourseid: req.body.courseid} } )
    console.log("Done Added to your registered course")
 
  }
    
    else {
      console.log("Not Valid Course")

    }
    res.sendStatus(200);
    });

// row 13 

router.get("/searchcourse/title", async(req, res) => {
  
 
  const course = await Course.find({ title : req.body.title}  )
 
  
   res.send(course);
   });
 
 
   router.get("/searchcourse/subject", async(req, res) => {
   
  
     const course = await Course.find({ Subject : req.body.subject}  )
   
    
     res.send(course);
   });
     
     
     router.get("/searchcourse/instractor",authenticateToken, async(req, res) => {
   
  
       const course = await Course.find({ instractorid : req.body.instractorid}  )
     
      
       res.send(course);
     });
 


    // user get registered course 


    router.post("/AllCourses/registerfor", async(req, res) => {
      const registeredCourses = await User.aggregate([
        {$match: {Email: req.body.Email }},
        {$unwind: "$RegisteredCourseid"},
        {$replaceRoot: {newRoot: "$RegisteredCourseid"}}
      ]);
     
      
      res.send(registeredCourses);
      });
  
  function authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    }
    
  

  router.post('/login', async(req, res) => {
       
    const user = await newuser.findOne({ Email :req.body.Email });
    if (user) {
        const auth = await bcrypt.compare(req.body.Password, user.Password);
        if (auth) {
            // const token = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET);
            res.send(user);
        }
        else {
        res.send();
        }
    }
    else{
      res.send();
    }

  });
  
  router.post('/search/substring', async (req, res) => {
    const substring = req.body.substring + "";

    // Find courses with titles that contain the substring
    const courses = await Course.find({ Courseid: { $regex: substring, $options: 'i' } });


    res.send(courses);
});

router.post('/search/substring1', async (req, res) => {
  const substring = req.body.substring+"";

  const courses1 = await Course.find({
       title: { $regex: substring, $options: 'i' } 
    
  });
  const courses2 = await Course.find({
    Subject: { $regex: substring, $options: 'i' } 
 
 });
const courses3 = await Course.find({
  instractorid: { $regex: substring, $options: 'i' } 

 });

 const Allcourses = courses1.concat(courses2).concat(courses3)
 const courses = Allcourses.filter((item,index)=>{
     return Allcourses.findIndex(i => JSON.stringify(i) === JSON.stringify(item)) === index
 })
 
  res.send(courses);
});

router.get("/AddCountryCurrency", async(req, res) => {
   
  
  await User.updateOne({Email: req.body.Email} ,{ $set: { Countrycurrency: req.body.Countrycurrency } } )

});

router.post("/getbalance", async(req, res) => {
  const user = await User.findOne({Email: req.body.Email});
  if (user) {
  res.send(user.balance.toString());
  }
  else {
    res.send("false")
  }
});

router.post("/Addregisteredcourses", async(req, res) => {
  const user = await User.find({Email: req.body.Email});
  await User.updateOne({Email: req.body.Email} ,{ $push: { RegisteredCourseid: req.body.RegisteredCourseid } } )
  await User.updateOne({Email: req.body.Email} ,{ $push: { RegisteredCourseid1: req.body.RegisteredCourseid } } )

  
 
});

  router.post("/ResetPassword", async (req, res) => {
  
        await User.updateOne({Email: req.body.id} , { password: req.body.password } )
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await newuser.updateOne({Email: req.body.id} , { password: hashedPassword })

  });

  
  router.post("/ChangePassword", async (req, res) => {
    await User.updateOne({Email: req.body.id} ,{  password: req.body.password } )

});



router.post("/Addregisteredinstractor", async(req, res) => {
  const user = await User.find({Email: req.body.Email});
  await User.updateOne({Email: req.body.Email} ,{ $push: { RegisteredCourseid2: req.body.RegisteredCourseid } } )

  
 
});

router.get('/watch/:Courseid/:videoId', async (req, res) => {
  try {
      const user = await User.findOne(req.params.Email);
      if (!user) {
          return res.status(404).send({ error: 'user not found' });
      }

      // Check if the corporate user is registered for the course
      const isRegistered = user.RegisteredCourseid.find(courseId => courseId.toString() === req.params.Courseid);
      if (!isRegistered) {
          return res.status(401).send({ error: 'You are not registered for this course' });
      }

      const course = await Course.findOne(req.params.Courseid);
      if (!course) {
          return res.status(404).send({ error: 'Course not found' });
      }

      // Find the video by its id
      const video = course.videos.find(video => video._id.toString() === req.params.videoId);
      if (!video) {
          return res.status(404).send({ error: 'Video not found' });
      }

      try{
        user.videosWatched.push(req.params.videoId);
        await user.save();

        const videosWatched = user.videosWatched.filter(video => video.courseId.toString() === req.params.courseId);
        const progress = (videosWatched.length / course.videos.length) * 100;

        if (progress == 100){
          user.CompletedCourseid.push(req.params.courseId);
          await user.save();
        }

        return res.send({ videoUrl: video.url });  

    }catch(err){
        console.error(err);
        return res.status(500).send({ error: 'Error adding video to watch history' });
    }
    


  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error retrieving video' });
  }
});



router.post('/receiveCertificate/:Courseid', async (req, res) => {
  try {
    const user = await User.findOne(req.params.Email);
    if (!user) {
        return res.status(404).send({ error: 'Corporate user not found' });
    }

        // Check if the corporate user has completed the course
        const isCompleted = user.CompletedCourseid.find(courseId => courseId.toString() === req.params.Courseid);
        if (!isCompleted) {
            return res.status(401).send({ error: 'You have not completed this course' });
        }

        const course = await Course.findOne(req.params.Courseid);
        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }

        // Create a new PDF document
        const doc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="certificate.pdf"');
        doc.pipe(res);

        // Add the certificate image
        doc.image('path/to/certificate.jpg', 0, 0, { width: 600 });
        doc.font('Helvetica-Bold').fontSize(20).text(user.Name, 100, 200);
        doc.font('Helvetica-Bold').fontSize(20).text(course.title, 100, 250);
        doc.end();

    } catch (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error processing request' });
    }
});



router.get('/downloadCertificate/:courseId', async (req, res) => {
  try {
    const user = await User.findOne(req.params.Email);
    if (!user) {
        return res.status(404).send({ error: 'Corporate user not found' });
    }

    const isCompleted = user.CompletedCourseid.find(courseId => courseId.toString() === req.params.Courseid);
    if (!isCompleted) {
        return res.status(401).send({ error: 'You have not completed this course' });
    }

    const course = await Course.findOne(req.params.Courseid);
    if (!course) {
        return res.status(404).send({ error: 'Course not found' });
    }

        // Create a new PDF document
        const doc = new PDFDocument();
        res.setHeader('Content-disposition', 'attachment; filename=certificate.pdf');
        res.setHeader('Content-type', 'application/pdf');
        doc.pipe(res);

        // Add content to the PDF
        doc.font('Helvetica-Bold').text('Certificate of Completion', { align: 'center' });
        doc.font('Helvetica').text(`This is to certify that ${user.Name} has completed the course "${course.title}"`, { align: 'center' });
        doc.image('path/to/course/logo.png', { align: 'center' });
        doc.moveDown();
        doc.text(`Issued on: ${new Date().toLocaleDateString()}`, { align: 'center' });
        doc.end();

    } catch (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error processing request' });
    }
});

router.get('/progress/:courseId', async (req, res) => {
  try {
    const user = await User.findOne(req.params.Email);
    if (!user) {
        return res.status(404).send({ error: 'Corporate user not found' });
    }

    const isCompleted = user.CompletedCourseid.find(courseId => courseId.toString() === req.params.Courseid);
    if (!isCompleted) {
        return res.status(401).send({ error: 'You have not completed this course' });
    }

    const course = await Course.findOne(req.params.Courseid);
    if (!course) {
        return res.status(404).send({ error: 'Course not found' });
    }

      // Get the number of videos watched by the user
      const videosWatched = user.videosWatched.filter(video => video.courseId.toString() === course.Courseid);
      const progress = (videosWatched.length / course.videos.length) * 100;

      return res.send({ progress });

  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error retrieving progress' });
  }
});

router.post('/request-refund/:courseId', async (req, res) => {
  try {
    const user = await User.findOne(req.params.Email);
    if (!user) {
        return res.status(404).send({ error: 'Corporate user not found' });
    }

    const isCompleted = user.CompletedCourseid.find(courseId => courseId.toString() === req.params.Courseid);
    if (!isCompleted) {
        return res.status(401).send({ error: 'You have not completed this course' });
    }

    const course = await Course.findOne(req.params.Courseid);
    if (!course) {
        return res.status(404).send({ error: 'Course not found' });
    }

      // Get the number of videos watched by the user
      const videosWatched = user.videosWatched.filter(video => video.courseId.toString() === course.Courseid);

      const progress = (videosWatched.length / course.videos.length) * 100;
      if (progress < 50) {
          // Process the refund          
          return res.send({ message: 'Refund request has been processed successfully' });
      } else {
          return res.status(401).send({ error: 'You cannot request a refund as you have attended more than 50% of the course' });
      }

  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error retrieving progress' });
    }
  });

  router.get('/registerdCourses/:Email', async (req, res) => {
    try {
        const user = await User.findOne(req.params.Email);
        if (!user) {
            return res.status(404).send({ error: 'Corporate user not found' });
        }

        // Get the list of course ids that the user is registered for
        const registeredCourseIds = user.RegisteredCourseid;

        // Find the details of the courses that the user is registered for
        const registeredCourses = await Course.find({ _id: { $in: registeredCourseIds } });

        return res.send({ registeredCourses });

    } catch (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error retrieving registerdCourses' });
    }
});


router.post("/report-problem/:Courseid", async (req, res) => {
  try {
    const user = await User.findOne(req.body.Email);
    if (!user) {
      return res.status(404).send({ error: "Corporate user not found" });
    }

    const isRegistered = user.RegisteredCourseid.find(
      (courseId) => courseId.toString() === req.params.Courseid
    );
    if (!isRegistered) {
      return res
        .status(401)
        .send({ error: "You are not registered for this course" });
    }

    const course = await Course.findOne(req.params.Courseid);
    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }

    // Create a new report 
    const report = new Report({
      userEmail: user.Email,
      courseId: course.Courseid,
      typeoftheUser: "corporate user",
      typeoftheProblem: req.body.typeoftheProblem,
      status: "unsolved",
      description: req.body.description,
    });

    // Save the report to the database
    await report.save();

    return res.send({ message: "Problem reported successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: "Error reporting problem" });
  }
});

router.get('/previous-reports/:Email', async (req, res) => {
  try {
      const user = await User.findOne(req.params.Email);
      if (!user) {
          return res.status(404).send({ error: 'Corporate user not found' });
      }

      const reports = await Report.find({ userEmail: user.Email });

      // Send the list of reports as a response
      return res.send({ reports });
  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error retrieving previous problems' });
  }
});



router.put("/reports/:reportId", async (req, res) => {
  try {
    // Find the report by its id
    const report = await Report.findById(req.params.reportId);
    if (!report) {
      return res.status(404).send({ error: "Report not found" });
    }

    // Check if the report is already resolved
    if (report.status === "solved") {
      return res.status(400).send({ error: "Report already resolved" });
    }

    // Update the report status to "in-progress"
    report.status = "in-progress";
    await report.save();

    // Send the updated report as a response
    return res.send({ report });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: "Error updating report" });
  }
});



  module.exports = router;