function createToken(user, secret, expirationTime) {
    return jwt.sign({ user }, secret, { expiresIn: expirationTime })
}

function checkUserAuthentication(req) {
    const token = req.headers['authorization']
    if (token) {
        try {
            return jwt.verify(token, process.env.SECRET);
        } catch (e) {
            throw new AuthenticationError('Your session expired. Sign in again.',);
        }
    }
};



const loginUser = async (_, { staffID, password }, { models, secret }) => {
	const Login = models.loginSchema;
	const _login = await Login.findOne({ staffID });
	if (!_login) return new UserInputError(`User with ID ${staffID} not found. Please check and try again`);

	const match = await bcrypt.compare(password, _login.password);
	if (!match) return new AuthenticationError("Incorrect password!");
	return { token: createToken(_login.staffID, secret, 60 * 60) };
};