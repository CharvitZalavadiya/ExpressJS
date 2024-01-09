var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CZ', subTitle: "Sub title for the .jade file" });
});

router.get('/tutorial', function(req, res, next) {
  const course = req.query.course
  res.render("index", { title: `${course} Dev`, subTitle: `${course}` });
});

router.get('/react', function(req, res, next) {
  res.render('index', { title: 'React Dev', subTitle: "React learner" });
});

module.exports = router;
