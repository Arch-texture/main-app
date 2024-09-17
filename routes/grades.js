const { Router } = require("express");
const { check } = require("express-validator");
const {asignGrades} = require("../controllers/api");
const {validateFields} = require('../middleware/validateFields');

const router = Router();

router.post('/asign', [
    check('id').isUUID().withMessage('Invalid id format'),
    check('grades').isArray().withMessage('Grades must be an array'),
    check('grades.*.course').isString().withMessage('Course must be a string'),
    check('grades.*.gradename').isString().withMessage('Grade name must be a string'),
    check('grades.*.grade').isNumeric().isFloat({gt: 1, lt: 7}).withMessage('Grade must be a number between 1 and 7'),
    check('grades.*.comment').isString().withMessage('Comment must be a string'),
    validateFields
], asignGrades);


module.exports = router;
