const express = require('express');
const app = express();
const cors = require('cors');


//settings
app.set('port', process.env.PORT || 4000);


//middlewares
app.use(cors());
app.use(express.json());

//routes
// app.use('/users',(req, res) => res.send('usuarios'));
app.use('/api/users', require('./routes/users'));
app.use('/api/clases', require('./routes/clases'));
app.use('/api/reservaciones', require('./routes/reservaciones'));



module.exports = app;