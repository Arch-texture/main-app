const axios = require("axios");

const baseUrl = process.env.GS_BASE_URL;

const asignGrade = async (studentId, grade) => {
  try {
    const response = await axios.post(`${baseUrl}/add-grade`, {
      studentId,
      grade,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  asignGrade,
};
