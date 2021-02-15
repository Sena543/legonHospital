const { studentResolvers } = require("./student");
const { doctorResolvers } = require("./doctor");
const { LoginResolver } = require("./login");
const resolvers = [studentResolvers, LoginResolver, doctorResolvers];

module.exports = {
	resolvers,
};
