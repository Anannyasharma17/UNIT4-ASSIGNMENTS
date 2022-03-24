const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

const router = express.Router();

router.post("/",
body("first_name")
.not()
.isEmpty()
.withMessage("First Name cannot be empty")
.isLength({min:3,max:15})
.withMessage("Name should be greater than 3 letter and less than 5")
,
body("last_name")
.not()
.isEmpty()
.withMessage("last Name cannot be empty")
,
body("email")
.not()
.isEmpty()
.withMessage("email cannot be empty")
.isEmail()
.custom(async(value)=>{
     const user = await User.findOne({ email: value });

    if(user){
        throw new Error("Email is already taken");
    }
    return true
})
,
body("pincode")
.not()
.isEmpty()
.withMessage("pincode cannot be empty")
.isLength({min:6,max:6})
.withMessage("pin shoulb be 6 number")
,
body("age")
.not()
.isEmpty()
.withMessage("age cannot be empty")
.custom(async(value)=>{
    if(value<1 || value>100){
        throw new Error("age shoulb be btw 1 to 100");
    }
     return true;
})
,
body("gender")
.not()
.isEmpty()
.withMessage("gender cannot be empty")
.custom(async(value)=>{
    if(value !== "male" && value !== "female" && value !== "other"){
        throw new Error("gender can be only male female or other");
    }
     return true;
})
,
async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log({ errors });
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }

      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);


router.get("/", async (req, res) => {
    try {
      const user = await User.find(req.body);
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports = router;