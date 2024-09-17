const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/api");
const {validateFields} = require('../middleware/validateFields');

const router = Router();

router.post("/login",[
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validateFields
], login);

module.exports = router;