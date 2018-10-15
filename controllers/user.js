'use strict'

var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../auth/jwt');
var fs = require('fs');
var path = require('path');

function registroUser(req, res) {
    
    var user = new User();
    var params = req.body;

    user.nombre = params.nombre; // Requerido
    user.apellido_paterno = params.apellido_paterno; // Requerido
    user.apellido_materno = params.apellido_materno;
    user.fecha_nacimiento = params.fecha_nacimiento; // Requerido
    user.email = params.email;
    user.curp = params.curp; // Requerido
    user.telefono_contacto = params.telefono_contacto;
    user.municipio = params.municipio; // Requerido
    user.colonia = params.colonia; // Requerido
    user.calle = params.calle; // Requerido
    user.imagen = params.imagen;
    user.grado_academico = params.grado_academico;
    user.matricula = params.matricula;
    user.username = params.username; // Requerido
    user.password = params.password; // Requerido
    user.status = 1;
    user.perfil = params.perfil; // Requerido
    user.tutor = params.tutor;

    if (params.nombre && params.apellido_paterno && params.fecha_nacimiento && params.curp && params.municipio &&
        params.colonia && params.calle && params.username && params.password && params.perfil) {

        if ("" + params.nombre.trim() && "" + params.apellido_paterno.trim() && "" + params.fecha_nacimiento.trim() && "" + params.curp.trim() && "" + params.municipio.trim() &&
            "" + params.colonia.trim() && "" + params.calle.trim() && "" + params.username && "" + params.password.trim() && "" + params.perfil.trim()) {

            User.find({ 'curp': params.curp.trim() }, function (err, records) {

                if (err) {

                    res.status(500).send({ message: 'Error al registrar usuario' });

                } else {
                    if (records.length == 0) {

                        User.find({ 'username': params.username.trim() }, function (err, records) {
                            let userok = false;
                            let mensaje = '';
                            if (records.length == 0) {
                                // Validar si es estudiante
                                if (params.perfil == '5bbf9798d9a8332c086bfaa3') {
                                    if (params.matricula && params.matricula != undefined) {
                                        userok = true;
                                    } else {
                                        mensaje = 'Se requiere matricula del alumno';
                                    }
                                    // Validar si es profesor                                
                                } else if (params.perfil == '5bbf97ddd9a8332c086bfaa4') {
                                    if (params.grado_academico && params.grado_academico != undefined) {
                                        userok = true;
                                    } else {
                                        mensaje = 'Se requiere grado academico del profesor';
                                    }
                                    // Validar si es tutor
                                } else if (params.perfil == '5bbf9828d9a8332c086bfaa5') {
                                    if (params.telefono_contacto && params.telefono_contacto != undefined) {
                                        userok = true;
                                    } else {
                                        mensaje = 'Se requiere telefono de contacto del tutor';
                                    }
                                    // Validar si es admin del sistema
                                } else if (params.perfil == '5bc0d71cc9248423248f3e6b') {
                                    userok = true;
                                } else {
                                    mensaje = 'Verifique que el perfil seleccionado es valido';
                                }

                                // Si estan correctos todos los campos inserta
                                if (userok) {

                                    bcrypt.hash(params.password, null, null, function (err, hash) {

                                        if (err) {
                                            res.status(500).send({ message: 'Error al registrar usuario' });
                                        } else {
                                            user.password = hash;
                                            user.save((err, usuarioStored) => {
                                                if (err) {
                                                    res.status(500).send({ message: 'Error al registrar usuario' });
                                                } else {
                                                    if (!usuarioStored) {
                                                        res.status(500).send({ message: 'No se ha registrado usuario' });
                                                    } else {
                                                        res.status(200).send({ usuario: usuarioStored });

                                                    }
                                                }
                                            });
                                        }
                                    });

                                } else {
                                    // Existe error envia mensaje
                                    res.status(400).send({ message: mensaje });
                                }

                            } else {
                                res.status(400).send({ message: 'El nombre de usuario ya esta en uso. Utilice otro' });
                            }

                        });

                    } else {
                        res.status(400).send({ message: 'La curp ya ha sido registrada' });
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

function loginUser(req, res) {
    var params = req.body;
    var username = params.username;
    var password = params.password;

    User.findOne({ username: username, status: 1 }).populate('perfil').exec((err, user) => {
        if (err) {
            res.status(500).send({ message: 'Ocurrio un error en el servidor' });
        } else {
            if (!user) {
                res.status(500).send({ message: 'Usuario no registrado' });
            } else {
                bcrypt.compare(password, user.password, function (err, check) {
                    if (check) {
                        res.status(200).send({token: jwt.createToken(user), user});
                    } else {
                        res.status(404).send({ message: 'El usuario no ha podido loguearse' });
                    }
                });
            }
        }
    });
}

module.exports = {
    registroUser,
    loginUser
}