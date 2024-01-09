const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Get request for users")
})

router.get("/user-details", (req, res) => {
    res.send(`details of users`)
})


// crud
router.post("/create-user", (req, res) => {
    res.send("user created")
})

router.put("/user-update", (req, res) => {
    res.send("user updated")
})

router.get("/hello", (req, res) => {
    res.send("Hello world from 07")
})

router.get("/obj", (req, res) => {
    const obj ={
        id: 1,
        name: "CZ",
        age: 19,
        status: true
    }
    res.send(obj)
})

router.delete("/delete-user", (req, res) => {
    res.send("user deleted")
})

module.exports = router