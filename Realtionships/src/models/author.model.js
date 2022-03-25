const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    first_name:{type:String,required: true},
    last_name:{type:String,required: false},
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

const Author = mongoose.model("authors", authorSchema); 

module.exports = Author;