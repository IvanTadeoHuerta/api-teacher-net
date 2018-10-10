'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CursoSchema = Schema({
    descripcion: String,
    status: Number,
    profesor: { type: Schema.ObjectId, ref: 'profesor'},
    materia: { type: Schema.ObjectId, ref: 'materia'},
    grupo_ciclo: { type: Schema.ObjectId, ref: 'grupo_ciclo'},
});

module.exports = mongoose.model('curso', CursoSchema);