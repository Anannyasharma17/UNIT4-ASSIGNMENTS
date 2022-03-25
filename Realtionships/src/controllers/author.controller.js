const express = require("express");
const app = express();

const Author = require("../models/author.model");


app.get("/", async (req, res) => {
    try {
      const author = await Author.find().populate("bookId").lean().exec();
  
      return res.status(200).send({ author: author }); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong, try again later" });
    }
  });
  
  app.post("/", async (req, res) => {
    try {
      const author = await Author.create(req.body);
  
      return res.status(200).send(author);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  app.get("/:id", async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).lean().exec();
      return res.status(200).send(author); // []
    } catch (err) {
      return res
        .status(500)
        .send({ message: "Something went wrong .. try again later" });
    }
  });
  

  module.exports = app;