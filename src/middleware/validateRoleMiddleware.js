const { response } = require("express");
const jwt = require("jsonwebtoken");

const roleMapping = {
  student: 1,
  logged: 1,
  teacher: 2,
  admin: 3,
};

const validateRole = (role) => {
  return (req, res = response, next) => {
    // Extract the token from the Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        msg: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    try {
      // Verify the token
      const decodedToken = jwt.verify(token, process.env.JWT_KEY);
      const userRole = decodedToken.role;
      console.log("userRole", userRole);
      console.log("role", role);

      const mappedUserRole = roleMapping[userRole];
      const mappedRole = roleMapping[role];

      console.log("mappedUserRole", mappedUserRole);
      console.log("mappedRole", mappedRole);

      if (mappedUserRole < mappedRole) {
        return res.status(403).json({
          msg: "Forbidden: Insufficient role",
        });
      }

      // Attach the decoded token to the request object
      req.user = decodedToken;

      // Call the next middleware or route handler
      next();
    } catch (error) {
      console.error("Error verifying token:", error.message);
      return res.status(401).json({
        msg: "Invalid token",
      });
    }
  };
};

module.exports = { validateRole };
