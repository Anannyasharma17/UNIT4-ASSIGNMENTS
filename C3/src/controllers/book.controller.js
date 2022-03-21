const express = require("express");
const { body, validation } = require("express-validator");

const Book = require("../models/book.model");

const router = express.Router();

router.post(
  "/",
  body("likes")
    .not()
    .isEmpty(),
)
async(req,res)=>{

  const book = await Book.create(req.body)
  
  return res.status(200).send(book) }

module.exports = router;