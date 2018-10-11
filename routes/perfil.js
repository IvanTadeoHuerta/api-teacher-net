'use strict'

var express = require('express');
var PerfilController = require('../controllers/perfil');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-perfil', PerfilController.registroPerfil);
api.put('/update-perfil/:id', PerfilController.updatePerfil);
api.get('/get-perfil/:id', PerfilController.getPerfil);
api.get('/get-perfiles', PerfilController.getPerfiles);


module.exports = api;