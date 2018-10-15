'use strict'

var express = require('express');
var GrupoController = require('../controllers/grupo');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-grupo',  [md_auth.ensureAdmin] , GrupoController.registroGrupo);
api.put('/update-grupo/:id',  [md_auth.ensureAdmin] , GrupoController.updateGrupo);
api.get('/get-grupo/:id',  [md_auth.ensureAdmin] , GrupoController.getGrupo);
api.get('/get-grupos',  [md_auth.ensureAdmin] , GrupoController.getGrupos);


module.exports = api;