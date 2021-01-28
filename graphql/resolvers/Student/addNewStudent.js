const addNewStudent = async (_, { input }, { models }) => {
	const Student = models.studentSchema;
	try {
		const findStudent = Student.findOne({ studentID: input.studentID });
		if (findStudent) {
			return new Error(`Student with ID ${input.studentID} already exists`);
		}
		const addNewStudent = await new Student({
			...input,
		});
		await addNewStudent.save();
		return addNewStudent;
	} catch (error) {
		console.error(error);
	}
};
