const axios = require("axios");

const baseUrl = process.env.SS_BASEURL;

const searchMinMaxSS = async (min, max) => {
  try {
    console.log("search min max SS");
    console.log(min, max);
    console.log(`${baseUrl}/Search/searchStudentByGrade/${min},${max}`);

    const response = await axios.get(
      `${baseUrl}/Search/searchStudentByGrade/${min},${max}`
    );

    console.log("data reiceved");
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  searchMinMaxSS,
};
