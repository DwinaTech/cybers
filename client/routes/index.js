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
router.get('/admin', function (req, res, next) {
  Feedback.find({}, (err, feedbackData) => {
    res.render('mangeFeedback', {
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
  res.render('galary', { title: "Cyber Canteen's galary" });
});

/* GET Contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', {title: "Cyber Group's contact" });
});

/* GET About us page. */
router.get('/about-us', function (req, res, next) {
  res.render('about-us', { title: "Cyber Group's about us page" });
});

/* Delete page. */
router.get('/delete/:feedbackId', function (req, res, next) {
  const {feedbackId} = req.params;
  Feedback.findByIdAndRemove(feedbackId, (err) => {
    if (err) {
      res.json(err.message)
    } else {
      res.redirect('/');
    }
  })
});

/* Update page. */
/* GET Galary page. */
router.get('/edit/:feedbackId', function (req, res, next) {
  const {feedbackId} = req.params;
  Feedback.findById(feedbackId).exec((err, feedbackData) => {
    res.render('editFeedback', {
      feedbackData
    });
  })
});

router.post('/edit/:feedbackId', function (req, res, next) {
  const { feedbackId } = req.params;
  Feedback.findByIdAndUpdate(feedbackId,req.body).then(data => {
    res.redirect('/');
  });
});

module.exports = router;
