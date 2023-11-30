const mongoose = require('mongoose');

const Users = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },

    _Email: {
        type: String,
        required: true
    },

    Senha: {
        type: String,
        required: true
    },

});

const UsersModel = mongoose.model('Usuarios', Users);

module.exports = UsersModel;