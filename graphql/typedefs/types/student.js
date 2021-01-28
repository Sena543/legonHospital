const { gql } = require("apollo-server");

const studentType = gql`
	type Student {
		studentName: String!
		studentID: String!
		email: String!
		dateoFBirth: String!
		residentialStatus: String!
		hallOfResidence: String
	}

	input StudentInput {
		studentName: String!
		studentID: String!
		email: String!
		dateoFBirth: String!
		residentialStatus: String!
		hallOfResidence: String
	}
`;

module.exports = {
	studentType,
};
