const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect ("mongodb+srv://anannya:anannya123@cluster0.fnzu0.mongodb.net/unit4?retryWrites=true&w=majority")
}