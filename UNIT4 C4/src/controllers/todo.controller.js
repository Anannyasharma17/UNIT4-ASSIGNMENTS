const express = require("express");

const Todo = require("./models/todo.model");
const users = require("../models/user.model");

const router = express.Router();

router.get("/", async(req, res)=>{
    try {
        const todos = await Todo.find().lean().exec();
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.post("/register", async(req, res)=>{
    try {
        const todo = await todo.find().populate("userId").lean()
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
})

router.post("/login", async(req, res)=>{
    try {
        const todo = await todo.create(req.body)
        return res.status(201).send(todo);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.get("/todos/:id", async(req, res)=>{
    try {
        const todo = await users.findById(req.params.id).lean().exec();
        return res.status(201).send(Todo);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


router.patch("/todos/:id", async(req, res)=>{
    try {
        const todo = await users.findByIdAndUpdate(req.params.id).lean().exec();
        return res.status(201).send(Todo);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.delete("/todos/:id", async(req, res)=>{
    try {
        const todo = await users.delete(req.body)
        return res.status(201).send(Todo);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


module.exports = router;



