const { addNewDoctor } = require("./Doctors/addNewDoctor");
const { getDoctorAppointments } = require("./Doctors/getDoctorAppointments");

const doctorResolvers = {
	Query: {
		getDoctorAppointments,
	},
	Mutation: {
		addNewDoctor,
	},
};

module.exports = { doctorResolvers };
