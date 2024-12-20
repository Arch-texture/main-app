const axios = require("axios");

const baseUrl = process.env.RS_BASEURL;

const headers = { "X-API-Key": "14c2ced0" };

const validateStudentRS = async (studentId) => {
  try {
    const params = { uuid_student: studentId };

    const response = await axios.get(`${baseUrl}/validate-student`, {
      headers,
      params,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const createRestrictionRS = async (reason, uuid_student) => {
  try {
    console.log("createRestrictionRS");
    console.log(restriction, students);
    console.log(`${baseUrl}/`);

    const response = await axios.post(
      `${baseUrl}/`,
      { reason, uuid_student },
      headers
    );

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
    console.log(`${baseUrl}/exists`); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

    const response = await axios.get(`${baseUrl}/exists`, headers); //CAMBIAR CON EL ENPOINT CORRESPONDIENTE

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
