import mongoose from 'mongoose';

mongoose.connect();
// a funçao connect guarda a string de conexao dentro do parenteses.

let db = mongoose.connection;
// agora criamos uma variavel que guarda a açao de conectar nosso usuario com o mongoDB.

module.exports = db;