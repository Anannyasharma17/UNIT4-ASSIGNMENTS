const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
    {
      DateOf_evaluation: { type: Date, required: true },
      instructor_id: { type:mongoose.Schema.Types.ObjectId,ref:"instructor", required: true },
      batch_id: { type:mongoose.Schema.Types.ObjectId,ref:"batch", required: true },      
    },
    {
      versionKey: false,
      timestamps: true,
    }
);

module.exports = mongoose.model("evaluation",evaluationSchema);