'use strict'

var express = require('express');
var PerfilController = require('../controllers/perfil');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-perfil', PerfilController.registroPerfil);


module.exports = api;