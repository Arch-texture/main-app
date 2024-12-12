const axios = require("axios");

const baseUrl = process.env.GS_BASE_URL;

const asignGradeGS = async (studentId, grades) => {
  try {
    console.log("asignGradeGS");
    console.log(studentId, grade);
    console.log(`${baseUrl}/api/Grades`);

    const responses = [];

    grades.forEach(async (grade) => {
      console.log(grade);
      const response = await axios.post(`${baseUrl}/Grades`, {
        studentId: studentId,
        grade: grade,
      });

      console.log("request success");

      responses.push(response);
    });

    return responses;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  asignGradeGS,
};
