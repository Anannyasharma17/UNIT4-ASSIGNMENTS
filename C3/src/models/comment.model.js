const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body: {type:String, required:true},
    timestamps: {type:String, required:true},

},
{
    versionKey: false,
});

module.exports = mongoose.model("comment", commentSchema)