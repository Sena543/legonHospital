const addNewDoctor = async (_, { input }, { models }) => {
	const Doctor = models.doctorModel;
	const { doctorID, doctorName, email, officeNumber, timesAvailable } = input;
	try {
		const findDoctor = await Doctor.findOne({ doctorID });
		if (findDoctor) {
			return new Error(`Doctor with ID ${doctorID} already exists`);
		}
		const addNewDoctor = await new Doctor({
			doctorID,
			doctorName,
			email,
			officeNumber,
			timesAvailable,
		});
		await addNewDoctor.save();
		return addNewDoctor;
		// return input;
	} catch (error) {
		console.error(error);
	}
};

module.exports = { addNewDoctor };
