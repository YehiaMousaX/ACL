// #Task route solution
const express = require("express");
const User = require("../Models/User");
const router = express.Router()




router.get("/read/:Name", async(req, res) => {

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