const addNewStudent = async (_, { input }, { models }) => {
	const Student = models.studentModel;
	const { studentID, studentName, hallOfResidence, email, residentialStatus, dateOfBirth } = input;
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
		await addNewStudent.save();
		return addNewStudent;
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	addNewStudent,
};
