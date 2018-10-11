'use strict'

var Perfil = require('../models/perfil');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../auth/jwt');
var fs = require('fs');
var path = require('path');

function registroPerfil(req, res) {
    var perfil = new Perfil();
    var params = req.body;

    perfil.nombre = params.nombre;
    perfil.descripcion = params.descripcion;
    perfil.status = 1;

    if (params.nombre && params.descripcion) {
        if ("" + params.nombre.trim() && "" + params.nombre.trim()) {
            perfil.save((err, perfilStored) => {
                if (err) {
                    res.status(500).send({ message: 'Error al guardar perfil' });
                } else {
                    if (!perfilStored) {
                        res.status(500).send({ message: 'No se ha registrado el perfil' });
                    } else {
                        res.status(200).send({ message: 'Exito', perfil: perfilStored });
                    }
                }
            });
        } else {
            res.status(400).send({ message: 'Los campos no pueden estar vacios' });
        }
    } else {
        res.status(400).send({ message: 'Por favor verifique los datos capturados' });
    }



}

module.exports = {
    registroPerfil
}