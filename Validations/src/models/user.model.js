const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
        first_name: { type: String},
        last_name: { type: String},
        email: { type: String},
        pincode:{type:Number},
        gender: { type: String},
        age: { type: Number},
    },
    {
        versionKey: false,
        timestamps: true,
    });

    module.exports = mongoose.model("user",userSchema);