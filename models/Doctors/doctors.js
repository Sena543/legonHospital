const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
	doctorID: {
		type: String,
		unique: true,
		required: true,
	},
	doctorName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	timesAvailable: [String],
	officeNumber: {
		type: String,
	},
});

module.exports = doctorModel = model("Doctor", doctorSchema);
