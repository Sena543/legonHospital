const { studentResolvers } = require("./student");
const { doctorResolvers } = require("./doctor");
const { login } = require("./login");
const resolvers = [studentResolvers, login, doctorResolvers];

module.exports = {
	resolvers,
};
