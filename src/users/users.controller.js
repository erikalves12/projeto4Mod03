const userService = require("./user.service");
const authService = require("../auth/auth.service");

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

  if (!newUser) {
    return res.status(400).send({ message: "Erro ao criar o usuário!" });
  }
  const token = authService.generateToken(newUser.id);

  res.status(201).send({
    newUser: {
      id: newUser.id,
      name,
      email,
      avatar,
    },
    token,
  });
};

const findAllUserController = async (req, res) => {
  const user = await userService.findAllUserService();

  if (user.length === 0) {
    return res
      .status(400)
      .send({ message: "Não existem usuários cadastrados!" });
  }

  res.send(user);
};

module.exports = {
  createUserController,
  findAllUserController,
};
