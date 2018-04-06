var mongoose = require('mongoose');
var unique = require('mongoose-unique-validator');

var ProveedorSchema = new mongoose.Schema({
    nombre: String,         //ponemos String porque es un tipado y la primera letra en mayusculas por ser mongoose
    cif: {type: String, unique: true},   //hacemos que no haya un cif repetido
    domocilio: String,
    cp: Number,
    localidad: String,
    provincia: String,
    telefono: String,
    email: String,
    contacto: String
})

ProveedorSchema.plugin(unique, {message: 'El cif introducido ya existe'});

module.exports = mongoose.model('Proveedor', ProveedorSchema);   //lo exporta