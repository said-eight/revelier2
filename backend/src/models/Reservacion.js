const { Schema, model } = require('mongoose');

const reservacionSchema = new Schema({
    nombre : String,
    apellidos : String,
    correo : String,
    clase : String,
    fecha : String

}, {
    timestamps: true
});


module.exports = model('Reservacion', reservacionSchema);
