'use strict'

var Ciclo = require('../models/ciclo');
var jwt = require('../auth/jwt');
var fs = require('fs');

function registroCiclo(req, res) {
    var ciclo = new Ciclo();
    var params = req.body;

    ciclo.fecha_inicio = params.fecha_inicio;
    ciclo.fecha_fin = params.fecha_fin;
    ciclo.descripcion = params.descripcion;
    ciclo.image = null;
    ciclo.status = 1;

    if (params.fecha_inicio && params.fecha_fin) {
        if ("" + params.fecha_fin.trim() && "" + params.fecha_fin.trim()) {

            let fecha_inicio = (new Date(params.fecha_inicio).getTime() / 1000);
            let fecha_fin = (new Date(params.fecha_fin).getTime() / 1000);

            if (fecha_inicio <= fecha_fin) {

                ciclo.save((err, cicloStored) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al guardar ciclo' });
                    } else {
                        if (!cicloStored) {
                            res.status(500).send({ message: 'No se ha registrado el ciclo' });
                        } else {
                            res.status(200).send({ message: 'Exito', ciclo: cicloStored });
                        }
                    }
                });

            } else {
                res.status(400).send({ message: 'La fecha de apertura es mayor a la fecha de clausura' });
            }

        } else {
            res.status(400).send({ message: 'Los campos no pueden estar vacios' });
        }
    } else {
        res.status(400).send({ message: 'Por favor verifique los datos capturados' });
    }
}

function updateCiclo(req, res) {
    var idCiclo = req.params.id;
    var update = req.body;

    if (update.fecha_inicio && update.fecha_fin) {
        if ("" + update.fecha_fin.trim() && "" + update.fecha_fin.trim()) {
            let fecha_inicio = (new Date(update.fecha_inicio).getTime() / 1000);
            let fecha_fin = (new Date(update.fecha_fin).getTime() / 1000);

            if (fecha_inicio <= fecha_fin) {
                Ciclo.findByIdAndUpdate(idCiclo, update, (err, cicloUpdate) => {
                    if (err) {
                        res.status(500).send({ message: 'Error al actualizar el ciclo escolar' });
                    } else {
                        if (!cicloUpdate) {
                            res.status(404).send({ message: 'No se pudo actualizar el ciclo escolar' });
                        } else {
                            res.status(200).send({ ciclo: cicloUpdate });
                        }
                    }
                });
            } else {
                res.status(400).send({ message: 'La fecha de apertura es mayor a la fecha de clausura' });
            }
        } else {
            res.status(400).send({ message: 'Los campos no pueden estar vacios' });
        }
    } else {
        res.status(400).send({ message: 'Por favor verifique los datos capturados' });
    }
}

function getCiclo(req, res) {
    var cicloId = req.params.id;
    Ciclo.findById(cicloId, (err, ciclo) => {
        if (err) {
            res.status(500).send({ message: 'Error al consultar Ciclo escolar' });
        } else {
            if (!ciclo) {
                res.status(404).send({ message: 'El ciclo escolar no existe' });
            } else {
                res.status(200).send({ ciclo });
            }
        }
    });
}

function getCiclos(req, res) {
    Ciclo.find().sort('fecha_inicio').exec((err, ciclos) => {
        if (err) {
            res.status(500).send({ message: 'Error al consultar ciclos escolares' });
        } else {
            if (!ciclos) {
                res.status(404).send({ message: 'No existen ciclos escolares' });
            } else {
                res.status(200).send({ ciclos });
            }
        }
    });
}

module.exports = {
    registroCiclo,
    updateCiclo,
    getCiclo,
    getCiclos
}