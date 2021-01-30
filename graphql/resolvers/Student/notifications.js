const notifications = async (_, __, { models }) => {
	const Notifications = models.notificationsModel;
	const Appointment = models.appointmentModel;
	try {
		const today = new Date();

		// to return the date number(1-31) for the specified date
		console.log("today => ", today);

		let tomorrow = new Date();
		tomorrow.setDate(today.getDate() + 1);
		//returns the tomorrow date
		console.log("tomorrow => ", tomorrow);
		const getAppointments = await Appointment.find({});
		return "hello,world ";
	} catch (error) {
		console.error(error);
	}
};

module.exports = { notifications };
