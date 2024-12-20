const axios = require("axios");
const { query } = require("express");

const baseUrl = process.env.SS_BASEURL;

const headers = { "X-API-Key": "14c2ced0" };

const searchMinMaxSS = async (min, max) => {
  try {
    console.log("search min max SS");
    console.log(min, max);
    console.log(`${baseUrl}`);

    const response = await axios.get(`${baseUrl}/${min},${max}`, {
      headers,
    });

    console.log("data reiceved");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const asignGradesSS = async (studentId, grades) => {
  try {
    console.log("asignGradesSS");
    console.log(studentId, grades);
    console.log(`${baseUrl}/add-grades`);
    const response = await axios.post(`${baseUrl}/add-grades`, grades, {
      headers: headers,
    });

    console.log("request succesful");

    return response.message;
  } catch (error) {
    throw error;
  }
};

const createStudentSS = async (student) => {
  try {
    console.log("createStudent");
    console.log(student);
    console.log(`${baseUrl}/create-student`);

    const queryParams = new URLSearchParams({
      key: headers["X-API-Key"],
    }).toString();

    const response = await axios.post(
      `${baseUrl}/create-student?${queryParams}`,
      student
    );

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
    console.log(`${baseUrl}/add-user-restriction`);

    const queryParams = new URLSearchParams({
      key: headers["X-API-Key"],
    }).toString();

    const response = await axios.post(
      `${baseUrl}/add-user-restriction?${queryParams}`,
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
