const express = require("express");

const validator = require("validators");
const connect = require("./configs/db");
const app = express();
const userController = require("./controllers/user.controller")

const user = require("./models/user.model");
const book = require("./models/book.model");
const comment = require("./models/comment.model");
const publication = require("./models/publication.model");



app.listen(3000, async()=>{
    try {
        await connect()
        console.log("I am working for you Anannya!");
    } 
    catch (error) {
        console.log(error)
    }
});

