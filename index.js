require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')


const routes = require('./src/routes/routes');
const PORT = process.env.PORT;
const connect_db = require('./src/dataBase/data_base.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connect_db()
app.use(routes);

app.listen( PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});