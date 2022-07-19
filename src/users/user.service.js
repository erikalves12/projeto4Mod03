const User = require("./Users");

const findByEmailUserService = async (email) => User.findOne({ email: email });
const createUserService = async (body) => User.create(body);

module.exports = { findByEmailUserService, createUserService };
