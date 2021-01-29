const getStudentProfile = async (_, { studentID }, { models }) => {
	return await models.studentModel.findOne({ studentID }).populate("appointmentList").exec();
};

module.exports = { getStudentProfile };
