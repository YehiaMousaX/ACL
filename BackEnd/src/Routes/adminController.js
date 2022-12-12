const express = require("express");
const User = require("../Models/User");
const Course = require("../Models/Course");
const Admin = require("../Models/Admin");
const instractor = require("../Models/Instractor");
const InstractorCourse = require("../Models/InstractorCourse");
const router = express.Router()

//
router.post('/AddAdmin', async(req, res) => {
    {
        const admin = new Admin({
            UserName: req.body.UserName,
            Password: req.body.Password
        });
        res.sendStatus(200);
    }
  });

  router.post('/AddInstractor', async(req, res) => {
    {
        const Instractor = new instractor({
            Name: req.body.UserName,
            Password: req.body.Password
        });
        res.sendStatus(200);
    }
  });

  router.post('/AddUser', async(req, res) => {
    {
        const user = new User({
            Name: req.body.UserName,
            Password: req.body.Password
        });
        res.sendStatus(200);
    }
  });








module.exports = router;