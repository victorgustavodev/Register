const mongoose = require('mongoose');
const { MongoDBUrl } = require("../config/config");
const chalk = require("chalk");

async function connectToMongoDB() {
    try {
        mongoose.connect(MongoDBUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`${chalk.redBright("[DATABASE]")} ${chalk.whiteBright("Conexão com a mongoose estabelecida!")}`);
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
}

module.exports = { connectToMongoDB };