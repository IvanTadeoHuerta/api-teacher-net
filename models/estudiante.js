'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstudianteSchema = Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    imagen: String
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);