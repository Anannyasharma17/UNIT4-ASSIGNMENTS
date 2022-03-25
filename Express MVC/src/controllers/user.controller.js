const mongoose = require("mongoose");

const userSchema = ({
    firstName: {type:String, require:true},
    lastName: {type:String, require:true},
    gender: {type:String, require:true},
    dateOfBirth: {type:String, require:true},
    type: {type:String, require:true}
},
{
    versionKey: false,
});

const User = mongoose.model("user", userSchema); // user => users

module.exports = User; 
