const express = require('express')
const router = express.Router();
const Todo = require('../models/todo.model')

const authenticate = require("../middlewares/authentication")

router.get("/",authenticate,async(req, res)=>{
    try{
        const todo = await Todo.find().lean().exec()

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message: err.message})
    }
})

router.post("/",authenticate,async(req, res)=>{
    try{
        const todo = await Todo.create(req.body)

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(400).send({message: err.message})
    }
})

router.get("/:id",authenticate,async(req, res)=>{
    try{
        const todo = await Todo.findById(req.params.id).lean().exec()

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({message: err.message})
    }
})

router.patch("/:id",authenticate,async(req, res)=>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id).lean().exec()

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({message: err.message})
    }
})

router.delete("/:id",authenticate,async(req, res)=>{
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id).lean().exec()

        return res.status(200).send(todo)
    }
    catch(err){
        return res.status(401).send({message: err.message})
    }
})

module.exports =router