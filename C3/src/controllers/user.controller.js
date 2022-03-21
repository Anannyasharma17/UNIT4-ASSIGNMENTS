const express = require("express");
const { body, validation } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();

router.post(
  "/",
  body("firstName")
    .not()
    .isEmpty()
    .withMessage("Name required")
    .isLength({ min: 3, max: 30 })
    .withMessage("Name should be more than 3 alphabets"),

  body("lastName")
    .isLength({ min: 3, max: 30 })
    .isOptional()
    .withMessage("Last name should be more than 3 alphabets"),

  body("age")
    .not()
    .isEmpty()
    .withMessage("Age required")
    .isNumeric()
    .isLength({ min: 1, max: 150 })
    .withMessage("Age is not valid for this"),

    body("email")
    .not()
    .isEmpty()
    .withMessage("Email required").isUnique(),
);

async(req,res)=>{

  const user = await User.create(req.body)
  
  return res.status(200).send(user) }

module.exports = router;
