'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificacionGralSchema = Schema({
    fecha_publicacion: Date,
    asunto: String,
    descripcion: String,
    status: Number,
    imagen: String,
    curso: { type: Schema.ObjectId, ref: 'curso'},
});

module.exports = mongoose.model('notificacion_general', NotificacionGralSchema);