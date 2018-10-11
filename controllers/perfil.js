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

            Perfil.find({ 'nombre': params.nombre }, function (err, records) {

                if (err) {
                    res.status(500).send({ message: 'Error al guardar perfil' });
                } else {
                    if (records.length == 0) {
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
                        res.status(400).send({ message: 'Ya existe un perfil con ese nombre' });
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

function updatePerfil(req, res) {
    var idPerfil = req.params.id;
    var update = req.body;


    if (update.nombre && update.descripcion) {

        Perfil.find({ 'nombre': update.nombre }, function (err, records) {
            if (err) {
                res.status(500).send({ message: 'Error al actualizar el perfil' });
            } else {
                Perfil.findByIdAndUpdate(idPerfil, update, (err, perfilUpdated) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al actualizar el perfil' });
                    } else {
                        if (!perfilUpdated) {
                            res.status(404).send({ message: 'No se pudo actualizar el perfil' });
                        } else {
                            res.status(200).send({ perfil: perfilUpdated });
                        }
                    }
                });
            }
        });

    } else {
        res.status(400).send({ message: 'Por favor verifique los datos capturados' });
    }

}

function getPerfil(req, res) {
    var perfilId = req.params.id;
    Perfil.findById(perfilId, (err, perfil) => {
        if (err) {
            res.status(500).send({ message: 'Error al consultar Perfil' });
        } else {
            if (!perfil) {
                res.status(404).send({ message: 'El perfil no existe' });
            } else {
                res.status(200).send({ perfil });
            }
        }
    });
}

function getPerfiles(req, res) {
    Perfil.find().sort('nombre').exec((err, perfiles) => {
        if (err) {
            res.status(500).send({ message: 'Error al consultar perfiles' });
        } else {
            if (!perfiles) {
                res.status(404).send({ message: 'No existen perfiles' });
            } else {
                res.status(200).send({ perfiles });
            }
        }
    });
}


module.exports = {
    registroPerfil,
    updatePerfil,
    getPerfil,
    getPerfiles
}