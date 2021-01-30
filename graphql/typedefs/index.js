const { query } = require("./queries");
const { studentType } = require("./types/student");
const { DoctorType } = require("./types/doctor");
const { AppointmentType } = require("./types/appoitment");
const { NotificationType } = require("./types/notifications");
const typeDefs = [studentType, query, DoctorType, AppointmentType, NotificationType];
module.exports = { typeDefs };
