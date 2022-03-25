const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema(
    {
      sectionName: { type: String, required: true },
      bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: false,
      }
    },
    {
      versionKey: false,
      timestamps: false,
    }
  );
  const Section = mongoose.model("section", sectionSchema);

  module.exports = Section;