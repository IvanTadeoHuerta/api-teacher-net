'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    username: String,
    password: String,
    role: String
});

module.exports = mongoose.model('usuario', UsuarioSchema);