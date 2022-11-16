require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./src/routes/route_notificacao');
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

app.listen( PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})