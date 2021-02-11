const addNewStudent = async (_, { input }, { models }) => {
	const Student = models.studentModel;
	const {
		studentID,
		studentName,
		hallOfResidence,
		email,
		residentialStatus,
		dateOfBirth,
		gender,
		yearAddmitted,
		password,
	} = input;
	try {
		const findStudent = await Student.findOne({ studentID });
		if (findStudent) {
			return new Error(`Student with ID ${studentID} already exists`);
		}
		const addNewStudent = await new Student({
			studentID,
			dateOfBirth,
			studentName,
			hallOfResidence,
			email,
			residentialStatus,
			yearAddmitted,
			gender,
		});
		// <<<<<<< HEAD
		// 		const login = await models.loginModel(studentID, password);
		// 		await login.save();

		// =======
		const _login = new Login({ staffID, password });
		await _login.save();

		// >>>>>>> d210a022bc184876fce497c451eb445738a8f9ea
		await addNewStudent.save();
		return addNewStudent;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	addNewStudent,
};
