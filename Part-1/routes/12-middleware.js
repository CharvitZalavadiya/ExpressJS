const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
  console.log(`middleware api call received`);
  next();
});

router.get("/", function (req, res, next) {
  res.send("data sent");
  console.log(`data sent`)
  next();
});

router.use("/", (req, res) => {
  console.log(`middleware api call ended`);
});

module.exports = router;