'use strict'

var express = require('express');
var MateriaController = require('../controllers/materia');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-materia', [md_auth.ensureAdmin], MateriaController.registroMateria);
api.put('/update-materia/:id', [md_auth.ensureAdmin], MateriaController.updateMateria);
api.get('/get-materia/:id', [md_auth.ensureAdmin], MateriaController.getMateria);
api.get('/get-materias', [md_auth.ensureAdmin], MateriaController.getMaterias);


module.exports = api;