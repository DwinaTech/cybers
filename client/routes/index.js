var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cyber Group' });
});

/* GET Galary page. */
router.get('/galary', function (req, res, next) {
  res.render('galary', { title: "Cyber Group's galary" });
});

/* GET Contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', {title: "Cyber Group's contact" });
});

/* GET About us page. */
router.get('/about-us', function (req, res, next) {
  res.render('about-us', { title: "Cyber Group's about us page" });
});

module.exports = router;
