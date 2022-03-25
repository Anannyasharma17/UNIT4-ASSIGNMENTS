const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      body: { type: String, required: true },
      authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: true,
      },
      sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true,
      }
    },
    {
      versionKey: false,
      timestamps: false,
    }
  );
  const Book = mongoose.model("book", bookSchema);

  module.exports = Book;