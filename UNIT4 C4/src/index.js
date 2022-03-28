const express = require("express");

const userSchmema = require("./models/user.model");

const todoSchema = require("./models/todo.model");

const app = express();
const connect = require("./configs/db")

const userController = require("./controllers/user.controller")
const todoController = require("./controllers/todo.controller")


app.use("/users", userSchmema);
app.use("/todo", todoSchema);

app.listen(5000, async()=>{
   try {
    await connect();
    console.log("I am working on port 5000!");
   } catch (error) {
       console.log(error.message);
   }
});