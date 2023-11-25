const express = require("express");
const router = express.Router();

const messages = [];

router.get("/", function (req, res, next) {
  res.render("index", { messages: messages });
});
router.get("/new", (req, res, next) => {
  res.render("form");
});
router.post("/new", (req, res, next) => {
  messages.push({
    author: req.body.author,
    message: req.body.message,
    dateSent: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
