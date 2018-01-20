const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const {ObjectId} = require('mongoose')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
    {
      title: 'Cyber Group',
    });
});

/* Post feedback data page. */
router.post('/', function (req, res, next) {
  Feedback.create(req.body).then(data => {
    res.redirect('index');
  });
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
