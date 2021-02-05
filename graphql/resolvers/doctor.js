const { addNewDoctor } = require("./Doctors/addNewDoctor");
const { getDoctorAppointments, getAvailableDoctors } = require("./Doctors/getDoctorAppointments");

const doctorResolvers = {
	Query: {
		getDoctorAppointments,
		getAvailableDoctors
	},
	Mutation: {
		addNewDoctor,
	},
};

module.exports = { doctorResolvers };
