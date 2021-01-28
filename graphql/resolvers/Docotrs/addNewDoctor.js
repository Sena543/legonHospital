const addNewDoctor = async (_, { input }, { models }) => {
	const Doctor = models.doctorModel;
	const { doctorID, doctorName, email, officeNumber, timeAvailable } = input;
	try {
		const findDoctor = await Doctor.findOne({ doctorID });
		if (findDoctor) {
			return new Error(`Doctor with ID ${doctorID} already exists`);
		}
		const addNewDoctor = await new Student({
			doctorID,
			doctorName,
			email,
			officeNumber,
			timeAvailable,
		});
		await addNewDoctor.save();
		return addNewDoctor;
	} catch (error) {
		console.error(error);
	}
};

module.exports = { addNewDoctor };
