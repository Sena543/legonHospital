const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
	doctorrID: {
		type: String,
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
	officeNumber: {
		type: String,
	},
});

module.exports = doctorData = model("Doctor", doctorSchema);
