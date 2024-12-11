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

const asignGradesSS = async (studentId, grades) => {
  try {
    console.log("asignGradesSS");
    console.log(studentId, grades);
    console.log(`${baseUrl}/Student/AddGrade/${studentId}`);
    /*
    const response = await axios.post(
      `${baseUrl}/Student/AddGrade/${studentId}`,
      grades
    );

    console.log("request succesful");

    return response.message;

    */
  } catch (error) {
    throw error;
  }
};

const createStudentSS = async (student) => {
  try {
    console.log("createStudent");
    console.log(student);
    console.log(`${baseUrl}/Student`);

    
    const response = await axios.post(`${baseUrl}/Student/, student`);

    console.log("request succesful");

    return response.message;


  } catch (error) {
    throw error;
  }
};

const addRestrictionSS = async (restriction) => {
  try {
    console.log("createRestrictionSS");
    console.log(restriction);
    console.log(`${baseUrl}/Student/AddRestriction`);

    const response = await axios.post(
      `${baseUrl}/Student/AddRestriction`,
      restriction
    );

    console.log("request succesful");

    return response.message;
  } catch (error) {
    throw error;
  }
};

const deleteRestrictionSS = async (restrictionId) => {
  try {
    console.log("deleteRestrictionSS");
    console.log(restrictionId);
    console.log(`${baseUrl}/Restriction/${restrictionId}`);

    const response = await axios.delete(
      `${baseUrl}/Student/deleteRestriction/${restrictionId}`
    );

    console.log("request succesful");

    return response.message;
  } catch (error) {
    throw error;
  }
};

const searchByRestrictionSS = async (query) => {
  try {
    console.log("searchByRestrictionRS");
    console.log(query);
    console.log(`${baseUrl}/Search/searchByRestriction/${query}`);

    const response = await axios.get(
      `${baseUrl}/Search/searchByRestriction/${query}`
    );

    console.log("request successful");

    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  searchMinMaxSS,
  asignGradesSS,
  createStudentSS,
  addRestrictionSS,
  deleteRestrictionSS,
  searchByRestrictionSS,
};
