'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfesorSchema = Schema({
    nombre: String,
    apellido_paterno: String,
    apellido_materno: String,
    email: String,
    telefono_contacto: String,
    curp: String,
    grado_academico: String,
    status: Number
});

module.exports = mongoose.model('profesor', ProfesorSchema);