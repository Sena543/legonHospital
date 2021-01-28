const { query } = require("./queries");
const { studentType } = require("./types/student");

const typeDefs = [studentType, query];
module.exports = { typeDefs };
