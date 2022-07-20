const User = require("./Users");

const findByEmailUserService = async (email) => User.findOne({ email: email });
const createUserService = async (body) => User.create(body);
const findAllUserService = () => User.find();

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService,
};
