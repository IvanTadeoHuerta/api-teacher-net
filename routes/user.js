'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-user', [md_auth.ensureAdmin],UserController.registroUser);
api.post('/login-user', UserController.loginUser);


module.exports = api;