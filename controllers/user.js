'use strict'

var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
// var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function registroUser(req, res) {
    var user = new User();
    var params = req.body;

}

module.exports = {
    registroUser
}