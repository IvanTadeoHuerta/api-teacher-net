'use strict'

var express = require('express');
var EstudianteController = require('../controllers/estudiante');
var api = express.Router();

api.get('/probando-controlador', EstudianteController.prueba);

module.exports = api;