const express = require("express");
const User = require("../Models/User");
const Course = require("../Models/Course");
const Admin = require("../Models/Admin");
const instractor = require("../Models/Instractor");
const InstractorCourse = require("../Models/InstractorCourse");
const Instractor = require("../Models/Instractor");
var url = require('url');

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
var p = "" ;
const router = express.Router()
//
router.get("/search", async(req, res) => {
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

// row 31 
router.put("/EditProfile", async(req, res) => {

if(req.body.Email != null  ) {
await Instractor.updateOne({_id: req.body.id} ,{ $set: { Email: req.body.Email } } )

}
if(req.body.Biography != null ) {
await Instractor.updateOne({_id: req.body.id} ,{ $set: { Biography: req.body.Biography } } )

}

res.status(200)

});

// row 8
router.post('/SelectCountry', async(req, res) => {


  await Instractor.updateOne({_id: req.body.instractorid} ,{ $set: { Country:(countryList [req.body.Country -1] )} } )



});

// row 25
router.post('/AddCourse', async(req, res) => {

     var t2= new Array();
     var t3= [String(req.body.Subtitle),"",""];
     var t4= new Array();

     t2.push(t3)
  
    {
      
        // Insert the new course if they do not exist yet
        const course = new Course({
            Courseid: req.body.Courseid ,
            title: req.body.title,
            totalHours: req.body.totalHours,
            price: req.body.price,
            shortsummary: req.body.shortsummary,
            Subject: req.body.Subject ,
            instractorid : req.body.instractorid ,
            review : req.body.review ,
            subtitles:t2,
            excercises : t4
        });
        
        const instractorcourse = new InstractorCourse({
          Courseid: req.body.Courseid ,
          instractorid : req.body.instractorid 

        }) ;

         
        try{
            await course.save();
            await instractorcourse.save() ;
            console.log("this course is added successfully : "+ req.body.Courseid);

        
          }
          catch(error){
            console.log(error)
            console.log("this course is added before"+ ":  "+ req.body.Courseid) 
            
          }
        res.sendStatus(200);

    }
    

});

/// ADD SUB TITLES FOR ACOURSE 
router.get('/Course/Addsubtitles', async(req, res) => {
  
 t3 = [req.body.subtitle ,"" ,""] 
Course.findOneAndUpdate({ Courseid:req.body.courseid }, { $push: { subtitles: t3 } }, { new: true }, (err, doc) => {
  if (err) {
    // Handle the error
    console.log(err);
  } else {
    // Print the updated document
    console.log(doc);
    res.sendStatus(200);

  }
});
});


// row 26

router.post('/Course/subtitles/AddYoutubeLink', async(req, res) => {

  var youtube = String(req.body.linkyoutube);

  if (youtube.substring(8,23) == "www.youtube.com") {
    Course.findOneAndUpdate({Courseid:req.body.courseid, subtitles : [req.body.subtitle,"",""]}, { $set: { 'subtitles.$': [req.body.subtitle,String(youtube),req.body.shortdescription] } }, { new: true }, (err, doc) => {
      if (err) {
        // Handle the error
        console.log(err);
      } else {
        // Print the updated document
        console.log(doc);
      }
    });
    res.sendStatus(200);

  }

  else {
    console.log("Not valid Link");
    res.sendStatus(200);


  }

  

});
// row 33 
router.put("/ChangePassword", async(req, res) => {


  var t = String( await Instractor.findOne({_id: req.body.instractorid} ,  {_id : 0 , password:1}))  ;
  if (t.substring(13,t.length-3)==(req.body.OldPassword)) {
  await Instractor.updateOne({_id: req.body.instractorid} ,{ $set: { password: req.body.NewPassword } } )
  console.log(" the new password is updated"+ ":  "+ req.body.NewPassword) 
  res.sendStatus(200);
  }
  else {
  console.log("you enter your old password wrong") 
  res.sendStatus(200);
  }



});



// row 23 
router.get("/MyCourses/ratingandreviews", async(req, res) => {
  

  const courses = await Course.find({instractorid : req.body.instractorid});
  

  res.send(courses);
});

// row 30 
router.get("/Myratingandreviews", async(req, res) => {
  
  y = new Array () ;
  const rate = await Instractor.find({instractorid : req.body.instractorid}, {  rate :1 });
  const review = await Instractor.find({instractorid : req.body.instractorid}, {  review :1 });

  var rate1 = String(rate.substring(9,rate.length-3))
  var i = 1
  var j = 0 
  var result = 0
  while (i < rate1.length ) {
    result =result +parseInt(rate1.substring(i,i+1))
   j++ ;
   i = i+ 3 
  

  }

  var Averagerate =  result/ j ;
  y.push (Averagerate)
  y.push (review)
  res.send(y);
});


// row 28

router.post("/createquestion", async(req, res) => {
  
  Course.updateOne({ Courseid: req.body.courseid }, { $push: { excercises: req.body.question} }, function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Question added Successfully");
    }
  });
  res.sendStatus(200);
});




/*
*/
// row 32 

router.post("/Courses/promotion", async(req, res) => {
  
  var t = String (req.body.discount) + " and it is valid for :" + String (req.body.forhowlong)
  await Course.updateOne({courseid: req.body.courseid} ,{ $set: { discount: t} } )
  res.sendStatus(200);


});

// row 27 

router.post("/Courses/uploadpreview", async(req, res) => {
  var youtube = String(req.body.linkyoutube);

  if (youtube.substring(8,23) == "www.youtube.com") {
    await Course.updateOne({courseid: req.body.courseid} ,{ $set: { preview: youtube} } )
    res.sendStatus(200);

  }

  else {
    console.log("Not valid Link");
    res.sendStatus(200);


  }
  

});

  // row 14
  router.get("/AllCourses/TitleDetails", async(req, res) => {
  
    const details = await Course.find({title : req.params.title}, {  subtitles : 1 , totalHours : 1, excercises : 1,price : 1, discount : 1});
    
  res.send(details);
  });

    // row 10 
router.get("/AllCourses/prices", async(req, res) => {
    
  X.push ( await Course.find({Courseid: req.body.courseid}, {title : 1, price : 1}));
  
res.send(X);
});

// row 9
router.get("/AllCourses", async(req, res) => {
    
  X.push ( await Course.find({}, {title : 1, totalHours : 1, rate : 1 }));
  
res.send(X);
});

 // row 10 
 router.get("/AllCourses/prices", async(req, res) => {
    
  X.push ( await Course.find({Courseid: req.body.courseid}, { _id: 0 ,title : 1, price : 1}));
  
res.send(X);
});

 


// row 11 

router.get("/rate", async(req, res) => {
  const Courses = await Course.find({ rate: req.params.rate });
  res.send(Courses);

});


router.get("/sub", async(req, res) => {
  const Courses = await Course.find({ Subject: req.params.Subject });
  res.send(Courses);
});

router.get("/subrate", async(req, res) => {
  const Courses = await Course.find({ Subject: req.params.Subject, rate: req.params.rate });
  res.send(Courses);
});

//row 12
router.get("/price", async(req, res) => {
  const Courses = await Course.find({ price: req.params.price });
  res.send(Courses);
});

router.get("/AllCourses/:courseId", async(req, res) => {

  const course = await Course.findOne({Courseid: req.params.courseId});
    if (!course) {
        return res.status(404).send("Course not found");
    }

    const instractor = await Instractor.findById(req.body.instractorId);
    if (!instractor) {
        // If the user is not found, send a 404 error
        return res.status(404).send("User not found");
    }

    // Calculate the price with the discount if applicable
    // the discount in the course schema should have a country field 
    let price = course.price;
    if (course.discount && instractor.Country === course.discount.country) {
        price = price - (price * course.discount.percentage / 100);
    }

    res.send({
        subtitles: course.subtitles,
        excercises: course.excercises,
        totalHours: course.totalHours,
        price: price,
    });
});


// get instractor profile 


router.post("/MyProfile", async(req, res) => {

   y = new Array();
   var name = String(await Instractor.find({ _id: req.body.id } , {_id : 0 ,Name: 1 }));
  var email = String(await Instractor.find({ _id: req.body.id } , {_id : 0 ,Email : 1 }));
  var Biography = String(await Instractor.find({ _id: req.body.id } , {_id : 0 ,Biography : 1 }) );
  var rate = String(await Instractor.find({ _id: req.body.id } , {_id : 0 ,rate : 1 }) );
   
   y.push (name.substring(9,name.length -3))
   y.push (email.substring(10,email.length-3))
   y.push(Biography.substring(14,Biography.length-3))
 //  y.push(rate.substring(9,rate.length-3))

   
  var rate1 = String(rate.substring(9,rate.length-3))
  var i = 1
  var j = 0 
  var result = 0
  while (i < rate1.length ) {
    result =result +parseInt(rate1.substring(i,i+1))
   j++ ;
   i = i+ 3 
  

  }

  var Averagerate =  result/ j ;
  y.push (Averagerate)

  res.send(y)



});



module.exports = router;