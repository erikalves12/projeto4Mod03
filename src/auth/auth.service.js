const User = require("../users/Users");

const loginService = (email) => User.findOne({ email: email }).select("+password");

module.exports = {loginService};