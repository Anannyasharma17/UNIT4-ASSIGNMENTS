const User = require('../models/user.model')
var jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (user) => {
    return jwt.sign({user},process.env.SECRET_KEY)
}

const register = async(req, res)=>{
    try{
        let user = await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).send({message: err.message})
        }
        user = await User.create(req.body)

        const token = generateToken(user)
        return res.status(200).send({user,token})
    }
    catch(err){
        return res.status(400).send({message: err.message})
    }
}

const login = async(req, res)=>{
    try{
        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(400).send({message: err.message})
        }
       // user = await User.create(req.body)

       const match = user.checkPassword(req.body.password)

       if(!match){
           return res.status(400).send({message: err.message})
       }

        const token = generateToken(user)
        return res.status(200).send({user,token})
    }
    catch(err){
        return res.status(400).send({message: err.message})
    }
}

module.exports = {register,login}