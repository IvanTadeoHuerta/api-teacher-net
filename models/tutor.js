'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TutorSchema = Schema({
    nombre: String,
    apellido_paterno: String,
    apellido_materno: String,
    email: String,
    telefono_contacto: String,
    telefono_contacto_2: String,
    detalle_tutor: String,
    status: Number
});

module.exports = mongoose.model('tutor', TutorSchema);