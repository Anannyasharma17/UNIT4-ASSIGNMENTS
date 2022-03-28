const express = require("express");

const User = require("./models/user.model");

const Todo = require("./models/todo.model");

const router = express.Router();

router.get("/", async(req, res)=>{
    try {
        const users = await users.find().populate("todoId").lean().exec();
        return res.status(200).send({todo:todo});

    } catch (error) {
        return res.status(500).send({message: "Ops! something went wrong"});
    }
});

router.post("/", async(req, res)=>{
    try {
        const users = await users.create(req.body);
        return res.status(200).send(users);

    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.get("/:id", async(req, res)=>{
    try {
        const users = await users.findById(req.param.id).populate("todoId").lean().exec();
        return res.status(200).send(users);

    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


module.exports = router;





