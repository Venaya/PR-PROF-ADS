require('dotenv').config();

const crypto = require('crypto');

hash = (password) => {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(process.env.SALT_LENGTH).toString('hex');

        crypto.scrypt(password, salt, process.env.HASH_LENGTH, (err, derivedKey) => {
            if(err) reject(err);
            resolve(salt + derivedKey.toString('hex'));
        });
    }).catch(error => console.error(error));
}

verify = (password, hash) => {
    return new Promise((resolve, reject) => {
        const salt = hash.slice(0, process.env.HASH_LENGTH);
        const key = hash.slice(salt.length, hash.length);

        console.log("SALT: " + salt);
        console.log("KEY: " + key);
        crypto.scrypt(password, salt, process.env.HASH_LENGTH, (err, derivedKey) => {
            console.log("Hashed Password " + derivedKey.toString('hex'));
            console.log("DB Password " + key);
            if(err) reject(err);
            resolve(key == derivedKey.toString('hex'));
        });
    }).catch(error => console.error(error.message));
}

module.exports = {hash, verify};