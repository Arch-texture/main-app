const axios = require("axios");

const baseUrl = "https://my.api.mockaroo.com/api/grade";

const headers = { "X-API-Key": "14c2ced0" };

const asignGradeGS = async (studentId, grades) => {
  try {
    console.log("asignGradeGS");
    console.log(studentId, grades);
    console.log(`${baseUrl}/api/Grades`);

    const params = { id: studentId };

    const responses = await Promise.all(
      grades.map(async (grade) => {
        console.log(grade);
        const response = await axios.post(
          `${baseUrl}/`,
          {
            grade: grade,
          },
          { headers: headers, params: params }
        );
        console.log("request success GS asign grade");
        return response.data;
      })
    );

    console.log("impresion de responses");
    console.log(responses);

    return responses;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  asignGradeGS,
};
