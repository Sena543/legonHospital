const { addNewStudent } = require("./Student/addNewStudent");
const { bookAppointment } = require("./Student/bookAppointment");
const { getAllStudents } = require("./Student/allStudents");
const { getStudentProfile } = require("./Student/getStudentProfile");
const { notifications } = require("./Student/notifications");

const studentResolvers = {
	Query: {
		students: getAllStudents,
		getStudentProfile,
	},
	Student: {
		appointmentList: async (parent, _, { models }) => {
			console.log(parent);
			return await models.appointmentModel.find({ studentID: parent._id }).populate("doctorID");
		},
	},
	Mutation: {
		addNewStudent,
		bookAppointment,
		notifications,
	},
};

module.exports = {
	studentResolvers,
};
