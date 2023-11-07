const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./db/config');
const cors = require('cors');
// crear servidor
const app = express();
//Base de datos
dbConnection();

//CORS
app.use(cors());

//directorio publico html
app.use( express.static('public') );
// Lectura y parseo del body
app.use( express.json());
//escuchar peticiones
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT} `);
});
