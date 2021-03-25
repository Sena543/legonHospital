const findStudentID = async (_, { studentID }, { models }) => {
	const Student = models.studentModel;
	return await Student.findOne({ studentID });
};

module.exports = { findStudentID };
