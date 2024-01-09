const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("wild card");
});

router.get("/searchNumberWild/:key([0-9]{3})", (req, res) => {
  res.send(`you searched ${req.params.key}`);
});

router.get("/searchNameWild/:key([a-zA-Z]{7})", (req, res) => {
  res.send(`you searched ${req.params.key}`);
});

router.get("*", (req, res) => {
  const wildObj = {
    statusCode: 404,
    statusMsg: "wrong url",
  };
  res.send(wildObj);
});

module.exports = router;
