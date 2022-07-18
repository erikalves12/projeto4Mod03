const mongoose = require('mongoose')

const connectDatabase = () => {
    console.log('Conectando com o banco de dados');
    mongoose
      .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('MongoDb Connect!'))
      .catch((error) =>
        console.log(`Erro ao conectar com o servidor mongoDb, erro: ${error}`),
      );
  };
  
  module.exports = connectDatabase;