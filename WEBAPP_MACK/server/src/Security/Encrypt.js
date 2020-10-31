require('dotenv').config;

const crypto = require('crypto');

let iv_length = 16;

/*
let key = crypto.scryptSync('123123asdas12efsdgf24512323', crypto.randomBytes(128), 256, (err, derivedKey) =>{
    if(err) console.error(err);
    console.log(derivedKey);
    return derivedKey.toString('base64');
});
*/

let key = 'c629b6dd63137f08c629b6dd63137f08';
/*
encrypt = (data, key) => {
    return new Promise((resolve, reject) => {
        let iv = crypto.randomBytes(12);     
        let cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
        let cipherText = cipher.update(data) + cipher.final();
        console.log('Encrypted: ' + iv.toString('hex'));
        resolve(iv + cipherText + cipher.getAuthTag());
    })
    .catch(error => console.error(error));
}

decrypt = (encrypted, key) => {
    return new Promise((resolve, reject) => {
        console.log('value: ' + encrypted);
        let iv = encrypted.toString('hex').slice(0, 12);
        console.log('IV Decrypt: ' + iv);
        let cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
        let decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
        cipher.final();
        decipher.setAuthTag(cipher.getAuthTag());
        resolve(decipher.update(encrypted, 'base-64'), decipher.final('utf-8'));
    })
    .catch(error => console.error(error));
}

module.exports = {encrypt, decrypt};

let text = 'Um prato de tangerina em um caminho de pedras';

let encrypted = encrypt(text, key)
.then(
    result => decrypt(result, key)
    .then(result => console.log(result))
    .catch(error => console.log(error)))
.catch(error => console.log(error));
*/
/*
encrypt = (data, key) => {
    let iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    let cipherText = cipher.update(data, 'utf-8', 'hex');
    return cipherText += cipher.final();
}
*/

encrypt = (data, key) => 
{
    let iv = crypto.randomBytes(iv_length).toString('hex');
    let cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    let cipherText = cipher.update(data, 'utf-8', 'hex');

    console.log('IV: ' + iv.toString('hex'));
    let content = cipherText + cipher.final('hex');
    //let toReturn = Buffer.concat([iv, Buffer.from(cipherText), Buffer.from(cipher.final('hex')), cipher.getAuthTag()]);
    let toReturn = iv + content + cipher.getAuthTag().toString('hex');

    console.log('Data: ' + content);
    //console.log('Auth Buffer: ' + cipher.getAuthTag());
    console.log('Auth: ' + cipher.getAuthTag().toString('hex'));
    
    return toReturn;
}

decrypt = (encrypted, key) => {
    let iv = encrypted.slice(0, iv_length * 2);
    let length = encrypted.length;
    //Only validates the first 12 characters
    let auth = encrypted.slice(length-iv_length * 2, length);
    let data = encrypted.slice(iv_length * 2, length-iv_length * 2);

    console.log('IV: ' + iv);
    console.log('Data: ' + data.toString('hex'));
    let decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
    decipher.setAuthTag(Buffer.from(auth, 'hex'));
    let decipherText = decipher.update(data, 'hex', 'utf-8');
    
    //console.log('Auth Buffer: ' + Buffer.from(auth, 'hex'));
    console.log('Auth: ' + auth);
    
    //return Buffer.concat([Buffer.from(decipherText), Buffer.from(decipher.final('utf-8'))]);
    return decipherText += decipher.final('utf-8');
}

module.exports = {encrypt, decrypt};

let result = encrypt('teste112344123@sfda@!!%FAS661234', key).toString('hex');

console.log("Encrypted: " + result);
console.log("Decrypted: " + decrypt(result, key).toString());
