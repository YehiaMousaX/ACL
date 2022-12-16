const express = require("express");
const User = require("../Models/User");
const Course = require("../Models/Course");
const Admin = require("../Models/Admin");
const instractor = require("../Models/Instractor");
const InstractorCourse = require("../Models/InstractorCourse");
const Coroporateuser = require("../Models/Corporateuser")

const router = express.Router()

// row 57 
router.post('/AddAdmin', async(req, res) => {
    {
        const admin = new Admin({
            UserName: req.body.UserName,
            Password: req.body.Password
        });
        await admin.save();
        res.sendStatus(200);
    }
  });

  // row 58
  router.post('/AddInstractor', async(req, res) => {
    {
        const Instractor = new instractor({
            Name: req.body.UserName,
            Password: req.body.Password
        });
        await Instractor.save();
        res.sendStatus(200);
    }
  });

  // row 59
  router.post('/AddUser', async(req, res) => {
    {
        const coroporateuser = new Coroporateuser({
            Name: req.body.UserName,
            Password: req.body.Password
        });
        await coroporateuser.save();
        res.sendStatus(200);
    }
  });

  








module.exports = router;