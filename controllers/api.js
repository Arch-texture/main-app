const generateJWT = require('../helpers/generate-jwt');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {

    console.log(req.body);

    console.log('login');

    res.status(200).json({
        msg: 'login'
    });
}

const asignGrades = async (req, res) => {
    console.log(req.body);

    console.log('asignGrades');

    res.status(200).json({
        msg: 'asignGrades'
    });
}

const getStudents = async (req, res) => {
    console.log(req.body);

    console.log('getStudents');

    res.status(200).json({
        msg: 'getStudents'
    });
}

const createStudent = async (req, res) => {
    console.log(req.body);

    console.log('createStudent');

    res.status(200).json({
        msg: 'createStudent'
    });
}

const createRestriction = async (req, res) => {
    console.log(req.body);

    console.log('createRestriction');

    res.status(200).json({
        msg: 'createRestriction'
    });
}

const removeRestriction = async (req, res) => {
    console.log(req.body);

    console.log('removeRestriction');

    res.status(200).json({
        msg: 'removeRestriction'
    });
}



module.exports = {
    login,
    asignGrades,
    getStudents,
    createStudent,
    createRestriction,
    removeRestriction
}