const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema(
    {
      batch_name: { type: String, required: true },   
    },
    {
      versionKey: false,
      timestamps: true,
    }
);

module.exports = mongoose.model("batch",batchSchema);