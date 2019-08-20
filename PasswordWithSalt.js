const crypto = require('crypto')

const password = 'password1'

const salt = crypto.randomBytes(256).toString('hex') //We have to call toString cause randomBytes return a buffer

console.log(salt)

const hashedPassword = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512')

console.log(hashedPassword.toString('hex'))