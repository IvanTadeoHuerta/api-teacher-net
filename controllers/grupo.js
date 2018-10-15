'use strict'

var Grupo = require('../models/grupo');
var jwt = require('../auth/jwt');
var fs = require('fs');

function registroGrupo(req, res) {
    var grupo = new Grupo();
    var params = req.body;

    grupo.grado = params.grado;
    grupo.grupo = params.grupo;
    grupo.descripcion = params.descripcion;
    grupo.status = 1;

    if (params.grado && params.grupo) {
        if ("" + params.grado.trim() && "" + params.grupo.trim()) {

            Grupo.find({ 'grado': params.grado, 'grupo': params.grupo }, function (err, records) {

                if (err) {
                    res.status(500).send({ message: 'Error al crear nuevo grupo' });
                } else {
                    if (records.length == 0) {
                        grupo.save((err, grupoStored) => {
                            if (err) {
                                res.status(500).send({ message: 'Error al crear nuevo grupo' });
                            } else {
                                if (!grupoStored) {
                                    res.status(500).send({ message: 'No se ha registrado el grupo' });
                                } else {
                                    res.status(200).send({ message: 'Exito', grupo: grupoStored });
                                }
                            }
                        });
                    } else {
                        res.status(400).send({ message: 'Ya existe un salón con esos datos' });
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

function updateGrupo(req, res) {
    var idGrupo = req.params.id;
    var update = req.body;

    if (update.grado && update.grupo) {

        Grupo.find({ 'grado': update.grado, 'grupo': update.grupo }, function (err, records) {
            if (err) {
                res.status(500).send({ message: 'Error al actualizar el grupo' });
            } else {
                if (records[0].id == idGrupo) {
                
                    Grupo.findByIdAndUpdate(idGrupo, update, (err, grupoUpdated) => {
                        if (err) {
                            res.status(500).send({ message: 'Error al actualizar el grupo' });
                        } else   {
                            if (!grupoUpdated) {
                                res.status(404).send({ message: 'No se pudo actualizar el grupo' });
                            } else {
                                res.status(200).send({ grupo: grupoUpdated });
                            }
                        }
                    });

                } else {
                    res.status(400).send({ message: 'Ya existe un registro con los mismos datos' });    
                }

            }
        });

    } else {
        res.status(400).send({ message: 'Por favor verifique los datos capturados' });
    }

}

function getGrupo(req, res) {
    var grupoId = req.params.id;
    Grupo.findById(grupoId, (err, grupo) => {
        if (err) {
            res.status(500).send({ message: 'Error al consultar el grupo' });
        } else {
            if (!grupo) {
                res.status(404).send({ message: 'El grupo no esta registrado' });
            } else {
                res.status(200).send({ grupo });
            }
        }
    });
}


function getGrupos(req, res) { 
    Grupo.find().sort('grado').exec((err, grupos) => {
        if (err) {
            res.status(500).send({ message: 'Error al consultar grupos' });
        } else {
            if (!grupos) {
                res.status(404).send({ message: 'No existen grupos' });
            } else {
                res.status(200).send({ grupos });
            }
        }
    });
}

module.exports = {
    registroGrupo,
    updateGrupo,
    getGrupo,
    getGrupos
}