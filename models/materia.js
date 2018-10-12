'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MateriaSchema = Schema({
    nombre_materia: String,
    descripcion: String,
    status: Number
});

module.exports = mongoose.model('materia', MateriaSchema);