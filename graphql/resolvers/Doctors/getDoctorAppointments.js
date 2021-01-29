const getDoctorAppointments = async (_, { doctorID }, { models }) => {
	const DoctorAppointments = models.appoointmentModel;
	try {
		return await DoctorAppointments.find({ doctorID }).populate("studentID").populate("doctorID").exec();
	} catch (error) {
		console.error(error);
	}
};

module.exports = { getDoctorAppointments };
