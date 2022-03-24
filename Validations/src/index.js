const express = require("express");

const app = express();
const userController = require("./controllers/user.controller")

app.use(express.json());

app.use("/users", userController);

const connect = require("./configs/db");

app.listen(5000, async()=>{
   try {
    await connect();
    console.log("I am working on port 5000!")
   } catch (error) {
       console.log(error);
   }
});