const addNewStudent = async (_, { input }, { models }) => {
	const Student = models.studentModel;
	const Login = models.loginModel;
	const {
		email,
		gender,
		// hallOfResidence,
		dateOfBirth,
		// residentialStatus,
		// roomNumber,
		studentID,
		studentName,
		// studentType,
		// yearAdmitted,
		department,
		password,
		// confirmPass,
		phoneNumber,
	} = input;

	try {
		const findStudent = await Student.findOne({ studentID });
		if (findStudent) {
			return new Error(`Student with ID ${studentID} already exists`);
		}
		const addNewStudent = await new Student({
			email,
			gender,
			dateOfBirth,
			// hallOfResidence,
			// residentialStatus,
			// roomNumber,
			studentID,
			studentName,
			// studentType,
			// yearAdmitted,
			department,
			// password,
			// confirmPass,
			phoneNumber,
		});

		const _login = new Login({ studentID, password });
		await _login.save();

		await addNewStudent.save();
		return addNewStudent;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	addNewStudent,
};
