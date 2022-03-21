const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    likes: {type:Number},
    content: {type:String, required:false},
    coverImage: {type:String, required:true},
    timestamps: {type:String, required:true},

},
{
    versionKey: false,
});

module.exports = mongoose.model("book", bookSchema)