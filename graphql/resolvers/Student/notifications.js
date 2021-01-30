const notifications = async (_, __, { models }) => {
	const Notifications = models.notificationsModel;
	const Appointment = models.appointmentModel;
	try {
		const today = new Date();
		console.log(today);
		let tomorrow = new Date();
		tomorrow.setDate(today.getDate() + 1);
		const appointmentDate = `${tomorrow.getDay()}/${tomorrow.getMonth()}/${tomorrow.getFullYear()}`;
		console.log(appointmentDate);
		const getAppointments = await Appointment.find({ appointmentDate })
			.populate("doctorID")
			.populate("studentID");
		const findUser = await Notifications.findOne({ userID: getAppointments._id });
		if (findUser) {
			findUser.notifications.push({
				date: appointmentDate,
				title: "Appointment Reminder",
				message: `You have an appointment tomorrow with Dr. ${getAppointments.doctorID.doctorName} at ${getAppointments.appointmentStartTime}- ${getAppointments.endTime} `,
			});

			await Notifications.save();
		}
		return "hello,world ";
	} catch (error) {
		console.error(error);
	}
};

module.exports = { notifications };
