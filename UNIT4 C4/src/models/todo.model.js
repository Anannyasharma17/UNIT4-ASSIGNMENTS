const mongoose = require("mongoose");

const users = require("./user.model");

const todoSchema = new mongoose.Schema({
    title: {type: String, require:true}, 
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        require: true
    }
},
{
    timestemps: true
});


const todos = mongoose.model("todo", todoSchema);

module.exports = todos;