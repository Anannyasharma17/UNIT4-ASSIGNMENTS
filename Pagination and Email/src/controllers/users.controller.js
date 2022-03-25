const express = require("express");

const transporter = require("../configs/mail");

const User = require("../models/users.model");

const router = express.Router();


// pagination-------------------------

router.get("/", async (req, res) => {
    try {
      const page = req.query.page || 1;
      const pagesize = req.query.pagesize || 2; 
      const skip = (page - 1) * pagesize; 

      const users = await User.find().skip(skip).limit(pagesize).lean().exec() ;
  
      const totalPages = Math.ceil((await User.find().countDocuments())/skip);
  
      return res.status(200).send({ users, totalPages });

    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  router.post("/", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      transporter.sendMail({
        from: '"Amazon admin" <admin@amazon.com>',
        to: user.email,
        subject: "Welcome to ABC system " + user.first_name+" "+user.last_name,
        text: "Hii "+user.first_name+" Please confirm your email address",
      });

      transporter.sendMail({
        to: ["admin1@a.com","admin2@b.com","admin3@c.com","admin4@d.com","admin1zzzzzz@a.com"],
        from: '"Amazon admin" <admin@amazon.com>',
        subject: user.first_name+" "+user.last_name+" "+"has registered with us",
        text: "Please welcome"+" "+user.first_name+" "+user.last_name,
      });
  
      return res.status(201).send({ message: "user register successfully" });
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

module.exports = router;