'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrupoSchema = Schema({
    grado: Number,
    grupo: String,
    descripcion: String,
    status: Number
});

module.exports = mongoose.model('grupo', GrupoSchema);