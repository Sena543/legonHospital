const crypto = require('crypto');

const secret = crypto.randomBytes(2**20).toString('hex')
console.log(secret)