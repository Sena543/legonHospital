const { combineResolvers } = require("graphql-resolvers");
const { isAuthenticated } = require("../auth/authorizations");

const getStudentProfile = combineResolvers(isAuthenticated, async (_, { studentID }, { models }) => {
	return await models.studentModel.findOne({ studentID }).populate("appointmentList").exec();
});

module.exports = { getStudentProfile };
