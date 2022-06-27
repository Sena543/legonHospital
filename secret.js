const crypto = require('crypto');

const secret = crypto.randomByte(2**20).toString('hex')
console.log(secret)