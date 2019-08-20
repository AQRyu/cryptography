const crypto = require('crypto')

const hash = crypto.createHash('md5')
const sha256Hash = crypto.createHash('sha256')

hash.update('password1');
sha256Hash.update('password1')

console.log(hash.digest('hex'))
console.log(sha256Hash.digest('hex'))