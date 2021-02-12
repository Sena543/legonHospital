const { gql } = require("apollo-server");

const studentType = gql`
	type Student {
		studentName: String!
		studentID: ID!
		email: String!
		dateOfBirth: String!
		residentialStatus: String!
		hallOfResidence: String
		gender: String!
		roomNumber: String
		yearAdmitted: String
		studentType: String!
		# hometown: String
		appointmentList: [Appointment]
	}

	input StudentInput {
		studentName: String!
		studentID: ID!
		email: String!
		dateOfBirth: String!
		gender: String!
		roomNumber: String
		yearAdmitted: String
		studentType: String!
		# hometown: String
		residentialStatus: String!
		hallOfResidence: String
		password:String!

	}
`;

module.exports = {
	studentType,
};
