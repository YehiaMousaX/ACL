// #Task route solution
const express = require("express");
const Course = require("../Models/Course");
const User = require("../Models/User");
const router = express.Router()

router.get("/rate/:rating", async(req, res) => {
    const Courses = await Course.find({ rating: req.params['rating'] });
    res.send(Courses);
});


router.get("/sub/:Subject", async(req, res) => {
    const Courses = await Course.find({ Subject: req.params['Subject'] });
    res.send(Courses);
});

router.get("/subrate/:Subject/:rating", async(req, res) => {
    const Courses = await Course.find({ Subject: req.params['Subject'], rating: req.params['rating'] });
    res.send(Courses);
});

router.get("/price/:price", async(req, res) => {
    const Courses = await Course.find({ price: req.params['price'] });
    res.send(Courses);
});


router.get("/:Name", async(req, res) => {
    const users = await User.find({ Name: req.params['Name'] });
    res.send(users);
});




router.post('/', async(req, res) => {
    {
        // Insert the new user if they do not exist yet
        const user = new User({
            Name: req.body.Name,
            Email: req.body.Email,
            Password: req.body.Password,
            Age: req.body.Age,
            BornIn: req.body.BornIn,
            LivesIn: req.body.LivesIn,
            MartialStatus: req.body.MartialStatus,
            PhoneNumber: req.body.PhoneNumber,
            Job: req.body.Job
        });
        await user.save();
        console.log(req.body.Name);
        res.sendStatus(200);

    }
});

router.put("/update/:Name", async(req, res) => {
    const user = req.body;
    const para = req.params['Name'];
    await User.updateOne({ Name: para }, user);
    res.send({ data: "User updated " });

});

router.delete("/delete/:Name", async(req, res) => {

    const users = await User.deleteOne({ Name: req.params['Name'] });
    res.send(users);
});


module.exports = router;