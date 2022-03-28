const mongoose = require("mongoose");

const todos = require("./todo.model");
const userSchmema = new mongoose.Schema({
    firstName: {type: String, require:true},
    lastName: {type: String, require:true},
    email: {type: String, require:true},
    password: {type: String, require:true},
    todoId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "todos",
        required: true
    }

},
{
    timestemps: true,
    versionkey: false
}
)

const users = mongoose.model("user", userSchmema);

module.exports = users;


