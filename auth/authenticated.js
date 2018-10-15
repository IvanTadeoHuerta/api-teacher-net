'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_curso';

function ensureAdmin(req, res, next) {

    if (!req.headers.authorization) {
        res.status(403).send({ message: 'No tiene la cabecera de autenticación ' });
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt.decode(token, secret);
        if (payload.exp <= moment().unix()) {
            res.status(401).send({ message: 'El token ha expirado' });
        }

    } catch (ex) {
        res.status(403).send({ message: 'Token no valido' });
    }

    if (payload.perfil_nivel == 1) {
        req.session = payload;
        next();
    } else {
        res.status(403).send({ message: 'No tiene permiso para realizar esta accion' });

    }


}



module.exports = {
    ensureAdmin
}