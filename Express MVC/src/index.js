const express = require("express");

const connect = require("./configs/db");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller");
const studentController = require("./controllers/students.controller");


app.use("user", userController);
app.use("student", studentController);


app.listen(3000, async(req, res)=>{
    try {
    await connect();
    console.log("I am working on port 3000!");

    } catch (error) {
    console.log(error);
    }
    
});