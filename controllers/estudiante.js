'use strict'

// var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
// var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function prueba(req, res) {
    res.status(200).send({
        message: 'Probando una acción del controlador de estudiante del api rest con Node y Mongo'
    });
}

module.exports = {
    prueba
}