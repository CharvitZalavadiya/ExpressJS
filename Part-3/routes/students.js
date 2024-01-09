var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var studentModel = require("../model/student-model");
const { response } = require("../app");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Students Route");
});

/* GET users listing for adding. */
router.post("/add", function (req, res, next) {
  let newStudent = new studentModel({
    studentId: req.body.studentId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    dob: req.body.dob,
    department: req.body.department,
  });

  newStudent.save();

  res.send("Students Route for add");
});

// Reading data
router.get("/list", function (req, res, next) {
  studentModel.find()
  res.send("Students Route for read");
});

// students/update
router.put('/update', function(req, res, next) {
    const department = req.query.department;
    studentModel.update({age: 19}, {department: department}, function(err, response){
    if(err)
    res.send (err);
    else
    res.send({status: 200, students: response});
});
});

module.exports = router;
