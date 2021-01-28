const getAllStudents = async (_, __, { models }) => {
	console.log(models);
	return await models.studentModel.find({});
};

module.exports = {
	getAllStudents,
};
