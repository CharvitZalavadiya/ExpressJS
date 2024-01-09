// 06
// const express = require("express")
// const app = express()
// app.get("/", (req, res) => {
//     res.send("Hello world from ExpressJSb")
// })
// app.listen(2000)
// console.log("Server is running on port 2000")


// 07
// const express = require("express")
// const app = express()

// app.post("/create-user", (req, res) => {
//     res.send("user created")
// })

// app.put("/user-update", (req, res) => {
//     res.send("user updated")
// })

// app.get("/", (req, res) => {
//     res.send("Hello world from 07")
// })

// app.get("/obj", (req, res) => {
//     const obj ={
//         id: 1,
//         name: "CZ",
//         age: 19,
//         status: true
//     }
//     res.send(obj)
// })

// app.delete("/delete-user", (req, res) => {
//     res.send("user deleted")
// })

// app.listen(2000)
// console.log("Server is running on port 2000")


// 08, 09, 10, 11, 12
const express = require("express")
const products = require("./routes/08-router-products")
const users = require("./routes/08-router-users")
const usersDynamic = require("./routes/09-dynamic-routes")
const urlRegex = require("./routes/10-url-building-using-regex")
const wildCard = require("./routes/11-wild-card-routes")
const middleware = require("./routes/12-middleware")
const app = express()

app.use("/products", products)
app.use("/users", users)
app.use("/usersDynamic", usersDynamic)
app.use("/urlRegex", urlRegex)
app.use("/wildCard", wildCard)
app.use("/middleware", middleware)

app.get("/", (req, res) => {
    res.send("Hello world from 08")
})
app.listen(2001)
console.log("Server is running on port 2001")