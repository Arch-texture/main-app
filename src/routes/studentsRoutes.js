const { Router } = require("express");
const { check } = require("express-validator");
const {
  getStudents,
  createStudent,
} = require("../controllers/studentsController");
const { validateFields } = require("../middleware/validateFieldsMiddleware");
const { validateRole } = require("../middleware/validateRoleMiddleware");

const router = Router();

router.get("/", [validateRole("logged")], getStudents);

router.post(
  "/",
  [
    check("name").isString().withMessage("Name must be a string"),
    check("firstLastName")
      .isString()
      .withMessage("firstLastname must be a string"),
    check("secondLastName")
      .isString()
      .withMessage("secondLastname must be a string"),
    check("email").isEmail().withMessage("Invalid email format"),
    validateFields,
  ],
  createStudent
);

module.exports = router;
