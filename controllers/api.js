const generateJWT = require("../helpers/generateJwt");
const jwt = require("jsonwebtoken");
const { asignGrade } = require("../controllers/services/grades");
const { searchMinMaxSS } = require("../controllers/services/search");
const {
  getProducts,
  getProduct,
  createProduct,
  login,
} = require("../controllers/services/fakestore");

const logIn = async (req, res) => {
  try {
    console.log("api logIn");

    const { email, password } = req.body;

    const loginCall = await login(email, password);

    const token = await generateJWT();

    res.status(200).json({
      msg: "login",
      token: token,
    });
  } catch (error) {
    console.log(error.errors);

    res.status(500).json({
      msg: "login",
      error,
    });
  }
};

const asignGrades = async (req, res) => {
  console.log(req.body);

  console.log("api asignGrades");

  res.status(501).json({
    msg: "asignGrades",
  });
};

const getStudents = async (req, res) => {
  try {
    console.log("api getStudents");

    const excelentStudents = await searchMinMaxSS(6.1, 7.0);
    const goodStudents = await searchMinMaxSS(5.1, 6.0);
    const acceptableStudents = await searchMinMaxSS(4.1, 5.0);
    const badStudents = await searchMinMaxSS(1.1, 4.0);

    res.status(200).json({
      success: true,
      error: false,
      excelentStudents,
      goodStudents,
      acceptableStudents,
      badStudents,
    });
  } catch (error) {
    console.log(error.errors);

    res.status(500).json({
      success: false,
      error: true,
      msg: error.errors,
    });
  }
};

const createStudent = async (req, res) => {
  console.log(req.body);

  console.log("api createStudent");

  res.status(501).json({
    msg: "createStudent",
  });
};

const createRestriction = async (req, res) => {
  console.log(req.body);

  console.log("api createRestriction");

  res.status(501).json({
    msg: "createRestriction",
  });
};

const removeRestriction = async (req, res) => {
  console.log(req.body);

  console.log("api removeRestriction");

  res.status(501).json({
    msg: "removeRestriction",
  });
};

module.exports = {
  logIn,
  asignGrades,
  getStudents,
  createStudent,
  createRestriction,
  removeRestriction,
};
