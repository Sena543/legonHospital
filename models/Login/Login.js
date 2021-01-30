const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const loginSchema = new Schema({
	staffID: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

loginSchema.pre("save", function (next) {
	let staff = this;
	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(staff.password, salt, function (err, hash) {
			if (err) return next(err);
			staff.password = hash;
			next();
		});
	});
});

module.exports = loginModel = model("Login", loginSchema);
