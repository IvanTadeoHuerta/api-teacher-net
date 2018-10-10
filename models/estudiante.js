'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstudianteSchema = Schema({
    nombre: String,
    apellido_paterno: String,
    apellido_materno: String,
    fecha_nacimiento: Date,
    email: String,
    curp: String,
    municipio: String,
    colonia: String,
    calle: String,
    imagen: String,
    status: Number,
    tutor: { type: Schema.ObjectId, ref: 'tutor'}
});

module.exports = mongoose.model('estudiante', EstudianteSchema);