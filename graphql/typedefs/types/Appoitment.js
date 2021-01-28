const { gql } = require("apollo-server");

const AppointmentType = gql`
	type Appointment {
		studentID: ID!
		doctorID: ID!
		checkupType: String!
		appointmentStartTime: String!
		endTime: String!
		arrivalConfirmation: Boolean
	}

	input AppointmentInput {
		studentID: ID!
		doctorID: ID!
		checkupType: String!
		appointmentStartTime: String!
		endTime: String!
		arrivalConfirmation: Boolean
	}
`;
