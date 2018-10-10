'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeguimientoSchema = Schema({
    eval1: Number,
    eval2: Number,
    eval3: Number,
    eval4: Number,
    eval5: Number,
    eval6: Number,
    promedio: Number,
    comentarios: String,
    status: Number,
    estudiante: { type: Schema.ObjectId, ref: 'estudiante'},
    curso: { type: Schema.ObjectId, ref: 'curso'}
});

module.exports = mongoose.model('seguimiento', SeguimientoSchema);