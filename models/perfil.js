'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PerfilSchema = Schema({
    nombre: String,
    descripcion: String,
    nivel: Number,
    status: Number
});

module.exports = mongoose.model('perfil', PerfilSchema);