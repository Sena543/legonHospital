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

module.exports = { getDoctorAppointments };
