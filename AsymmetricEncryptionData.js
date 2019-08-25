const crypto = require('crypto')
//Diffie Hellman is the key that secure 
const computer1 = crypto.createDiffieHellman(2048);

const computer1Keys = computer1.generateKeys(); 

const computer2 = crypto.createDiffieHellman(computer1.getPrime(), computer1.getGenerator())

const computer2Keys = computer2.generateKeys()

const computer1Secret = computer1.computeSecret(computer2Keys)

const computer2Secret = computer2.computeSecret(computer1Keys)

console.log(computer1Secret.toString('hex'))

console.log(computer2Secret.toString('hex'))
