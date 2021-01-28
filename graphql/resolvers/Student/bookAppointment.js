const bookAppointment = async (_, { input }, { models }) => {
	const {
		appointmentStartTime,
		arrivalConfirmation,
		checkupType,
		doctorID,
		endTime,
		studentID,
		appointmentDate,
	} = input;
	const Appointment = models.appointmentModel;
	const Student = models.studentModel;
	try {
		const findStudent = await Student.findOne({ studentID });
		const newAppointment = await new Appointment({
			appointmentStartTime,
			arrivalConfirmation,
			checkupType,
			doctorID,
			endTime,
			studentID,
			appointmentDate,
		});
		await newAppointment.save();
		await Student.findOneAndUpdate(
			{ studentID },
			{ $set: { appointmentList: [...findStudent.appointmentList, newAppointment._id] } }
		);
		// findStudent.save();
		return newAppointment;
	} catch (error) {
		console.error(error);
	}
	return input;
};

module.exports = { bookAppointment };
// new Date(1611861544465).toLocaleString()
//converts milliseconds to proper time and date
