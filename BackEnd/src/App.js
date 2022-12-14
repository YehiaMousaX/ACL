// External variables
const express = require("express");
const bodyParser = require('body-parser');
//App variables
const app = express();
const port = process.env.PORT || "8000";
const user = require('./Models/User');

// #Importing the userController
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configurations
// Mongo DB

const mongoose = require('mongoose')
const url = `mongodb+srv://seif:01063864779@cluster0.iacobfm.mongodb.net/test`;
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log("MongoDB is now connected!")
            // Starting server
        app.listen(port, () => {
            console.log(`Listening to requests on http://localhost:${port}`);
        })
    })
    .catch(err => console.log(err));


/*
                                                    Start of your code
*/
app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
});

// #Routing to userController here

const UserRoute = require('./Routes/userController');
app.use('/user', UserRoute);

const instractorRoute = require('./Routes/instractorController');
app.use('/instractor', instractorRoute);

const AdminController = require('./Routes/adminController');
app.use('/admin', AdminController);

const Coroporateuser = require('./Routes/CoroporateuserController');
app.use('/Coroporateuser', Coroporateuser);

const Guest = require('./Routes/GuestController');
app.use('/Guest', Guest);



/*
                                                    End of your code
*/