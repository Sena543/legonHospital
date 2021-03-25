const { addNewStudent } = require("./Student/addNewStudent");
const { bookAppointment, getAppointmentHistory } = require("./Student/bookAppointment");
const { getAllStudents } = require("./Student/allStudents");
const { getStudentProfile } = require("./Student/getStudentProfile");
const { notifications } = require("./Student/notifications");
const { findStudentID } = require("./Student/findStudent");
const { confirmArrival } = require("./Student/confirmArrival");

const studentResolvers = {
	Query: {
		students: getAllStudents,
		getStudentProfile,
		getAppointmentHistory,
		findStudentID,
	},
	Student: {
		appointmentList: async (parent, _, { models }) => {
			return await models.appointmentModel.find({ studentID: parent._id }).populate("doctorID");
		},
	},
	Mutation: {
		addNewStudent,
		bookAppointment,
		notifications,
		confirmArrival,
	},
};

module.exports = {
	studentResolvers,
};
