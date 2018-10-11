'use strict'

var express = require('express');
var GrupoController = require('../controllers/grupo');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-grupo', GrupoController.registroGrupo);
api.put('/update-grupo/:id', GrupoController.updateGrupo);
api.get('/get-grupo/:id', GrupoController.getGrupo);
api.get('/get-grupos', GrupoController.getGrupos);


module.exports = api;