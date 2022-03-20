const express = require("express");

const app = express();

app.get("/", function (req, res){
   res.send("Hello Anannya, Please take some Rest");
});

app.listen(1200, ()=>{
    console.log("I am working properly one");
});

app.get("/books", function (req, res){
    res.send("Hello Anannya sharma, how you doing bro?");
});

app.listen(1500, ()=>{
    console.log("I am working properly two");
});

