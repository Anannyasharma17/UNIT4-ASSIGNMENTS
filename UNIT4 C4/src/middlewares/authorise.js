const express= require("express");

// const permittedRole=["seller", "admin"]
const User = require("../models/user.model")
const authorise= (permittedRole)=>{
    return (req, res, next)=>{
        const user= req.user;
        let isPermitted=false;
        permittedRole.map(role=>{
            if(user.role.includes(role)){
                isPermitted= true;
            }
        });
        if(isPermitted){
            return next();
        }
        else{
            res.status(401).send("You are Unauthorised")
        }
    }
};

module.exports= authorise