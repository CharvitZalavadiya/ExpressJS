const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Get request for products")
})

module.exports = router