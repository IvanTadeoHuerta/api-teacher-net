'use strict'

var express = require('express');
var CicloController = require('../controllers/ciclo');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-ciclo', CicloController.registroCiclo);
api.put('/update-ciclo/:id', CicloController.updateCiclo);
api.get('/get-ciclo/:id', CicloController.getCiclo);
api.get('/get-ciclos', CicloController.getCiclos);


module.exports = api;