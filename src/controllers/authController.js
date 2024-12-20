const generateJWT = require("../helpers/generateJwt");
const jwt = require("jsonwebtoken");

const { loginUS } = require("../clients/usersServiceClient");

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

/*
TOKEN ADMIN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5NmFjMzBhLWRjZTEtNGVjMi05ZjkwLWQzYjkyMzhjYmIwNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczNDcwNzk3NCwiZXhwIjoxNzM3Mjk5OTc0fQ.TcmxR8O_cLie1a1vu2p-3h0Ha3YMbeBftd5oZ7dJZBI
TOKEN TEACHER: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5NmFjMzBhLWRjZTEtNGVjMi05ZjkwLWQzYjkyMzhjYmIwNyIsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNzM0NzA3NjE5LCJleHAiOjE3MzcyOTk2MTl9.MB8kSu-2pHnM_pOrcukI-PRxANwtlJH5lnEVYPOedsA
TOKEN STUDENT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5NmFjMzBhLWRjZTEtNGVjMi05ZjkwLWQzYjkyMzhjYmIwNyIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzM0NzA3NTk2LCJleHAiOjE3MzcyOTk1OTZ9.XzXQKOv4nKg28tDPtmyIRkehZ9VVk0IQLVtn-Jy2S24
*/
