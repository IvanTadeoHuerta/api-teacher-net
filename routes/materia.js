'use strict'

var express = require('express');
var MateriaController = require('../controllers/materia');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-materia', MateriaController.registroMateria);
api.put('/update-materia/:id', MateriaController.updateMateria);
api.get('/get-materia/:id', MateriaController.getMateria);
api.get('/get-materias', MateriaController.getMaterias);


module.exports = api;