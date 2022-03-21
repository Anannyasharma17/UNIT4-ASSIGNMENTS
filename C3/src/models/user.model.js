const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:false, optional:true},
    age:{type:Number, required:true},
    email:{type:String, required:false, unique: true},
    profileImages: {type:String, required:true},
    timestamps: {type:String, required:true},

},
{
    versionKey: false,
});

module.exports = mongoose.model("user", userSchema)

