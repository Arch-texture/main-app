const {
  searchMinMaxSS,
  createStudentSS,
} = require("../clients/searchServiceClient");
const { createStudentUS } = require("../clients/usersServiceClient");

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
      firstLastName: req.body.firstLastName,
      secondLastName: req.body.secondLastName,
      email: req.body.email,
    };

    const createStudentCall = await createStudentUS(student);

    const dbConsistencyCall = await createStudentSS(createStudentCall);

    res.status(201).json({
      msg: "createStudent",
      data: createStudentCall,
    });
  } catch (error) {
    console.log(error);

    res.status(error.status ? error.status : 500).json({
      success: false,
      error: true,
      msg: error.message,
    });
  }
};

module.exports = {
  getStudents,
  createStudent,
};
