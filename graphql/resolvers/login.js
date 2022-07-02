const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { AuthenticationError, UserInputError } = require("apollo-server-express");

function createToken(user, secret, expirationTime) {
	return jwt.sign({ user }, secret, { expiresIn: expirationTime });
}

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
