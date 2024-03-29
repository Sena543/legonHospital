const jwt = require("jsonwebtoken");
const { AuthenticationError } = require("apollo-server-express");

function checkUserAuthentication(req) {
	const token = req.headers["auth_token"];
	if (token) {
		try {
			return jwt.verify(token, process.env.SECRET);
		} catch (e) {
			// throw new AuthenticationError("Your session expired. Sign in again.");
		}
	}
}

module.exports = { checkUserAuthentication };
