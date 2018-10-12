'use strict'

var Materia = require('../models/materia');
var jwt = require('../auth/jwt');
var fs = require('fs');


function registroMateria(req, res) {
    var materia = new Materia();
    var params = req.body;

    materia.nombre_materia = params.nombre_materia;
    materia.descripcion = params.descripcion;
    materia.status = 1;

    if (params.nombre_materia && params.descripcion) {
        if ("" + params.nombre_materia.trim() && "" + params.descripcion.trim()) {

            Materia.find({ 'nombre_materia': params.nombre_materia }, function (err, records) {

                if (err) {
                    res.status(500).send({ message: 'Error al guardar materia' });
                } else {
                    if (records.length == 0) {
                        materia.save((err, materiaStored) => {
                            if (err) {
                                res.status(500).send({ message: 'Error al guardar materia' });
                            } else {
                                if (!materiaStored) {
                                    res.status(500).send({ message: 'No se ha registrado el materia' });
                                } else {
                                    res.status(200).send({ message: 'Exito', materia: materiaStored });
                                }
                            }
                        });
                    } else {
                        res.status(400).send({ message: 'Ya existe una materia con ese nombre' });
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

function updateMateria(req, res) {
    var idMateria = req.params.id;
    var update = req.body;

    if (update.nombre_materia && update.descripcion) {
        Materia.find({ 'nombre_materia': update.nombre_materia }, function (err, records) {
            if (err) {
                res.status(500).send({ message: 'Error al actualizar el materia' });
            } else {
                if (records[0].id == idMateria) {
                    Materia.findByIdAndUpdate(idMateria, update, (err, materiaUpdated) => {
                        if (err) {
                            res.status(500).send({ message: 'Error al actualizar el materia' });
                        } else {
                            if (!materiaUpdated) {
                                res.status(404).send({ message: 'No se pudo actualizar el materia' });
                            } else {
                                res.status(200).send({ materia: materiaUpdated });
                            }
                        }
                    });
                } else {
                    res.status(400).send({ message: 'Ya existe una materia con el mismo nombre' });
                }
            }
        });
    } else {
        res.status(400).send({ message: 'Por favor verifique los datos capturados' });
    }


}

function getMateria(req, res) {
    var materiaId = req.params.id;
    Materia.findById(materiaId, (err, materia) => {
        if (err) {
            res.status(500).send({ message: 'Error al consultar la materia' });
        } else {
            if (!materia) {
                res.status(404).send({ message: 'La materia no esta registrada' });
            } else {
                res.status(200).send({ materia });
            }
        }
    });
}

function getMaterias(req, res) {
    Materia.find().sort('nombre_materia').exec((err, materias) => {
        if (err) {
            res.status(500).send({ message: 'Error al consultar materias' });
        } else {
            if (!materias) {
                res.status(404).send({ message: 'No existen materias' });                
            } else {
                res.status(200).send({ materias });
            }
        }
    });
}

module.exports = {
    registroMateria,
    updateMateria,
    getMateria,
    getMaterias
}