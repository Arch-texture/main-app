const axios = require("axios");

const baseUrl = process.env.RS_BASE_URL;

const validateStudent = async (studentId) => {
  try {
    const response = await axios.post(`${baseUrl}/validate-student`, {
      studentId,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validateStudent,
};
