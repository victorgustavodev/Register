const express = require('express');
const router = express.Router();
//Scehma da mongoose
const UsersSchema = require("../database/schemas/Usuarios");

// Rota GET /login
router.get('/', async (req, res) => {
    // Obtenha os dados dos parâmetros da URL
    const email = req.query.email;
    const senha = req.query.senha;

    // Exemplo: verificar se o usuário existe no banco de dados
    const UserInfo = await UsersSchema.findOne({ _id: email });

    if (!UserInfo) {
        res.send('UserInexistente')
        return;
    }

    if (senha === UserInfo.Senha) {
        res.send('Sucesso')
        return;
    } else {
        res.send('SenhaIncorreta')
        return;
    }

    // const newUser = new UsersSchema({
    //     _id: email,
    //     _Email: email,
    //     Senha: senha,
    // });

    // await newUser.save();
    // res.send('UserCriado')

})

module.exports = router;