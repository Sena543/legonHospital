const { Schema, model, Mongoose } = require("mongoose");

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
	},
	{ timestamps: true }
);

module.exports = appointmentModel = model("Appointment", appointmentSchema);
