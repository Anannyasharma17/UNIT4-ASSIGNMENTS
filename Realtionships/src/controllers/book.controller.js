const express = require("express");
const app = express();

const Book = require("../models/book.model");

app.get("/", async (req, res) => {
    try {
      const book = await Book.find().populate("authorId").populate("sectionId")
      .lean().exec();
  
      return res.status(200).send({ book: book }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  
  app.post("/", async (req, res) => {
    try {
      const book = await Book.create(req.body);
  
      return res.status(201).send(book);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });