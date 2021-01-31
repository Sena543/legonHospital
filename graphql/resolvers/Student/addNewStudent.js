const addNewStudent = async (_, { input }, { models }) => {
	const Student = models.studentModel;
	const Login = models.loginModel;
	const { studentID, studentName, hallOfResidence, email, residentialStatus, dateOfBirth, password } = input;
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
            
		});
		const _login = new Login({ staffID, password });
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
