const express = require("express");
const app = express();

app.use(express.json());

const connect = require("./configs/db");

const sectionControllers = require("./controllers/section.controller");
const authorControllers = require("./controllers/author.controller");
const bookControllers = require("./controllers/book.controller");

app.use("/sections", sectionControllers);
app.use("/authors", authorControllers);
app.use("/books", bookControllers);

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err);
  }

});