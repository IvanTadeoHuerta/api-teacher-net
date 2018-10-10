'use strict'

var express = require('express');
var EstudianteController = require('../controllers/estudiante');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.get('/probando-controlador', md_auth.ensureAuth, EstudianteController.prueba);


module.exports = api;