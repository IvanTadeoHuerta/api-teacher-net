'use strict'

var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
// var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function registroUser(req, res) {
    var user = new User();
    var params = req.body;

    user.nombre = params.nombre;
    user.apellido_paterno = params.apellido_paterno;
    user.apellido_materno = params.apellido_materno;
    user.fecha_nacimiento = params.fecha_nacimiento;
    user.email = params.email;
    user.curp = params.curp;
    user.telefono_contacto = params.telefono_contacto;
    user.municipio = params.municipio;
    user.colonia = params.colonia;
    user.calle = params.calle;
    user.imagen = params.imagen;
    user.grado_academico = params.grado_academico;
    user.matricula = params.matricula;
    user.username = params.username;
    user.password = params.password;
    user.status = params.status;
    user.perfil = params.perfil;

}

module.exports = {
    registroUser
}