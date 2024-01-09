const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("dynamic urls")
})

router.get("/user-details/:id", (req, res) => {
    res.send(`user ${req.params.id}`)
})

router.get("/search/[0-9]", (req, res) => {
    res.send(`you searched for 0 to 9`)
})

router.get("/search-by-location/:state/:city", (req, res) => {
    res.send(`location of user is ${req.params.state} ${req.params.city}`)
})

module.exports = router