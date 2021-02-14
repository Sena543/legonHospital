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
		phoneNumber,
		roomNumber,
	} = input;

	try {
		console.log(input);
		// const findStudent = await Student.findOne({ studentID });
		// if (findStudent) {
		// 	return new Error(`Student with ID ${studentID} already exists`);
		// }
		// const addNewStudent = await new Student({
		// 	studentID,
		// 	dateOfBirth,
		// 	studentName,
		// 	hallOfResidence,
		// 	email,
		// phoneNumber,
		// roomNumber
		// 	residentialStatus,
		// 	yearAddmitted,
		// 	gender,
		// });

		// const _login = new Login({ staffID, password });
		// await _login.save();

		// await addNewStudent.save();
		// return addNewStudent;
		return input;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	addNewStudent,
};
