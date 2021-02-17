const { ForbiddenError } = require("apollo-server");
const { skip } = require("graphql-resolvers");

//middelware for checking if user is authenticated
const isAuthenticated = (parent, args, { user }) =>
	user ? skip : new ForbiddenError("Not authenticated. Please Sign in");

module.exports = { isAuthenticated };
