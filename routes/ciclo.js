'use strict'

var express = require('express');
var CicloController = require('../controllers/ciclo');
var md_auth = require('../auth/authenticated');
var api = express.Router();

api.post('/registro-ciclo',  [md_auth.ensureAdmin] , CicloController.registroCiclo);
api.put('/update-ciclo/:id',  [md_auth.ensureAdmin] , CicloController.updateCiclo);
api.get('/get-ciclo/:id',  [md_auth.ensureAdmin] , CicloController.getCiclo);
api.get('/get-ciclos',  [md_auth.ensureAdmin] , CicloController.getCiclos);


module.exports = api;