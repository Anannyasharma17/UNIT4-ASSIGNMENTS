const express = require("express");

const app = express();

const data = require("./data")

app.use(allBooks);

app.get("/", (req, res)=>{
    return res.send("I am very first one!")
})

app.get("/books", allBooks, (req, res)=>{
    return res.send("Books are there only!")
});

app.get("/book/:name",auth, (req, res)=>{
    res.send({bookname:req.params.name});    
  })

function allBooks(req, res, next){
    console.log("Fetching all books");
    next();
};

function auth(req, res, next){
    console.log(req.params.name);
    next();
}

app.listen(3000, ()=>{
    console.log("Port 4000 working!")
})
