const express = require('express');
const path = require('path');

const { connectToMongoDB } = require('./global/database/index');
connectToMongoDB();

const app = express();
const port = 5500;

// Middleware para servir arquivos estáticos (HTML, CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analisar dados do corpo da solicitação (para lidar com POST)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Roteador para /login
const loginRouter = require('./global/routs/login');
app.use('/login', loginRouter);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});