'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;
mongoose.connect('mongodb://userdbteachernet:t3AcH3Rn37.2018db@localhost:27017/teachernet', { useNewUrlParser: true },(err,res)=>{
    if(err){
        throw err;
    }else{
        // console.log('La conexion a la base de datos esta funcionando');
        app.listen(port, function(){
            console.log("Servidor escuchando http:localhost:"+port)
        })
    }
})