const getDoctorAppointments = async (_, { doctorID }, { models }) => {
	const DoctorAppointments = models.appointmentModel;
	const Doctor = models.doctorModel;
	try {
		const findDoctor = await Doctor.findOne({ doctorID });
		return await DoctorAppointments.find({ doctorID: findDoctor._id })
			.populate("studentID")
			.populate("doctorID")
			.exec();
	} catch (error) {
		console.error(error);
	}
};

const getAvailableDoctors = async (_, { timeSelected }, { models }) => {
	const Appointment = models.doctorModel;
	const timesProc = `${timeSelected}-${Number(timeSelected[0]) + 1}:00`;
	const getDoctors = await Appointment.find({ timesAvailable: timesProc });

	//check if doc hass appintment at selected time and if not to array

	// await Appointment.find({ appointmentStartTime: timeSelected }).forEach(async function (doc1) {
	// 	const availableDoctors = await models.doctorModel.findOne({ _id: doc1.doctorID });
	// 	if (doc2) {
	// 		available.push(availableDoctors);
	// 	}
	// });
	console.log(getDoctors);
	// getDoctors.forEach(async function (doc1) {
	// 	const availableDoctors = await models.doctorModel.findOne({ _id: doc1.doctorID });
	// 	if (!availableDoctors) {
	// 		available.push(availableDoctors);
	// 	}
	// });
	return getDoctors;
};

const getWorkingHours = async (_, { doctorID }, { models }) => {
	const Doctor = models.doctorModel;
	return await Doctor.findOne({ doctorID });
};

const updateWorkingHours = async (_, { doctorID, timesAvailable }, { models }) => {
	const Doctor = models.doctorModel;
	const _update = await Doctor.findOneAndUpdate({ doctorID }, { timesAvailable }, { new: true });
	console.log(_update);
	return "Update Completed";
};

module.exports = { getDoctorAppointments, getAvailableDoctors, getWorkingHours, updateWorkingHours };
