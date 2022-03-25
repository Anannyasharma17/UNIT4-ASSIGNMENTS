const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
      "mongodb+srv://anannya:anannya123@cluster0.fnzu0.mongodb.net/unit4?retryWrites=true&w=majority"
    );
  };

  module.exports = connect;