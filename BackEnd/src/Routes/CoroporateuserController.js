const express = require("express");
const User = require("../Models/User");
const Course = require("../Models/Course");
const Admin = require("../Models/Admin");
const instractor = require("../Models/Instractor");
const InstractorCourse = require("../Models/InstractorCourse");
const Coroporateuser = require("../Models/Corporateuser")
const Report = require("../Models/Report");
const router = express.Router()
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');


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


// row 35
router.put("/rateinstractor", async(req, res) => {
   
    var t1 = String( await Instractor.findOne({_id: req.body.instractorid},{_id : 0 , rate:1}))
    var t2= new Array();
    var i = 10 ;
    if (t1.length > 12) {
   while(i < t1.length -3) {
    t2.push(parseInt(t1[i]))
    i = i +3 ;
   }
   }
    t2.push(parseInt(req.body.rate)) ;
    await Instractor.updateOne({_id: req.body.instractorid} ,{ $set: { rate: t2 } } )
    var quantity = 0 ;
    var sum = 0;
    var i2 = 10 ;
    var t3 = String( await Instractor.findOne({_id: req.body.instractorid},{_id : 0 , rate:1}))
    while(i2 < t3.length -3) {
        sum = sum + parseInt(t3[i2]);
        i2 = i2 +3 ;
        quantity =quantity+1
       }

       console.log("Average is " + " : " + sum/quantity)
       res.sendStatus(200);

  });

  //row 36 
  router.put("/ratecourse", async(req, res) => {
   
    var t1 = String( await Course.findOne({courseid: req.body.courseid},{_id : 0 , rate:1}))
    var t2= new Array();
    var i = 10 ;
    if (t1.length > 12) {
   while(i < t1.length -3) {
    t2.push(parseInt(t1[i]))
    i = i +3 ;
   }
   }
    t2.push(parseInt(req.body.rate)) ;
    await Course.updateOne({courseid: req.body.courseid} ,{ $set: { rate: t2 } } )
    var quantity = 0 ;
    var sum = 0;
    var i2 = 10 ;
    var t3 = String( await Course.findOne({courseid: req.body.courseid},{_id : 0 , rate:1}))
    while(i2 < t3.length -3) {
        sum = sum + parseInt(t3[i2]);
        i2 = i2 +3 ;
        quantity =quantity+1
       }

       console.log("Average is " + " : " + sum/quantity)
       res.sendStatus(200);

  });

  router.put("/ChangePassword", async(req, res) => {


    var t = String( await Coroporateuser.findOne({Email: req.body.Email} ,  {_id : 0 , password:1}))  ;
    if (t.substring(13,t.length-3)==(req.body.OldPassword)) {
    await Coroporateuser.updateOne({Email: req.body.Email} ,{ $set: { password: req.body.NewPassword } } )
    console.log(" the new password is updated"+ ":  "+ req.body.NewPassword) 
    res.sendStatus(200);
    }
    else {
    console.log("you enter your old password wrong") 
    res.sendStatus(200);
    }
  
  
  
  });

// row 8
  router.post('/SelectCountry', async(req, res) => {


    await Coroporateuser.updateOne({Email: req.body.Email} ,{ $set: { Country:(countryList [req.body.Country -1] )} } )
  
  
  
  });

// row 9
router.get("/AllCourses", async(req, res) => {
    
  const course = await Course.find( {} ,{ _id: 0 ,title : 1, totalHours : 1, rate : 1 });
  
res.send(course);
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

// row 13 

router.get("/searchcourse/title", async(req, res) => {
  
 
  const course = await Course.find({ title : req.body.title}  )
 
  
   res.send(course);
   });
 
 
   router.get("/searchcourse/subject", async(req, res) => {
   
  
     const course = await Course.find({ Subject : req.body.subject}  )
   
    
     res.send(course);
   });
     
     
     router.get("/searchcourse/instractor", async(req, res) => {
   
  
       const course = await Course.find({ instractorid : req.body.instractorid}  )
     
      
       res.send(course);
     });
 


//row 33 
router.put("/ChangePassword", async(req, res) => {


    var t = String( await Coroporateuser.findOne({_id: req.body.Coroporateid} ,  {_id : 0 , password:1}))  ;
    if (t.substring(13,t.length-3)==(req.body.OldPassword)) {
    await Coroporateuser.updateOne({_id: req.body.Coroporateid} ,{ $set: { password: req.body.NewPassword } } )
    console.log(" the new password is updated"+ ":  "+ req.body.NewPassword) 
    res.sendStatus(200);
    }
    else {
    console.log("you enter your old password wrong") 
    res.sendStatus(200);
    }
  
  
  
  });

// row 35
router.put("/rateinstractor", async(req, res) => {
   
    var t1 = String( await Instractor.findOne({_id: req.body.instractorid},{_id : 0 , rate:1}))
    var t2= new Array();
    var i = 10 ;
    if (t1.length > 12) {
   while(i < t1.length -3) {
    t2.push(parseInt(t1[i]))
    i = i +3 ;
   }
   }
    t2.push(parseInt(req.body.rate)) ;
    await Instractor.updateOne({_id: req.body.instractorid} ,{ $set: { rate: t2 } } )
    var quantity = 0 ;
    var sum = 0;
    var i2 = 10 ;
    var t3 = String( await Instractor.findOne({_id: req.body.instractorid},{_id : 0 , rate:1}))
    while(i2 < t3.length -3) {
        sum = sum + parseInt(t3[i2]);
        i2 = i2 +3 ;
        quantity =quantity+1
       }

       console.log("Average is " + " : " + sum/quantity)
       res.sendStatus(200);

  });


     // user register for course 
  router.put("/AllCourses/register", async(req, res) => {
  
    const course = await Course.find({ Courseid : req.body.courseid} );
    if (course.length >2 ) {
    await User.updateOne({ _id : req.body.id} ,{ $set: { RegisteredCourseid: req.body.courseid} } )
     console.log("Done Added to your registered course")

  }
    
    else {
      console.log(" Not Valid Course")

    }
    res.sendStatus(200);
    });



  //row 36 
  router.put("/ratecourse", async(req, res) => {
   
    var t1 = String( await Course.findOne({courseid: req.body.courseid},{_id : 0 , rate:1}))
    var t2= new Array();
    var i = 10 ;
    if (t1.length > 12) {
   while(i < t1.length -3) {
    t2.push(parseInt(t1[i]))
    i = i +3 ;
   }
   }
    t2.push(parseInt(req.body.rate)) ;
    await Course.updateOne({courseid: req.body.courseid} ,{ $set: { rate: t2 } } )
    var quantity = 0 ;
    var sum = 0;
    var i2 = 10 ;
    var t3 = String( await Course.findOne({courseid: req.body.courseid},{_id : 0 , rate:1}))
    while(i2 < t3.length -3) {
        sum = sum + parseInt(t3[i2]);
        i2 = i2 +3 ;
        quantity =quantity+1
       }

       console.log("Average is " + " : " + sum/quantity)
       res.sendStatus(200);

  });

  router.get('/grade/:exerciseId', async (req, res) => {
    try {
        const corporateuser = await Corporateuser.findById(req.params.id);
        if (!corporateuser) {
            return res.status(404).send({ error: 'Corporateuser not found' });
        }

        const exercise = corporateuser.exercises.find(exercise => exercise._id.toString() === req.params.exerciseId);
        if (!exercise) {
            return res.status(404).send({ error: 'Exercise not found' });
        }

        return res.send({ grade: exercise.grade });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error retrieving grade' });
    }
});

router.get('/exercise/:exerciseId', async (req, res) => {
  try {
      const corporateuser = await Corporateuser.findById(req.params.id);
      if (!corporateuser) {
          return res.status(404).send({ error: 'Corporateuser not found' });
      }

      const exercise = corporateuser.exercises.find(exercise => exercise._id.toString() === req.params.exerciseId);
      if (!exercise) {
          return res.status(404).send({ error: 'Exercise not found' });
      }

      const questions = await Question.find({ exercise: exercise._id });

      const result = questions.map(question => {
          return {
              question: question.question,
              correctAnswer: question.correctAnswer,
              userAnswer: question.userAnswer
          }
      });

      return res.send({ questions: result });
  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error retrieving exercise' });
  }
});

router.get('/watch/:courseId/:videoId', async (req, res) => {
  try {
      // Find the corporate user by their id
      const corporateuser = await Corporateuser.findById(req.params.id);
      if (!corporateuser) {
          return res.status(404).send({ error: 'Corporate user not found' });
      }

      // Check if the corporate user is registered for the course
      const isRegistered = corporateuser.RegisteredCourseid.find(courseId => courseId.toString() === req.params.courseId);
      if (!isRegistered) {
          return res.status(401).send({ error: 'You are not registered for this course' });
      }

      // Find the course by its id
      const course = await Course.findById(req.params.courseId);
      if (!course) {
          return res.status(404).send({ error: 'Course not found' });
      }

      // Find the video by its id
      const video = course.videos.find(video => video._id.toString() === req.params.videoId);
      if (!video) {
          return res.status(404).send({ error: 'Video not found' });
      }

      // Send the video url as a response
      return res.send({ videoUrl: video.url });

  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error retrieving video' });
  }
});



router.post('/receiveCertificate/:courseId', async (req, res) => {
    try {
        // Find the corporate user by their id
        const corporateuser = await Corporateuser.findById(req.params.id);
        if (!corporateuser) {
            return res.status(404).send({ error: 'Corporate user not found' });
        }

        // Check if the corporate user has completed the course
        const isCompleted = corporateuser.CompletedCourseid.find(courseId => courseId.toString() === req.params.courseId);
        if (!isCompleted) {
            return res.status(401).send({ error: 'You have not completed this course' });
        }

        // Find the course by its id
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }

        // Create a new PDF document
        const doc = new PDFDocument();

        // Set the response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="certificate.pdf"');

        // Pipe the PDF to the response
        doc.pipe(res);

        // Add the certificate image
        doc.image('path/to/certificate.jpg', 0, 0, { width: 600 });

        // Add the user name and course title
        doc.font('Helvetica-Bold').fontSize(20).text(corporateuser.Name, 100, 200);
        doc.font('Helvetica-Bold').fontSize(20).text(course.title, 100, 250);

        // Finalize the PDF and send it
        doc.end();

    } catch (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error processing request' });
    }
});



router.get('/downloadCertificate/:courseId', async (req, res) => {
    try {
        // Find the corporate user by their id
        const corporateuser = await Corporateuser.findById(req.params.id);
        if (!corporateuser) {
            return res.status(404).send({ error: 'Corporate user not found' });
        }

        // Check if the corporate user has completed the course
        const isCompleted = corporateuser.CompletedCourseid.find(courseId => courseId.toString() === req.params.courseId);
        if (!isCompleted) {
            return res.status(401).send({ error: 'You have not completed this course' });
        }

        // Find the course by its id
        const course = await Course.findById(req.params.courseId);
        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }

        // Create a new PDF document
        const doc = new PDFDocument();

        // Set the response headers to trigger a download
        res.setHeader('Content-disposition', 'attachment; filename=certificate.pdf');
        res.setHeader('Content-type', 'application/pdf');

        // Pipe the PDF to the response
        doc.pipe(res);

        // Add content to the PDF
        doc.font('Helvetica-Bold').text('Certificate of Completion', { align: 'center' });
        doc.font('Helvetica').text(`This is to certify that ${corporateuser.Name} has completed the course "${course.title}"`, { align: 'center' });
        doc.image('path/to/course/logo.png', { align: 'center' });
        doc.moveDown();
        doc.text(`Issued on: ${new Date().toLocaleDateString()}`, { align: 'center' });

        // End the PDF and send it to the client
        doc.end();

    } catch (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error processing request' });
    }
});

router.get('/progress/:courseId', async (req, res) => {
  try {
      // Find the corporate user by their id
      const corporateuser = await Corporateuser.findById(req.params.id);
      if (!corporateuser) {
          return res.status(404).send({ error: 'Corporate user not found' });
      }

      // Check if the corporate user is registered for the course
      const isRegistered = corporateuser.RegisteredCourseid.find(courseId => courseId.toString() === req.params.courseId);
      if (!isRegistered) {
          return res.status(401).send({ error: 'You are not registered for this course' });
      }

      // Find the course by its id
      const course = await Course.findById(req.params.courseId);
      if (!course) {
          return res.status(404).send({ error: 'Course not found' });
      }

      // Get the number of videos watched by the user
      const videosWatched = corporateuser.videosWatched.filter(video => video.courseId.toString() === req.params.courseId);

      // Calculate the progress as a percentage
      const progress = (videosWatched.length / course.videos.length) * 100;

      // Send the progress as a response
      return res.send({ progress });

  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error retrieving progress' });
  }
});

router.post('/request-refund/:courseId', async (req, res) => {
  try {
      // Find the corporate user by their id
      const corporateuser = await Corporateuser.findById(req.params.id);
      if (!corporateuser) {
          return res.status(404).send({ error: 'Corporate user not found' });
      }

      // Check if the corporate user is registered for the course
      const isRegistered = corporateuser.RegisteredCourseid.find(courseId => courseId.toString() === req.params.courseId);
      if (!isRegistered) {
          return res.status(401).send({ error: 'You are not registered for this course' });
      }

      // Find the course by its id
      const course = await Course.findById(req.params.courseId);
      if (!course) {
          return res.status(404).send({ error: 'Course not found' });
      }

      // Get the number of videos watched by the user
      const videosWatched = corporateuser.videosWatched.filter(video => video.courseId.toString() === req.params.courseId);

      // Calculate the progress as a percentage
      const progress = (videosWatched.length / course.videos.length) * 100;

      // Check if the progress is less than 50%
      if (progress < 50) {
          // Process the refund
          // refund code 
          
          return res.send({ message: 'Refund request has been processed successfully' });
      } else {
          return res.status(401).send({ error: 'You cannot request a refund as you have attended more than 50% of the course' });
      }

  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error retrieving progress' });
    }
  });

  router.get('/profile/:id', async (req, res) => {
    try {
        // Find the corporate user by their id
        const corporateuser = await Corporateuser.findById(req.params.id);
        if (!corporateuser) {
            return res.status(404).send({ error: 'Corporate user not found' });
        }

        // Get the list of course ids that the user is registered for
        const registeredCourseIds = corporateuser.RegisteredCourseid;

        // Find the details of the courses that the user is registered for
        const registeredCourses = await Course.find({ _id: { $in: registeredCourseIds } });

        // Send the list of registered courses as a response
        return res.send({ registeredCourses });

    } catch (err) {
        console.error(err);
        return res.status(500).send({ error: 'Error retrieving profile' });
    }
});


router.post("/report-problem/:courseId", async (req, res) => {
  try {
    // Find the corporate user by their id
    const corporateUser = await Corporateuser.findById(req.body.userId);
    if (!corporateUser) {
      return res.status(404).send({ error: "Corporate user not found" });
    }

    // Check if the corporate user is registered for the course
    const isRegistered = corporateUser.RegisteredCourseid.find(
      (courseId) => courseId.toString() === req.params.courseId
    );
    if (!isRegistered) {
      return res
        .status(401)
        .send({ error: "You are not registered for this course" });
    }

    // Find the course by its id
    const course = await Course.findById(req.params.courseId);
    if (!course) {
      return res.status(404).send({ error: "Course not found" });
    }

    // Create a new report object
    const report = new Report({
      userId: corporateUser._id,
      courseId: course._id,
      type: req.body.type,
      description: req.body.description,
    });

    // Save the report to the database
    await report.save();

    // Send a success message as a response
    return res.send({ message: "Problem reported successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: "Error reporting problem" });
  }
});

router.get('/previous-problems/:id', async (req, res) => {
  try {
      // Find the corporate user by their id
      const corporateuser = await Corporateuser.findById(req.params.id);
      if (!corporateuser) {
          return res.status(404).send({ error: 'Corporate user not found' });
      }

      // Find all the reports that were made by the user
      const reports = await Report.find({ userId: corporateuser._id });

      // Send the list of reports as a response
      return res.send({ reports });
  } catch (err) {
      console.error(err);
      return res.status(500).send({ error: 'Error retrieving previous problems' });
  }
});

router.get("/reports/:userId", async (req, res) => {
  try {
    // Find the corporate user by their id
    const corporateUser = await Corporateuser.findById(req.params.userId);
    if (!corporateUser) {
      return res.status(404).send({ error: "Corporate user not found" });
    }

    // Find all the reports submitted by the user
    const reports = await Report.find({ userId: req.params.userId });

    // Send the reports and their statuses as a response
    return res.send({ reports });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: "Error retrieving reports" });
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