'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CicloSchema = Schema({
    fecha_inicio: Date,
    fecha_fin: Date,
    descripcion: String,
    status: Number
});

module.exports = mongoose.model('ciclo', CicloSchema);