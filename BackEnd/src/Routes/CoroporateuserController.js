const express = require("express");
const User = require("../Models/User");
const Course = require("../Models/Course");
const Admin = require("../Models/Admin");
const instractor = require("../Models/Instractor");
const InstractorCourse = require("../Models/InstractorCourse");
const Coroporateuser = require("../Models/Corporateuser")
const router = express.Router()

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

  router.get("/AddCountryCurrency", async(req, res) => {
   
  
    await Coroporateuser.updateOne({Email: req.body.Email} ,{ $set: { Countrycurrency: req.body.Countrycurrency } } )
  
  });

module.exports = router;