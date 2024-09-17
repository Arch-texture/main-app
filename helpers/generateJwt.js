const jwt = require("jsonwebtoken");


const generateJWT = (id = '') => {
    return new Promise((resolve,reject) =>{
        const payload = {id};

        jwt.sign(payload, process.env.SECRET_OR_PRIVATE_KEY,{
            //expiresIn: '2h'
            expiresIn: '5m'
        }, (error, token) => {
            if (error){
                console.log(error);
                reject('ERROR to generate token')
            }else{
                resolve(token)
            }    
        });

    });

}


module.exports = generateJWT;