const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema(
	{
		studentID: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Student",
		},
		doctorID: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Doctor",
		},
		checkupType: {
			type: String,
			required: true,
			enum: ["Regular Checkup", "Medical Checkup", "Dental Checkup", "Results Collection"],
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
