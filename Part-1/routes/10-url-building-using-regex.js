const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("url building with regex")
})

router.get("/searchNumber/:key([0-9]{3})", (req, res) => {
    res.send(`you searched ${req.params.key}`)
})

router.get("/searchName/:key([a-zA-Z]{7})", (req, res) => {
    res.send(`you searched ${req.params.key}`)
})

module.exports = router