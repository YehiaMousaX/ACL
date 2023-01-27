const express = require("express");
const User = require("../Models/User");
const Course = require("../Models/Course");
const Admin = require("../Models/Admin");
const instractor = require("../Models/Instractor");
const InstractorCourse = require("../Models/InstractorCourse");
const Coroporateuser = require("../Models/Corporateuser")
const Report = require("../Models/Report");
const Request= require("../Models/Request");
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





  router.get("/AddCountryCurrency", async(req, res) => {
   
  
    await Coroporateuser.updateOne({Email: req.body.Email} ,{ $set: { Countrycurrency: req.body.Countrycurrency } } )
  
  });

  router.post("/AllCourses/registerfor", async(req, res) => {
    const registeredCourses = await Coroporateuser.aggregate([
      {$match: {Email: req.body.Email }},
      {$unwind: "$RegisteredCourseid"},
      {$replaceRoot: {newRoot: "$RegisteredCourseid"}}
    ]);
   
    res.send(registeredCourses);
    });
    

    router.post('/watch', async (req, res) => {
      try {
          const Coroporateuser = await Coroporateuser.findOne({Email: req.body.Email});
          if (!Coroporateuser) {
              return res.status(404).send({ error: 'Coroporateuser not found' });
          }
    
          const course = await Course.findOne({Courseid: req.body.Courseid});
          if (!course) {
              return res.status(404).send({ error: 'Course not found' });
          }
    
          // Find the video by its id
          const video = course.videos.find(v => v.id === req.body.id);
          if (!video) {
              return res.status(404).send({ error: 'Video not found' });
          }
    
          try{
            console.log(`checking if the video watched before`);
    
            const videowatched = Coroporateuser.videosWatched.find(v => v.id === req.body.id);
            if (!videowatched) {
    
              console.log(`adding the video to videos watched`);
    
              Coroporateuser.videosWatched.push(video);
            console.log(`added the video to videos watched`);
    
            await Coroporateuser.save();
            console.log(`Coroporateuser saved`);
    
          }
          console.log(`calculating progress1`);
    
            const videosWatched = Coroporateuser.videosWatched.filter(v => v.courseID === course.Courseid);
            console.log(`calculating progress2`);
            const progress = (videosWatched.length / course.videos.length) * 100;
            console.log(`calculating progress3`);
    
            if (progress >= 100){
              console.log(`calculating progress4`);
              if(!Coroporateuser.CompletedCourseid.includes(course.Courseid)){
                console.log(`calculating progress5`);
                Coroporateuser.CompletedCourseid.push(video.courseID);
              console.log(`calculating progress6`);
              await Coroporateuser.save();
              console.log(`calculating progress7`);
            }}
    
            return res.send({ message: 'Loading!' });
            
        }catch(err){
            console.error(err);
            return res.status(500).send({ error: 'Error adding video to watch history' });
        }
    
      } catch (err) {
          console.error(err);
          return res.status(500).send({ error: 'Error retrieving video' });
      }
    });
    
    
    
    router.post('/receiveCertificate', async (req, res) => {
      
      console.log(`Pass1`);
        const Coroporateuser = await Coroporateuser.findOne({Email: req.body.Email});
        if (!Coroporateuser) {
            return res.status(404).send({ error: 'Corporate Coroporateuser not found' });
        }
    
        console.log(`Pass2`);
        const course = await Course.findOne({Courseid: req.body.Courseid});
        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }
    
        console.log(`Pass3`);
            // Check if the corporate Coroporateuser has completed the course
            const isCompleted = Coroporateuser.CompletedCourseid.includes(course.Courseid);
            console.log(`Pass4`);
            if (!isCompleted) {
                return res.status(401).send({ error: 'You have not completed this course' });
            }
            console.log(`Pass5`);
    
             // Create a new PDF document
        const doc = new PDFDocument();
        console.log(`Pass6`);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="certificate.pdf"');
        const pdfPath = '\certificate.pdf';
        doc.pipe(fs.createWriteStream(pdfPath));
        console.log(`Pass7`);
    
        // Add the certificate image
        doc.font('Helvetica-Bold').text('Certificate of Completion', { align: 'center' });
            doc.font('Helvetica').text(`This is to certify that ${user.Name} has completed the course "${course.title}"`, { align: 'center' });
            doc.moveDown();
            doc.text(`Issued on: ${new Date().toLocaleDateString()}`, { align: 'center' });
    
        console.log(`Pass8`);
        // make sure that the document has been fully written before calling the end method
        console.log(`Pass9`);
    
    
            doc.end();
       
        
        console.log(`Pass10`);
    
             // Set up the transporter for sending email
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            Coroporateuser: 'yehiaronldo@gmail.com',
              pass: 'ulywxspvyrwthxct'
          }
      });
      console.log(`Pass15`);
    
             // Send the email
        const mailOptions = {
          from: 'yehiaronldo@gmail.com',
          to: 'mohameddawod7551@gmail.com',
          subject: 'Certificate for ' + course.title,
          text: 'Congratulations on completing the course! Please find your certificate attached.',
          attachments: [{path: 'certificate.pdf'}]
      };
      console.log(`Pass16`);
      transporter.sendMail(mailOptions, function(error, info){
        console.log(`Pass21`);
          if (error) {
              console.log(error);
              return res.status(500).send({ error: 'Error sending email' });
          } else {
              console.log('Email sent: ' + info.response);
              return res.status(200).send({ message: 'Certificate sent to ' + user.Email });
          }
      });
    
        
    });
    
    
    
    router.post('/downloadCertificate', async (req, res) => {
      console.log(`Pass1`);
        const user = await User.findOne({Email: req.body.Email});
        if (!user) {
            return res.status(404).send({ error: 'user not found' });
        }
    
        console.log(`Pass2`);
        const course = await Course.findOne({Courseid: req.body.Courseid});
        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }
    
        console.log(`Pass3`);
            // Check if the corporate user has completed the course
            const isCompleted = user.CompletedCourseid.includes(course.Courseid);
            console.log(`Pass4`);
            if (!isCompleted) {
                return res.status(401).send({ error: 'You have not completed this course' });
            }
            console.log(`Pass5`);
    
             // Create a new PDF document
        const doc = new PDFDocument();
        console.log(`Pass6`);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="certificate.pdf"');
        const pdfPath = '\certificate.pdf';
        doc.pipe(fs.createWriteStream(pdfPath));
        console.log(`Pass7`);
    
        // Add the certificate image
        doc.font('Helvetica-Bold').text('Certificate of Completion', { align: 'center' });
            doc.font('Helvetica').text(`This is to certify that ${user.Name} has completed the course "${course.Courseid}"`, { align: 'center' });
            doc.moveDown();
            doc.text(`Issued on: ${new Date().toLocaleDateString()}`, { align: 'center' });
    
        console.log(`Pass8`);
        // make sure that the document has been fully written before calling the end method
        console.log(`Pass9`);
    
    
            doc.end();
    
            doc.pipe(res);
       
        
        console.log(`Pass10`);
    
     
    });
    
    router.post('/downloadNotes', async (req, res) => {
    
    
             // Create a new PDF document
        const doc = new PDFDocument();
        console.log(`Pass6`);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="certificate.pdf"');
        const pdfPath = '\certificate.pdf';
        doc.pipe(fs.createWriteStream(pdfPath));
        console.log(`Pass7`);
    
        // Add the certificate image
        doc.font('Helvetica-Bold').text('My Notes', { align: 'center' });
            doc.font('Helvetica').text(`"${req.body.Notes}"`, { align: 'center' });
            doc.moveDown();
            doc.text(`Issued on: ${new Date().toLocaleDateString()}`, { align: 'center' });
    
        console.log(`Pass8`);
        // make sure that the document has been fully written before calling the end method
        console.log(`Pass9`);
    
    
            doc.end();
    
            doc.pipe(res);
       
        
        console.log(`Pass10`);
    
     
    });
    
    router.get('/progress', async (req, res) => {
      try {
        const Coroporateuser = await Coroporateuser.findOne({Email: req.body.Email});
        if (!Coroporateuser) {
            return res.status(404).send({ error: 'Coroporateuser not found' });
        }
    
        const course = await Course.findOne({Courseid: req.body.Courseid});
        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }
    
        try{
        
          const videosWatched = Coroporateuser.videosWatched.filter(v => v.courseID === course.Courseid);
          const progress = Math.ceil((videosWatched.length / course.videos.length) * 100);
    
          return res.send({ progress });
    
    
          
      }catch(err){
          console.error(err);
          return res.status(500).send({ error: 'Errorrr ' });
      }
    
    } catch (err) {
        console.error(err);
          return res.status(500).send({ error: 'Error retrieving progress' });
    }
    });
    
    router.post('/progress1', async (req, res) => {
      try {
          const Coroporateuser = await Coroporateuser.findOne({Email: req.body.Email});
          console.log(`Pass4`);
    
          if (!Coroporateuser) {
            console.log(`Pass4`);
    
              return res.status(404).send({ error: 'Coroporateuser not found' });
    
          }
    
          const course = await Course.findOne({Courseid: req.body.Courseid});
          console.log(`Pass4`);
    
          if (!course) {
            console.log(`Pass4`);
    
              return res.status(404).send({ error: 'Course not found' });
    
          }
    
          console.log(`Pass4`);
    
    
          try{
            const videosWatched = Coroporateuser.videosWatched.filter(v => v.courseID === course.Courseid);
            console.log(`Pass4`);
    
            const progress = Math.ceil((videosWatched.length / course.videos.length) * 100);
            console.log(`Pass5`);
    
    
            return res.send({progress: "your progress is " +progress+"%"});
            
        }catch(err){
            console.error(err);
            return res.status(500).send({ error: 'Error adding video to watch history' });
        }
    
      } catch (err) {
          console.error(err);
          return res.status(500).send({ error: 'Error retrieving video' });
      }
    });
    
    
    router.put('/request-refund', async (req, res) => {
      try {
        console.log(`Pass1`);
        const Coroporateuser = await User.findOne({Email: req.body.Email});
        if (!Coroporateuser) {
            return res.status(404).send({ error: 'Coroporateuser not found' });
        }
    
        console.log(`Pass2`);
        const course = await Course.findOne({Courseid: req.body.Courseid});
        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }
    
     
        console.log(`Pass3`);
          // Get the number of videos watched by the user
          const videosWatched = Coroporateuser.videosWatched.filter(v => v.courseID === course.Courseid);
          console.log(`Pass4`);
          const progress = Math.ceil((videosWatched.length / course.videos.length) * 100);
          console.log(`Pass55`);
          if (progress > 50) {
            console.log(`Pass56`);
    
            const check = await Request.findOne({ 
              userEmail: Coroporateuser.Email,
              courseId: course.Courseid 
            });
            
            console.log(`Pass57`);
            if (check) {
              console.log(`Pass58`);
              return res.status(404).send({ error: 'You have already made request to this course before' });}
              console.log(`Pass59`);
            if (!check) {
              // Process the refund 
              console.log(`Pass5`);
              const request = new Request({
                userEmail: Coroporateuser.Email,
                courseId: course.Courseid,
                
              });
              console.log(`Pass6`);
              
          
              // Save the report to the database
              await request.save();  }
              console.log(`Pass7`);
    
              return res.send({ message: 'Refund request has been processed successfully' });
          } else {
              return res.status(401).send({ error: 'You cannot request a refund as you have attended more than 50% of the course' });
          }
    
      } catch (err) {
          console.error(err);
          return res.status(500).send({ error: 'Error retrieving progress' });
        }
      });
    
    
    
    router.put("/report-problem", async (req, res) => {
      try {
        const coroporateuser = await Coroporateuser.findOne({Email: req.body.Email});
        if (!coroporateuser) {
          return res.status(404).send({ error: "user not found" });
        }
    
        const course = await Course.findOne({Courseid:req.body.Courseid});
        if (!course) {
          return res.status(404).send({ error: "Course not found" });
        }
    
    
    
    
        // Create a new report 
        const report = new Report({
          userEmail: coroporateuser.Email,
          courseId: course.Courseid,
          typeoftheUser: "Coroporateuser",
          typeoftheProblem: req.body.type,
          description: req.body.description,
          status: "unsolved",
        });
        
    
        // Save the report to the database
        await report.save();
    
        return res.send({ message: "Problem reported successfully" });
      } catch (err) {
        console.error(err);
        return res.status(500).send({ error: "Error reporting problem" });
      }
    });
    
    
    router.post('/previous-reports', async (req, res) => {
      try {
        const coroporateuser = await Coroporateuser.findOne({Email: req.body.Email});
    
          if (!coroporateuser) {
              return res.status(404).send({ error: 'Corporate user not found' });
          }
    
          const reports = await Report.find({ userEmail: coroporateuser.Email });
    
          // Send the list of reports as a response
          return res.send({ reports });
      } catch (err) {
          console.error(err);
          return res.status(500).send({ error: 'Error retrieving previous problems' });
      }
    });
    
    
    
    
    router.put("/follow-up/:reportId", async (req, res) => {
      try {
    
        console.log(`Pass1`);
        // Find the report by its id
        const report = await Report.findById(req.params.reportId);
        if (!report) {
          return res.status(404).send({ error: "Report not found" });
        }
        console.log(`Pass2`);
    
        // Check if the report is already resolved
        if (report.status === "solved") {
          return res.status(400).send({ error: "Report already resolved" });
        }
    
        console.log(`Pass3`);
    
        // Update the report status to "in-progress"
        report.status = "in-progress";
        console.log(`Pass4`);
        await report.save();
    
        console.log(`Pass5`);
        // Send the updated report as a response
        return res.send({ report });
        
      } catch (err) {
        console.error(err);
        return res.status(500).send({ error: "Error updating report" });
      }
    });



module.exports = router;