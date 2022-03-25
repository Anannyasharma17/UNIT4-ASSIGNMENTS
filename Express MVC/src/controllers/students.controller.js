const mongoose = require("mongoose");

const studentSchema = ({
    rollId: {type:String, require:true},
    currentBatch: {type:String, require:true},
},
{
    versionKey: false,
});

const Student = mongoose.model("student", studentSchema); // user => users

module.exports = Student; 