const generateJWT = require("../helpers/generateJwt");
const jwt = require("jsonwebtoken");

const { asignGradeGS } = require("../controllers/services/grades");
const {
  validateStudentRS,
  createRestrictionRS,
  restrictionExistsRS,
  removeRestrictionRS,
} = require("../controllers/services/restrictions");
const {
  searchMinMaxSS,
  asignGradesSS,
  createStudentSS,
  addRestrictionSS,
  deleteRestrictionSS,
  searchByRestrictionSS,
} = require("../controllers/services/search");
const {
  loginUS,
  studentExistsUS,
  createStudentUS,
} = require("../controllers/services/user");
const { error } = require("winston");

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
      msg: error.message,
    });
  }
};

const asignGrades = async (req, res) => {
  try {
    console.log("api asignGrades");
    const { id, grades } = req.body;

    const validateStudentExistsCall = await studentExistsUS(id);

    const validateStudentRestrictionsCall = await restrictionExistsRS(id);

    const asignGradesCall = await asignGradeGS(id, grades);

    const dbConsistencyCall = await asignGradesSS(id, grades);

    res.status(501).json({
      success: true,
      error: false,
      msg: "asignGrades",
      data: asignGradesCall,
    });
  } catch (error) {
    console.log(error.message);

    res.status(error.status ? error.status : 500).json({
      success: false,
      error: true,
      msg: error.message,
    });
  }
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
      data: {
        excelent: excelentStudents,
        good: goodStudents,
        acceptable: acceptableStudents,
        bad: badStudents,
      },
    });
  } catch (error) {
    console.log(error.message);

    res.status(error.status ? error.status : 500).json({
      success: false,
      error: true,
      msg: error.message,
    });
  }
};

const createStudent = async (req, res) => {
  try {
    console.log("api createStudent");

    const student = {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
    };

    const createStudentCall = await createStudentUS(student);

    const dbConsistencyCall = await createStudentSS(createStudentCall);

    res.status(501).json({
      msg: "createStudent",
      data: createStudentCall,
    });
  } catch (error) {
    console.log(error.message);

    res.status(error.status ? error.status : 500).json({
      success: false,
      error: true,
      msg: error.message,
    });
  }
};

const createRestriction = async (req, res) => {
  try {
    console.log("api createRestriction");
    const { studentsId, restrictionReason } = req.body;

    for (const studentId of studentsId) {
      const validateStudentExistsCall = await studentExistsUS(studentId);
    }

    let createdRestrictions;

    for (const studentId of studentsId) {
      const createRestrictionCall = await createRestrictionRS(
        studentId,
        restrictionReason
      );
      createdRestrictions.push(createRestrictionCall);
    }

    const dbConsistencyCall = await addRestrictionSS(createRestrictionCall);

    res.status(200).json({
      msg: "createRestriction",
      data: createRestrictionCall,
    });
  } catch (error) {
    console.log(error.message);

    res.status(error.status ? error.status : 500).json({
      success: false,
      error: true,
      msg: error.message,
    });
  }
};

const removeRestriction = async (req, res) => {
  try {
    console.log("api removeRestriction");

    const { query } = req.body;

    const restrictionExistsCall = await restrictionExistsRS(query);

    const restrictionUUID = restrictionExistsCall.restrictions.uuid;

    const searchByRestrictionCall = await searchByRestrictionSS(
      restrictionUUID
    );

    for (const studentId of searchByRestrictionCall.id) {
      const removeRestrictionCall = await removeRestrictionRS(
        restrictionUUID,
        studentId
      );
    }

    const dbConsistencyCall = await deleteRestrictionSS(restrictionUUID);

    res.status(200).json({
      msg: "removeRestriction",
      data: removeRestrictionCall,
    });
  } catch (error) {
    console.log(error.message);

    res.status(error.status ? error.status : 500).json({
      success: false,
      error: true,
      msg: error.message,
    });
  }
};

module.exports = {
  logIn,
  asignGrades,
  getStudents,
  createStudent,
  createRestriction,
  removeRestriction,
};
