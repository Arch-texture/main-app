const { Router } = require("express");
const { check } = require("express-validator");
const { createRestriction, removeRestriction } = require("../controllers/api");
const { validateFields } = require("../middleware/validateFields");
const { validateRole } = require("../middleware/validateRole");

const router = Router();

router.post(
  "/create",
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
  "/remove",
  [
    validateRole("admin"),
    check("query").isString().withMessage("Query must be a string"),
    validateFields,
  ],
  removeRestriction
);

module.exports = router;
