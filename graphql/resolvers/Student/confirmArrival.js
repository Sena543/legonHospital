const confirmArrival = async (_, { studentID }, { models }) => {
	const Appointment = models.appointmentModel;
	const Student = models.studentModel;
	console.log(studentID);
	const findStudent = await Student.findOne({ studentID });
	const confirm = await Appointment.findOneAndUpdate(
		{ studentID: findStudent._id },
		{ arrivalConfirmation: true }
	);
	console.log(confirm);
	// return await Appointment.findOneAndUpdate({ student: findStudent._id }, { arrivalConfirmation: true });
	return "Confirmation Done";
};

module.exports = { confirmArrival };
