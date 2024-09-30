const axios = require("axios");

const baseUrl = process.env.US_BASEURL;

const loginUS = async (email, password) => {
  try {
    console.log("login US");
    console.log(email, password);
    console.log(`${baseUrl}/login`);

    const response = await axios.post(`${baseUrl}/login`, { email, password });

    console.log("request successful");

    return response.data;
  } catch (error) {
    throw error;
  }
};

const studentExistsUS = async (id) => {
  try {
    console.log("studentExistsUS");
    console.log(id);
    console.log(`${baseUrl}/Student/${id}`);

    const response = await axios.get(`${baseUrl}/Student/${id}`);

    console.log("request successful");

    return response.data;
  } catch (error) {
    throw error;
  }
};

const createStudentUS = async (student) => {
  try {
    console.log("createStudentUS");
    console.log(student);
    console.log(`${baseUrl}/Student`);

    const response = await axios.post(`${baseUrl}/Student`, student);

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
