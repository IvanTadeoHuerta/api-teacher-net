'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-user', [md_auth.ensureAdmin],UserController.registroUser);
api.put('/update-user/:id', [md_auth.ensureAdmin],UserController.updateUser);
api.put('/update-password/:id', [md_auth.ensureGral],UserController.updatePassword);
api.get('/get-user/:id', [md_auth.ensureGral],UserController.getUser);
api.get('/get-users', [md_auth.ensureAdmin],UserController.getUsers);
api.post('/login-user', UserController.loginUser);


module.exports = api;