const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

/**
 * studentID should be changed to user ID
 */

const loginSchema = new Schema({
	studentID: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

loginSchema.pre("save", function (next) {
	let student = this;
	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(student.password, salt, function (err, hash) {
			if (err) return next(err);
			student.password = hash;
			next();
		});
	});
});

module.exports = loginModel = model("Login", loginSchema);
