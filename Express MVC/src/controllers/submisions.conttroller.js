const express = require("express");
const Submision = require("../models/submisions.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const submision = await Submision.create(req.body);
    return res.status(200).send(submision);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const submisions = await Submision.find().sort({marks : -1}).limit(1).lean().exec();
    return res.status(200).send(submisions);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});




router.get("/:evaluation_id", async (req, res) => {
  try {
    const submisions = await Submision.find({evaluation_id:req.params.evaluation_id})
      .lean()
      .exec();
    return res.status(200).send(submisions);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});


module.exports = router;