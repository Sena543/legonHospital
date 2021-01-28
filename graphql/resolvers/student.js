const { addNewStudent } = require("./Student/addNewStudent");
const { getAllStudents } = require("./Student/allStudents");
const studentResolvers = {
	Query: {
		students: getAllStudents,
	},
	Mutation: {
		addNewStudent,
	},
};

module.exports = {
	studentResolvers,
};
