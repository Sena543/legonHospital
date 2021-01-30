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
			endTime,
		});

		if (checkAppointmentExistence) {
			return new Error("Appointment time allocated to another user. Select another time or Doctor");
		}
		const newAppointment = await new Appointment({
			appointmentStartTime,
			arrivalConfirmation,
			checkupType,
			doctorID: findDoctor._id,
			endTime,
			studentID: findStudent._id,
			appointmentDate,
		});
		await newAppointment.save();
		await Student.findOneAndUpdate(
			{ studentID },
			{ $set: { appointmentList: [...findStudent.appointmentList, newAppointment._id] } }
		);
		// findStudent.save();
		return newAppointment;
		// return await Appointment.findOne({studentID:findStudent_id}).pop
	} catch (error) {
		console.error(error);
	}
	return input;
};

module.exports = { bookAppointment };
// new Date(1611861544465).toLocaleString()
//converts milliseconds to proper time and date
