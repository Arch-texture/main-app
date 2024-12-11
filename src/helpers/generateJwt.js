const jwt = require("jsonwebtoken");

const generateJWT = (id = "", role) => {
  return new Promise((resolve, reject) => {
    const payload = { id, role };

    jwt.sign(
      payload,
      process.env.JWT_KEY,
      {
        //expiresIn: '2h'
        expiresIn: "30m",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("ERROR to generate token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = generateJWT;
