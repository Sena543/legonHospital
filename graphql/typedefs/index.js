const { query } = require("./queries");
const { studentType } = require("./types/student");
const { DoctorType } = require("./types/doctor");

const typeDefs = [studentType, query];
module.exports = { typeDefs };
