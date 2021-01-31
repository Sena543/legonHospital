const notifications = async (_, __, { models }) => {
	const Notifications = models.notificationsModel;
	const Appointment = models.appointmentModel;
	try {
		const today = new Date();
		let tomorrow = new Date();
		tomorrow.setDate(today.getDate() + 1);
		const appointmentDate = `${tomorrow.getDate()}-${tomorrow.getMonth() + 1}-${tomorrow.getFullYear()}`;
		console.log(appointmentDate);
		const getAppointments = await Appointment.find({ appointmentDate })
			// .populate("doctorID")
			.populate("studentID");

		// console.log(getAppointments);
		const checkNotifications = getAppointments.map(async (appointment) => {
			const notif = await Notifications.findOne({ userID: appointment.studentID._id });
			console.log(notif);
			if (notif) {
				checkNotifications.push(notif);
			}
		});
		// const findUser = await Notifications.findOne({ userID: getAppointments.studentID._id });
		// if (checkNotifications.length !== 0) {
		// findUser.notifications.push({
		// 	date: appointmentDate,
		// 	title: "Appointment Reminder",
		// 	message: `You have an appointment tomorrow with Dr. ${getAppointments.doctorID.doctorName} at ${getAppointments.appointmentStartTime}- ${getAppointments.endTime} `,
		// });

		// return await Notifications.save();
		// }

		// const newNotification = await new Notifications({
		// 	userID: findUser.studentID._id,
		// 	notifications: [
		// 		{
		// 			date: appointmentDate,
		// 			title: "Appointment Reminder",
		// 			message: `You have an appointment tomorrow with Dr. ${getAppointments.doctorID.doctorName} at ${getAppointments.appointmentStartTime}- ${getAppointments.endTime} `,
		// 		},
		// 	],
		// });
		// return newNotification;
		return "hello world";
	} catch (error) {
		console.error(error);
	}
};

module.exports = { notifications };
