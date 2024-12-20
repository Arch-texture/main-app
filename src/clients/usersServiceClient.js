const axios = require("axios");

const baseUrl = process.env.US_BASEURL;

const headers = { "X-API-Key": "14c2ced0" };

const loginUS = async (email, password) => {
  try {
    console.log("login US");
    console.log(email, password);
    console.log(`${baseUrl}/login`);

    const response = await axios.post(
      `${baseUrl}/login`,
      { email, password },
      { headers }
    );

    console.log("request successful");
    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const studentExistsUS = async (id) => {
  try {
    const params = { id: id };

    const response = await axios.get(`${baseUrl}/`, {
      headers,
      params: params,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const createStudentUS = async (student) => {
  try {
    console.log("createStudentUS");
    console.log(student);
    console.log(`${baseUrl}/`);

    const queryParams = new URLSearchParams({
      name: student.name,
      firstLastName: student.firstLastName,
      secondLastName: student.secondLastName,
      email: student.email,
      key: headers["X-API-Key"],
    }).toString();

    const response = await axios.post(`${baseUrl}/?${queryParams}`);

    console.log("request successful");

    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  loginUS,
  studentExistsUS,
  createStudentUS,
};
