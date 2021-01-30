const { Schema, model, SchemaTypes } = require("mongoose");

let schema = new Schema({
	// ID of the user this notification belongs to.
	userID: { type: SchemaTypes.ObjectId, ref: "Student" },
	notifications: [
		new Schema({
			date: Date,
			title: String,
			message: String,
			seen: {
				type: Boolean,
				default: false,
			},
		}),
	],
});

module.exports = notificationsData = model("Notifications", schema);
