'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.get('/registro-user', UserController.registroUser);


module.exports = api;