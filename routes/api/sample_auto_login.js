"use strict";

var config = require('config');
const db = require('../../models/db');

var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var data = req.body;
    if (!data.email || !data.password) {
      res.status(400).json({});
      return;
    }
});


module.exports = router;
