const express = require("express");
const User = require("../Models/User");
const Course = require("../Models/Course");
const Admin = require("../Models/Admin");
const instractor = require("../Models/Instractor");
const InstractorCourse = require("../Models/InstractorCourse");
const Instractor = require("../Models/Instractor");
var assert = require('assert')

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


router.put("/EditProfile", async(req, res) => {

if(req.body.Email != null  ) {
await Instractor.updateOne({_id: req.body.id} ,{ $set: { Email: req.body.Email } } )
res.send(" Email is updated ");

}
if(req.body.Biography != null ) {
await Instractor.updateOne({_id: req.body.id} ,{ $set: { Biography: req.body.Biography } } )
res.send(" Biography is updated ");

}

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
            review : req.body.review 

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



router.get("/Mycoursestitles", async(req, res) => {
    
    const Courses = await Course.find({ _id : req.body.instractorid }, { _id: 0 ,title : 1 });
    
  res.send(Courses);
});


router.get("/AllCourses", async(req, res) => {
    
  X.push ( await Course.find({}, { _id: req.body.id , title : req.body.title, totalHours : req.body.totalHours, rating : req.body.rating }));
  
res.send(X);
});


router.get("/AllCourses/prices", async(req, res) => {
  
  X.push ( await Course.find({}, { _id: 0 ,title : 1, price : 1}));
  
res.send(X);
});


router.get("/AllCourses/titledetails", async(req, res) => {
  
  const details = await Course.find({title : req.body.title}, { _id: 0 , subtitles : 1 , totalHours : 1, excercises : 1,price : 1, discount : 1});
  
res.send(details);
});


module.exports = router;