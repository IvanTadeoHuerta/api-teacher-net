'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificacionEstudianteSchema = Schema({
    fecha_publicacion: Date,
    asunto: String,
    descripcion: String,
    status: Number,
    imagen: String,
    estudiante: { type: Schema.ObjectId, ref: 'seguimiento'}
});

module.exports = mongoose.model('notificacion_estudiante', NotificacionEstudianteSchema);