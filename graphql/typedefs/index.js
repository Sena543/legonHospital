const { query } = require("./queries");
const { studentType } = require("./types/student");
const { DoctorType } = require("./types/doctor");
const { AppointmentType } = require("./types/Appoitment");
const typeDefs = [studentType, query, DoctorType, AppointmentType];
module.exports = { typeDefs };
