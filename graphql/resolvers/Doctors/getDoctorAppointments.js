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
	const Appointment = models.appointmentModel;
	let available = [];
	const getDoctors = await Appointment.find({ appointmentStartTime: timeSelected });
	//check if doc hass appintment at selected time and if not to array

	// await Appointment.find({ appointmentStartTime: timeSelected }).forEach(async function (doc1) {
	// 	const availableDoctors = await models.doctorModel.findOne({ _id: doc1.doctorID });
	// 	if (doc2) {
	// 		available.push(availableDoctors);
	// 	}
	// });
	getDoctors.forEach(async function (doc1) {
		const availableDoctors = await models.doctorModel.findOne({ _id: doc1.doctorID });
		if (!availableDoctors) {
			available.push(availableDoctors);
		}
	});
	// console.log(available);
	return available;
};

module.exports = { getDoctorAppointments, getAvailableDoctors };
