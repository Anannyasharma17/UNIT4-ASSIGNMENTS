const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
      roll_number: { type: Number, required: true },
      batch_id: { type:mongoose.Schema.Types.ObjectId,ref:"batch", required: true },   
      user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},  
    },
    {
      versionKey: false,
      timestamps: true,
    }
);

module.exports = mongoose.model("student",studentSchema);