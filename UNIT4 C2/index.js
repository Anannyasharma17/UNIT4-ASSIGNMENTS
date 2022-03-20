const express = require("express");

const mongoose = require("mongoose");

const app = (express.json());

const connect = ()=>{
    return mongoose.connect("monogdb://localhost:27017/unit4");
};

const userSchema = ({
    firstName: {type: String, required: true},
    middleName: {type: String},
    lastName: {type: String, required: true},
    age: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String, required: true},
    gender: {type: String, required: false || "Female"},
    lastName: {type: String, required: true || "customer"},
},
{
    versionKey: false,
    timestamps:true,
});

const branchDetails = ({
    name: {type: String, required: true},
    address: {type: String, required: true},
    IFSC: {type: String, required: true},
    MICR: {type: String, required: true},
},
{
    versionKey: false,
    timestamps:true, 
})

const MasterAccount = ({
    balance: {type: Number, required: true},
},
{
    versionKey: false,
    timestamps:true,
});

const SavingsAccount = ({
    account_number: {type: Number, required: true},
    balance: {type: Number, required: true},
    interestRate : {type: Number, required: true},
},
{
    versionKey: false,
    timestamps:true,
});

const FixedAccount = ({
    account_number: {type: Number, required: true},
    balance: {type: Number, required: true},
    interestRate : {type: Number, required: true},
    startDate: {type: Number, required: true},
    maturityDate : {type: Number, required: true}, 
},
{
    versionKey: false,
    timestamps:true,
});

const User = mongoose.model("bankData", connect);

const branchSchema = new mongoose.Schema("branchDetails", userSchema)

app.get("/users/:id", async(req, res)=>{
    try {
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user);

    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

app.patch("/users:id", async(req, res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        })
        .lean().exec();
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});



