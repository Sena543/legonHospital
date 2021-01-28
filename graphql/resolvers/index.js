const { studentResolvers } = require("./student");
const { doctorResolvers } = require("./doctor");
const resolvers = [studentResolvers, doctorResolvers];

module.exports = {
	resolvers,
};
