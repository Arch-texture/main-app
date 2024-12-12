const { Router } = require("express");
const { check } = require("express-validator");
const { logIn } = require("../controllers/authController");
const { validateFields } = require("../middleware/validateFieldsMiddleware");

const router = Router();

router.post(
  "/login",
  [
    //check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields,
  ],
  logIn
);

module.exports = router;
