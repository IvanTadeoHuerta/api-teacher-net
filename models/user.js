'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    nombre: String,
    apellido_paterno: String,
    apellido_materno: String,
    fecha_nacimiento: Date,
    email: String,
    curp: String,
    telefono_contacto: String,
    municipio: String,
    colonia: String,
    calle: String,
    imagen: String,
    grado_academico: String,
    matricula: String,
    username: String,
    password: String,
    status: Number,
    perfil: { type: Schema.ObjectId, ref: 'perfil'},
    tutor: { type: Schema.ObjectId, ref: 'usuario', default: null }
});

module.exports = mongoose.model('usuario', UsuarioSchema);