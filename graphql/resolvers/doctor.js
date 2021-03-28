const { addNewDoctor } = require("./Doctors/addNewDoctor");
const {
	getDoctorAppointments,
	getAvailableDoctors,
	getWorkingHours,
	updateWorkingHours,
} = require("./Doctors/getDoctorAppointments");

const doctorResolvers = {
	Query: {
		getDoctorAppointments,
		getAvailableDoctors,
		getWorkingHours,
	},
	Mutation: {
		addNewDoctor,
		updateWorkingHours,
	},
};

module.exports = { doctorResolvers };
