const personagemService = require("./personagem.service");

const mongoose = require("mongoose");

const createPersonagemrController = async (req, res) => {
  const { NomePersonagem, ImagemPersonagem } = req.body;

  if (!NomePersonagem || !ImagemPersonagem) {
    return res.status(400).send({ message: "Preencha todos os campos" });
  }
  const foundPersonagem = await personagemService.findByNomePersonagemService(
    NomePersonagem
  );

  if (foundPersonagem) {
    return res.status(400).send({ message: "Personagem já existe" });
  }

  const personagem = await personagemService
    .createPersonagemService(req.body)
    .catch((err) => console.log(err.message));

  if (!personagem) {
    return res.status(400).send({ message: "Erro ao criar o personagem" });
  }
  res.status(201).send(personagem);
};

const findAllPersonagensControler = async (req, res) => {
  const findAllPersonagem = await personagemService.findAllPersonagensService();

  if (!findAllPersonagem) {
    return res.status(4001).send({ message: "banco de dados vazio" });
  }

  res.status(200).send(findAllPersonagem);
};

const findByNomePersonagemController = async (req, res) => {
  const { NomePersonagem, ImagemPersonagem } = req.body;

  const newPersonagem = await personagemService.findByNomePersonagemService(
    NomePersonagem
  );

  res.send({ newPersonagem });
};

const findByIdPersonagemController = async (req, res) => {
  const parametroId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: "Id inexistente!" });
  }
  const personagemEscolhido = await personagemService.findByIdPersonagemService(
    parametroId
  );
  res.send(personagemEscolhido);
};

const updatePersonagemController = async (req, res) => {
  const idParams = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParams)) {
    return res.status(400).send({ message: "Id inexistente!" });
  }

  const personagemEdit = req.body;

  if (!personagemEdit.NomePersonagem || !personagemEdit.ImagemPersonagem) {
    return res.status(401).send({ message: "Preencha todos os campos" });
  }

  const updatePersonagem = await personagemService.findUpdatePsoagemService(
    idParams,
    personagemEdit
  );

  res.send(updatePersonagem);
};

const deletePersonagemController = async (req, res) => {
  const idParams = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParams)) {
    return res.status(400).send({ message: "Id inexistente!" });
  }

  const personagemDeletado =
    await personagemService.findDeletePersonagemService(idParams);

  res.send({ message: "Personagem deletado com sucesso" });
};

module.exports = {
  createPersonagemrController,
  findAllPersonagensControler,
  findByNomePersonagemController,
  findByIdPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
