const { Router } = require("express");
const { check } = require("express-validator");
const { getStudents, createStudent } = require("../controllers/api");
const { validateFields } = require("../middleware/validateFields");
const { validateRole } = require("../middleware/validateRole");

const router = Router();

router.get("/", [validateRole("logged")], getStudents);

router.post(
  "/create",
  [
    check("name").isString().withMessage("Name must be a string"),
    check("lastName").isString().withMessage("Lastname must be a string"),
    check("email").isEmail().withMessage("Invalid email format"),
    validateFields,
  ],
  createStudent
);

module.exports = router;
