const mongoose = require("mongoose");

const PersonagemSchema = new mongoose.Schema({
  NomePersonagem: {
    type: String,
    require: true,
  },
  ImagemPersonagem: {
    type: String,
    require: true,
  },
});

const Personagem = mongoose.model("Personagem", PersonagemSchema);

module.exports = Personagem;
