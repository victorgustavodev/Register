const express = require('express');
const path = require('path');
const app = express();
const { connectToMongoDB } = require("./global/database/index");
connectToMongoDB();

// Middleware para servir arquivos estáticos (HTML, CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analisar dados do corpo da solicitação (para lidar com POST)
app.use(express.urlencoded({ extended: true }));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Rota para lidar com o envio do formulário de login
app.post('/login', (req, res) => {
    const email = req.body.email; // Obtém o valor do campo de e-mail do formulário
    const senha = req.body.senha; // Obtém o valor do campo de senha do formulário

    // Aqui você pode adicionar a lógica para autenticar o usuário, verificar no banco de dados, etc.
    // Exemplo simples de resposta (você pode adaptar conforme necessário)
    console.log(`Dados recebidos: Email - ${email}, Senha - ${senha}`);
});

// Inicia o servidor
app.listen(5500, () => {
    console.log(`Servidor rodando em http://localhost:5500`);
});