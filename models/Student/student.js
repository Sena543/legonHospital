const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
	studentID: {
		type: String,
		required: true,
		unique: true,
	},
	studentName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	dateOfBirth: {
		type: String,
		required: true,
	},
	residentialStatus: {
		type: String,
		default: null,
		required: true,
		enum: ["Resident", "Non Resident"],
	},
	hallofResidence: {
		type: String,
		default: "Not Applicable",
	},
	gender: {
		type: String,
		//required:true
		enum: ["Male", "Female", "Rather Not Say "],
	},
	yearAdmitted: {
		type: String,
		// required:true
	},
	appointmentList: [
		{
			type: Schema.Types.ObjectId,
			ref: "Appointment",
		},
	],
});

module.exports = studentModel = model("Student", studentSchema);
