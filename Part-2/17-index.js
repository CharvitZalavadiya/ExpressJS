var express = require("express");
var users = require(" ./routes/users");
var app = express;
const { default: mongoose } = require("mongoose");

var moongose = require("mongoose"); // Step #1

// step #2 is to create properties file

var dbURL = require(" ./properties").DB_URL; // step #3

mongoose.connect(dbURL) // step #4

// Step #5
moongose. connection.on ("connected", ()=> {
    console.log("Connected to MongoDB using MongooseJS");
});

app.use("/users", users);
app.listen(4000);
