'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrupoCicloSchema = Schema({
    descripcion: String,
    status: Number,
    grupo: { type: Schema.ObjectId, ref: 'grupo'},
    ciclo: { type: Schema.ObjectId, ref: 'ciclo'}
});

module.exports = mongoose.model('grupo_ciclo', GrupoCicloSchema);