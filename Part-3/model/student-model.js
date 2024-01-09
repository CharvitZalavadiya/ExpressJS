const mongoose = require("mongoose");

var studentSchema = mongoose.Schema({
  studentId: Number,
  firstName: String,
  lastName: String,
  age: Number,
  dob: String,
  department: String,
});

var studentModel = mongoose.model("Student", studentSchema);

module.exports = studentModel;