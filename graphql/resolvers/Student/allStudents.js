const getAllStudents = async (_, __, { models }) => {
	return await models.studentModel.find({});
};

module.exports = {
	getAllStudents,
};
