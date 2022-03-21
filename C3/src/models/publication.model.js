const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
    name: {type:String, required:true},
    timestamps: {type:String, required:true},

},
{
    versionKey: false,
});

module.exports = mongoose.model("publication", publicationSchema)