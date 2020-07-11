const { Schema, model } = require('mongoose');

const claseSchema = new Schema({

    claseyhorario :{
        type: String
    }
}, {
    timestamps: true
});


module.exports = model('Clase', claseSchema);

