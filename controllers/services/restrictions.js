const axios = require("axios");

const baseUrl = process.env.RS_BASE_URL;

const validateStudentRS = async (studentId) => {
  try {
    console.log("validateStudent");
    console.log(studentId);
    console.log(`${baseUrl}/`); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

    const response = await axios.get(`${baseUrl}/`); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

    console.log("request successfull");

    return response.data;
  } catch (error) {
    throw error;
  }
};

const createRestrictionRS = async (reason, uuid_student) => {
  try {
    console.log("createRestrictionRS");
    console.log(restriction, students);
    console.log(`${baseUrl}/`); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

    const response = await axios.post(`${baseUrl}/`, {reason, uuid_student}); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

    console.log("request successfull");

    return response.data;
  } catch (error) {
    throw error;
  }
};

const restrictionExistsRS = async (query) => {
  try {
    console.log("restrictionExistsRS");
    console.log(query);
    console.log(`${baseUrl}/`); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

    const response = await axios.get(`${baseUrl}/`); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

    console.log("request successfull");

    return response.data;
  } catch (error) {
    throw error;
  }
};

const removeRestrictionRS = async (restrictionId, studentId) => {
  try {
    console.log("removeRestrictionRS");
    console.log(restrictionId, studentId);
    console.log(`${baseUrl}/`); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

    const response = await axios.delete(`${baseUrl}/`); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

    console.log("request successfull");

    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  validateStudentRS,
  createRestrictionRS,
  restrictionExistsRS,
  removeRestrictionRS,
};
