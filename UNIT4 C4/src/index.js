const express = require("express")

const app = express();
const {register,login} = require("./controllers/auth.controller")

const todoController = require("./controllers/todo.controller")

app.use(express.json());
app.use("/register", register)
app.use("/login", login)
app.use("/todos", todoController)

const connect = require("./configs/db")

app.listen(5000, async (req, res) => {
    try{
        await connect()
    }
    catch(err){
        console.error({msg: err.message})
    }
    console.log("Listening on port 5000")
})

module.exports = app