const { gql } = require("apollo-server");

const AppointmentType = gql`
	type Appointment {
		studentID: Student!
		# studentID: ID!
		doctorID: Doctor!
		# doctorID: ID!
		checkupType: String!
		appointmentStartTime: String!
		endTime: String!
		arrivalConfirmation: Boolean
		appointmentDate: String!
	}

	input AppointmentInput {
		studentID: ID!
		doctorID: ID!
		checkupType: String!
		appointmentStartTime: String!
		endTime: String!
		arrivalConfirmation: Boolean
		appointmentDate: String!
	}
`;

module.exports = { AppointmentType };