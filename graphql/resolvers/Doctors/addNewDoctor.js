/**
 * saved doctor ID as student ID inn the login schena
 * this was done to mame completing the doctors side easier and faster
 * would be properly updated down the line.
 */
const addNewDoctor = async (_, { input }, { models }) => {
	const Doctor = models.doctorModel;
	const Login = models.loginModel;
	const { doctorID, doctorName, email, officeNumber, timesAvailable, password } = input;
	try {
		const findDoctor = await Doctor.findOne({ doctorID });
		if (findDoctor) {
			return new Error(`Doctor with ID ${doctorID} already exists`);
		}
		const addNewDoctor = await new Doctor({
			doctorID,
			doctorName,
			email,
			timesAvailable,
			officeNumber,
		});

		const _login = new Login({ studentID: doctorID, password });
		await _login.save();

		await addNewDoctor.save();
		return addNewDoctor;
		// return input;
	} catch (error) {
		console.error(error);
	}
};

module.exports = { addNewDoctor };
