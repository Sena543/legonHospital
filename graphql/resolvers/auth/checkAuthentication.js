const jwt = require("jsonwebtoken");

function checkUserAuthentication(req) {
	const token = req.headers["authorization"];
	if (token) {
		try {
			return jwt.verify(token, process.env.SECRET);
		} catch (e) {
			throw new AuthenticationError("Your session expired. Sign in again.");
		}
	}
}

module.exports = { checkUserAuthentication };