// #Task route solution
const express = require("express");
const Course = require("../Models/Course");
const Instractor = require("../Models/Instractor");
const Admin = require("../Models/Admin");
const InstractorCourse = require("../Models/InstractorCourse");
const User = require("../Models/User");
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




router.get("/rate", async(req, res) => {
    const Courses = await Course.find({ rating: req.params.rating });
    res.send(Courses);

});


router.get("/sub", async(req, res) => {
    const Courses = await Course.find({ Subject: req.params.Subject });
    res.send(Courses);
});

router.get("/subrate", async(req, res) => {
    const Courses = await Course.find({ Subject: req.params.Subject, rating: req.params.rating });
    res.send(Courses);
});

router.get("/price", async(req, res) => {
    const Courses = await Course.find({ price: req.params.price });
    res.send(Courses);
});


router.get("/MyName", async(req, res) => {
    const users = await User.find({ Name: req.params.Name});
    res.send(users);
});

router.get("/Mycoursestitles", async(req, res) => {
	  X.push (await InstractorCourse.find( {instractorid : req.params.instractorid } ,{ _id : 0 ,courseid :1 } ) );
    //const Courses = await Course.find({ Courseid: Coursesid }, { title : 1 });
    res.send(X);
});



router.post('/signup', async(req, res) => {


	{
        // Insert the new user if they do not exist yet
        const user = new User({
            password : req.body.password ,
			Name: req.body.Name,
            Email: req.body.Email,
            Age: req.body.Age,
            BornIn: req.body.BornIn,
            Country: req.body.Country,
            MartialStatus: req.body.MartialStatus,
            PhoneNumber: req.body.PhoneNumber,
            Job: req.body.Job
        });

        await user.save();
		await user.update({ Country:(countryList [req.body.Country -1] )}, user);
        console.log(req.body.Name);
        res.sendStatus(200);

    }
});



router.get("/AllCourses", async(req, res) => {
    
    X.push ( await Course.find({}, { _id: 0 ,title : 1, totalHours : 1, rating : 1 }));
    
  res.send(X);
  });


router.get("/AllCourses/prices", async(req, res) => {
    
    X.push ( await Course.find({}, { _id: 0 ,title : 1, price : 1}));
    
  res.send(X);
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

  router.get("/AllCourses/TitleDetails", async(req, res) => {
  
    const details = await Course.find({title : req.params.title}, { _id: 0 , subtitles : 1 , totalHours : 1, excercises : 1,price : 1, discount : 1});
    
  res.send(details);
  });

  module.exports = router;