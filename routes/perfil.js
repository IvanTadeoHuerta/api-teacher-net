'use strict'

var express = require('express');
var PerfilController = require('../controllers/perfil');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-perfil', [md_auth.ensureAdmin] ,PerfilController.registroPerfil);
api.put('/update-perfil/:id',  [md_auth.ensureAdmin],PerfilController.updatePerfil);
api.get('/get-perfil/:id',  [md_auth.ensureAdmin], PerfilController.getPerfil);
api.get('/get-perfiles',  [md_auth.ensureAdmin], PerfilController.getPerfiles);


module.exports = api;