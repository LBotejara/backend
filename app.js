var express = require ('express');
var bodyParser = require ('body-parser');

var proveedor = require('./routes/proveedor.js');    //funciona con y sin extensión

var app = express();

var mongoose = require ('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/erp',{promiseLibrary: require('bluebird')})       //conectarse a esta url y si no es capaz, pinta el error con catch
            .then(()=>{
                console.log('Conectado a la DB')
            })
            .catch((err)=>{
                console.error(err);   //.catch para cuando funciona mal
            })

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({'extended': false}));

app.use('/proveedor', proveedor);

app.listen(3000, function(){
    console.log('Servidor Ok en puerto 3000');
})