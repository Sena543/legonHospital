const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
	doctorrID: {
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
	timesAvailable: [
		{
			type: String,
			required: true,
		},
	],
	officeNumber: {
		type: String,
	},
});

module.exports = doctorModel = model("Doctor", doctorSchema);
