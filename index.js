require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser')


const routes = require('./src/routes/routes');
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen( PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});