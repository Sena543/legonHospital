const { gql } = require("apollo-server");

const studentType = gql`
	type Student {
		studentName: String!
		studentID: ID!
		email: String!
		dateOfBirth: String!
		# residentialStatus: String!
		# hallOfResidence: String
		gender: String!
		# roomNumber: String
		# yearAdmitted: String
		# studentType: String!
		department: String!
		phoneNumber: String
		appointmentList: [Appointment]
	}

	input StudentInput {
		studentName: String!
		studentID: ID!
		email: String!
		dateOfBirth: String!
		gender: String!
		department: String!
		# roomNumber: String
		# yearAdmitted: String
		# studentType: String!
		# residentialStatus: String!
		# hallOfResidence: String
		password: String!
		phoneNumber: String
	}
`;

module.exports = {
	studentType,
};
