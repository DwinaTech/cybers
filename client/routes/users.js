var express = require('express');
var router = express.Router();
require('../db/dbConnection')
const ContactInfo = require('../models/ContactInfo');
const mongoose = require('mongoose')
const ObjectId = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function (req, res, next) {
  ContactInfo.find({}, (err, user) => {
    res.render('contactInfo', {
      user
    })
  });
}); 

router.post('/', function (req, res, next) {
  ContactInfo.create(req.body, data => {
    res.redirect('/');
  })
});

module.exports = router;
