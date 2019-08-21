//This method is mostly used in REST
const crypto = require('crypto')

const algorithm = 'aes-256-cbc';

const password = 'The whole new world';

const salt = crypto.randomBytes(32)

const key = crypto.scryptSync(password, salt, 32);

const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv);

let myName = 'thanh';

let encrypted = cipher.update(myName, 'utf8', 'hex');

encrypted+= cipher.final('hex')

console.log(encrypted)

const deCipher = crypto.createDecipheriv(algorithm, key, iv)

let decrypted = deCipher.update(encrypted, 'hex','utf8')

decrypted = deCipher.final('utf8')

console.log(decrypted)