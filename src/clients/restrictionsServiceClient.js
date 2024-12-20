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
    console.log(reason, uuid_student.id);
    console.log(`${baseUrl}/`);

    const queryParams = new URLSearchParams({
      key: headers["X-API-Key"],
      uuid_student: uuid_student.id,
      reason: reason,
    }).toString();

    const response = await axios.post(`${baseUrl}/?${queryParams}`);

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
    console.log(`${baseUrl}/`);

    const response = await axios.get(`${baseUrl}/`, { headers: headers });

    console.log("request successfull opaa");
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error;
  }
};

const removeRestrictionRS = async (restrictionId, studentId) => {
  try {
    console.log("removeRestrictionRS");
    console.log(restrictionId, studentId);
    const queryParams = new URLSearchParams({
      key: headers["X-API-Key"],
      student_id: studentId.id,
      restriction_id: restrictionId,
    }).toString();

    console.log(`${baseUrl}/?${queryParams}`);
    const response = await axios.delete(`${baseUrl}/?${queryParams}`);
    console.log("request successfull opaa");
    console.log(response.data);

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
