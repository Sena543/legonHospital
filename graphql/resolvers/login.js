const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function createToken(user, secret, expirationTime) {
	return jwt.sign({ user }, secret, { expiresIn: expirationTime });
}

// function checkUserAuthentication(req) {
// 	const token = req.headers["authorization"];
// 	if (token) {
// 		try {
// 			return jwt.verify(token, process.env.SECRET);
// 		} catch (e) {
// 			throw new AuthenticationError("Your session expired. Sign in again.");
// 		}
// 	}
// }

const loginUser = async (_, { studentID, password }, { models, secret }) => {
	const Login = models.loginModel;
	try {
		const _login = await Login.findOne({ studentID });
		if (!_login)
			return new UserInputError(`User with ID ${studentID} not found. Please check and try again`);

		const match = await bcrypt.compare(password, _login.password);
		if (!match) return new AuthenticationError("Incorrect password!");
		return { token: createToken(_login.studentID, secret, "30d") };
	} catch (error) {
		console.trace(error);
	}
};

const LoginResolver = {
	Mutation: {
		loginUser,
	},
};

module.exports = { LoginResolver };
// module.exports = { loginUser };
