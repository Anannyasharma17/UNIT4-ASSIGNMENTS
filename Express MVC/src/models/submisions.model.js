const mongoose = require("mongoose");

const submisionSchema = new mongoose.Schema(
    {
      evaluation_id: { type:mongoose.Schema.Types.ObjectId,ref:"evaluation", required: true  },
      student_id: { type:mongoose.Schema.Types.ObjectId,ref:"student", required: true  },
      marks: { type: Number, required: true },      
    },
    {
      versionKey: false,
      timestamps: true,
    }
);

module.exports = mongoose.model("submision",submisionSchema);