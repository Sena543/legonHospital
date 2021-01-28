const bookAppointment = async (_, { input }, { models }) => {
	const { appointmentStartTime, arrivalConfirmation, checkupType, doctorID, endTime, studentID } = input;
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
