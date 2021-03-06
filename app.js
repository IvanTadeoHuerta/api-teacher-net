'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var user_routers =  require('./routes/user');
var perfil_routers =  require('./routes/perfil');
var ciclo_routers =  require('./routes/ciclo');
var grupo_routers =  require('./routes/grupo');
var materia_routers =  require('./routes/materia');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// configurar cabeceras http
app.use((req,res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
});

// rutas base
app.use('/api-teacher-net', user_routers);
app.use('/api-teacher-net', perfil_routers);
app.use('/api-teacher-net', ciclo_routers);
app.use('/api-teacher-net', grupo_routers);
app.use('/api-teacher-net', materia_routers);





module.exports = app;