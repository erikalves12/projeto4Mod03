const userService = require("./user.service");

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    return res.status(400).send({ message: "Preencha todos os campos..." });
  }
  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res
      .status(400)
      .send({ message: "Já existe este usuário no banco de dados!" });
  }
  const newUser = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

if(!newUser) {
    return res
      .status(400)
      .send({ message: "Erro ao criar o usuário!" })
}

res.status(201).send(newUser)
};

const findAllUserController = async (req, res) => {
  res.send({ message: "e aí" });
};

module.exports = {
  createUserController,
  findAllUserController,
};
