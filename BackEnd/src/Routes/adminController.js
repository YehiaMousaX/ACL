const express = require("express");
const User = require("../Models/User");
const Course = require("../Models/Course");
const Admin = require("../Models/Admin");
const instractor = require("../Models/Instractor");
const InstractorCourse = require("../Models/InstractorCourse");
const Coroporateuser = require("../Models/Corporateuser");
const newuser = require("../Models/NewUser");
const router = express.Router()
const bcrypt = require('bcrypt');

// row 57 
router.post('/AddAdmin', async(req, res) => {
   const hashedPassword = await bcrypt.hash(req.body.Password, 10);

    {
        const admin = new Admin({
            Email: req.body.Email,
            Password: req.body.Password
        });
        const admin1 = new newuser({
            Email: req.body.Email,
            Password: hashedPassword ,
            type: "admin"
        });
        await admin.save();
        await admin1.save();
        res.sendStatus(200);
    }
  });

  // row 58
  router.put('/AddInstractor', async(req, res) => {
   
    const hashedPassword = await bcrypt.hash(req.body.Password, 10);

    {
        const Instractor = new instractor({
            Email: req.body.Email,
            password: req.body.Password
        });
        const Instractor1 = new newuser({
            Email: req.body.Email,
            Password: hashedPassword,
            type: "instractor"
        });
        await Instractor.save();
        await Instractor1.save();

        res.sendStatus(200);
    }
  });

  // row 59
  router.post('/AddUser', async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.Password, 10);

    {
        const coroporateuser = new Coroporateuser({
            Name: req.body.UserName,
            Password: req.body.Password
        });
        const coroporateuser1 = new newuser({
            Name: req.body.UserName,
            Password: hashedPassword,
            type : "coroporateuser"
        });
        await coroporateuser.save();
        await coroporateuser1.save();
        res.sendStatus(200);
    }
  });

  








module.exports = router;