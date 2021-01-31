const { gql } = require("apollo-server");

const studentType = gql`
	type Student {
		studentName: String!
		studentID: ID!
		email: String!
		dateOfBirth: String!
		residentialStatus: String!
		hallOfResidence: String
		appointmentList: [Appointment]
	}

	input StudentInput {
		studentName: String!
		studentID: ID!
		email: String!
		dateOfBirth: String!
		residentialStatus: String!
		hallOfResidence: String
		password:String!

	}
`;

module.exports = {
	studentType,
};
