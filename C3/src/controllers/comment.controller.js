const express = require("express");
const { body, validation } = require("express-validator");

const Comment = require("../models/comment.model");

const router = express.Router();

router.post(
  "/",
  body("name")
    .not()
    .isEmpty(),
);

async(req,res)=>{

  const comment = await Comment.create(req.body)
  
  return res.status(200).send(comment) }

module.exports = router;