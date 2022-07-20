const Personagem = require("./personagem");

const findByNomePersonagemService = (NomePersonagem) =>
  Personagem.findOne({ NomePersonagem: NomePersonagem });

const createPersonagemService = (body) => Personagem.create(body);

const findAllPersonagensService = async () => {
  const personagens = await Personagem.find();
  return personagens;
};

const findByIdPersonagemService = async (paramsid) => {
  const personagem = await Personagem.findById(paramsid);
  return personagem;
};

const findUpdatePsoagemService = async (idParams, personagemEdit) => {
  const personagem = await Personagem.findByIdAndUpdate(
    idParams,
    personagemEdit
  );
  return personagem;
};

const findDeletePersonagemService = async (idParams) => {
  return await Personagem.findByIdAndDelete(idParams);
};

module.exports = {
  findByNomePersonagemService,
  createPersonagemService,
  findAllPersonagensService,
  findByIdPersonagemService,
  findUpdatePsoagemService,
  findDeletePersonagemService,
};
