const { Router } = require("express");
const { check } = require("express-validator");
const {
  createRestriction,
  removeRestriction,
} = require("../controllers/restrictionsController");
const { validateFields } = require("../middleware/validateFieldsMiddleware");
const { validateRole } = require("../middleware/validateRoleMiddleware");

const router = Router();

router.post(
  "/",
  [
    validateRole("admin"),
    check("reason").isString().withMessage("Reason must be a string"),
    check("students").isArray().withMessage("Students must be an array"),
    check("students.*.id").isUUID().withMessage("Invalid id format"),
    validateFields,
  ],
  createRestriction
);

router.delete(
  "/",
  [
    validateRole("admin"),
    check("query").isString().withMessage("Query must be a string"),
    validateFields,
  ],
  removeRestriction
);

module.exports = router;
