const { Schema, model, Mongoose } = require("mongoose");

const appointmentSchema = new Schema(
	{
		studentID: {
			type: String,
			required: true,
			// ref: "Student",
		},
		doctorID: {
			type: String,
			required: true,
			// ref: "Doctor",
		},
		checkupType: {
			type: String,
			required: true,
		},
		appointmentStartTime: {
			type: String,
			required: true,
		},
		endTime: {
			type: String,
		},
		arrivalConfirmation: {
			type: Boolean,
			default: null,
		},
		appointmentDate: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = appointmentModel = model("Appointment", appointmentSchema);
