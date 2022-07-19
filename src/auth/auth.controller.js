const authService = require("./auth.service");
const bcrypt = require("bcryptjs")
const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService(email);

  if (!user) {
    return res.status(400).send({message:"Usuário náo encontrado no banco de dados!"})
  }
  
  const isPasswordValid = await bcrypt.compare(password, user.password);

if(!isPasswordValid){
    return res.status(400).send({message:"senha inválida!"})
}


  res.send(user);
};

module.exports =  { loginController }
