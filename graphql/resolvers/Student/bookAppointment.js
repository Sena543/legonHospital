const { combineResolvers } = require("graphql-resolvers");
const { isAuthenticated } = require("../auth/authorizations");

const bookAppointment = combineResolvers(isAuthenticated, async (_, { input }, { models }) => {
	const {
		appointmentStartTime,
		arrivalConfirmation,
		checkupType,
		doctorID,
		// endTime,
		studentID,
		appointmentDate,
	} = input;
	const Appointment = models.appointmentModel;
	const Student = models.studentModel;
	const Doctor = models.doctorModel;
	try {
		// const appointmentTime = `${appointmentStartTime}-${endTime}`;
		const [findStudent, findDoctor] = await Promise.all([
			Student.findOne({ studentID }),
			Doctor.findOne({ doctorID }),
		]);

		//check if doctor has an appointment at the selected time
		const checkAppointmentExistence = await Appointment.findOne({
			doctorID: findDoctor._id,
			appointmentStartTime,
			// endTime,
		});

		if (checkAppointmentExistence) {
			return new Error("Appointment time allocated to another user. Select another time or Doctor");
		}
		const newAppointment = await new Appointment({
			appointmentStartTime,
			arrivalConfirmation,
			checkupType,
			doctorID: findDoctor._id,
			endTime: `${Number(appointmentStartTime[0]) + 1}:00`,
			studentID: findStudent._id,
			appointmentDate,
		});
		await newAppointment.save();
		await Student.findOneAndUpdate(
			{ studentID },
			{ $set: { appointmentList: [...findStudent.appointmentList, newAppointment._id] } }
		);
		// findStudent.save();
		// return newAppointment;
		return await Appointment.findOne({ studentID: findStudent._id })
			.populate("doctorID")
			.populate("studentID");
	} catch (error) {
		console.error(error);
	}
	return input;
});

const getAppointmentHistory = combineResolvers(isAuthenticated, async (_, { studentID }, { models }) => {
	try {
		const findStudent = await models.studentModel.findOne({ studentID });
		return await models.appointmentModel
			.find({ studentID: findStudent._id })
			.populate("doctorID")
			.populate("studentID")
			.exec();
	} catch (error) {
		console.error(error);
	}
});

module.exports = { bookAppointment, getAppointmentHistory };
// new Date(1611861544465).toLocaleString()
//converts milliseconds to proper time and date
