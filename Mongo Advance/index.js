const express = require("express");

const mongoose = require("mongoose");

const app = express();

const connect = ()=>{
    mongoose.connect('mongodb://localhost:27017/unit4')
}

const userSchema = mongoose.Schema({
    id : Number,
    movie_name: String,
    movie_genre: String,
    production_year: String,
    budget: String,
});

const user = mongoose.model('mockmovies', userSchema);

app.get("/mockmovies", async (req,res) => {
    const userData = await user.find({"budget": {$gte: "11795.76"}}).lean().exec();
    // console.log(userData)
    return res.send(userData)
});


app.listen(5000,async() => {
    try{
        await connect();
        console.log("listening at 5000")
    }
    catch(e){
        console.log(e)
    }    
});
