const { addNewStudent } = require("./Student/addNewStudent");
const { bookAppointment } = require("./Student/bookAppointment");
const { getAllStudents } = require("./Student/allStudents");
const { getStudentProfile } = require("./Student/getStudentProfile");

const studentResolvers = {
	Query: {
		students: getAllStudents,
		getStudentProfile,
	},
	Mutation: {
		addNewStudent,
		bookAppointment,
	},
};

module.exports = {
	studentResolvers,
};
