const crypto = require('crypto');

const secret = crypto.randomBytes(2**10).toString('hex')
console.log(secret)