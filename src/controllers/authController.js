const generateJWT = require("../helpers/generateJwt");
const jwt = require("jsonwebtoken");

const {
  loginUS,
} = require("../clients/usersServiceClient");

const logIn = async (req, res) => {
  try {
    console.log("api logIn");

    const { email, password } = req.body;

    const loginCall = await loginUS(email, password);

    const { id, role } = loginCall;

    const token = await generateJWT(id, role);

    res.status(200).json({
      success: true,
      error: false,
      msg: "login",
      token: token,
    });
  } catch (error) {
    console.log(error.message);

    res.status(error.status ? error.status : 500).json({
      success: false,
      error: true,
      msg: error.response.data,
    });
  }
};

module.exports = { logIn };