require('dotenv').config;

const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const publicKey = fs.readFileSync(path.resolve(__dirname + "/Secret/public.pem"));

/*
const privateKey = fs.readFileSync(__dirname + "private.key", 'utf-8');
const publicKey = fs.readFileSync(__dirname + "public.key", 'utf-8');
*/

const options = {
    issuer: process.env.JWT_ISSUER,
    subject: process.env.JWT_SUBJECT,
    audience: process.env.JWT_AUDIENCE,
    expiresIn: process.env.JWT_EXPIRESIN,
    algorithm: process.env.JWT_ALGORITHM
}

verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        return jwt.verify(token, publicKey, options, (err, decoded) => {
            if(err) reject(err);
            if(!decoded) reject(decoded);
            console.log('Decoded:' + decoded.userID);
            //if(decoded.header == 'none') reject(decoded);
            
            resolve(decoded);
        });
    }).catch(error => console.error(error));
    /*
    try{
        return jwt.verify(token, publicKey, options);
    }catch(err){
        throw err;
    }
    */
}

module.exports = {verifyToken};
