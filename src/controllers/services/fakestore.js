const axios = require("axios");

const baseUrl = "https://fakestoreapi.com";

const getProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getProduct = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createProduct = async (product) => {
  try {
    const response = await axios.post(`${baseUrl}/products`, product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  login,
};
