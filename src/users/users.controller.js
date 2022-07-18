const createUserController = async (req, res) => {
  /*const newUser = req.body;
  if (!newUser) {
    await res.status(400).send({ mesage: "Preencha todos os campos" });
  }*/
  res.send({ message: "oi" });
};

const findAllUserController = async (req, res) => {
  res.send({ message: "e aí" });
};

module.exports = {
  createUserController,
  findAllUserController,
};
