const { addNewStudent } = require("./Student/addNewStudent");
const { bookAppointment } = require("./Student/bookAppointment");
const { getAllStudents } = require("./Student/allStudents");
const studentResolvers = {
	Query: {
		students: getAllStudents,
	},
	Mutation: {
		addNewStudent,
		bookAppointment,
	},
};

module.exports = {
	studentResolvers,
};
