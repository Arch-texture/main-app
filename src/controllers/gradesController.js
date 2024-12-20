const { studentExistsUS } = require("../clients/usersServiceClient");

const { validateStudentRS } = require("../clients/restrictionsServiceClient");

const { asignGradeGS } = require("../clients/gradesServiceClient");

const { asignGradesSS } = require("../clients/searchServiceClient");

const asignGrades = async (req, res) => {
  try {
    console.log("api asignGrades");
    const { id, grades } = req.body;

    const validateStudentExistsCall = await studentExistsUS(id);

    const validateStudentRestrictionsCall = await validateStudentRS(id);

    const asignGradesCall = await asignGradeGS(id, grades);

    const dbConsistencyCall = await asignGradesSS(id, grades);

    res.status(200).json({
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

module.exports = { asignGrades };
