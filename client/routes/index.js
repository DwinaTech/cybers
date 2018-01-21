const express = require('express');
const router = express.Router();
require('../db/dbConnection')
const Feedback = require('../models/Feedback');
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectID;


/* GET home page. */
router.get('/', function (req, res, next) {
  Feedback.find({}, (err, feedbackData) => {
    res.render('index', {
      feedbackData
    })
  });
});  

/* Post feedback data page. */
router.post('/', function (req, res, next) {
  Feedback.create(req.body).then(data => {
    res.redirect('/');
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
