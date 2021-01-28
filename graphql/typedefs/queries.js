const { gql } = require("apollo-server");

const query = gql`
	scalar Upload
	type Query {
		# students: String!
		students: [Student!]
	}
	type Mutation {
		addNewStudent(input: StudentInput): Student
	}
`;

module.exports = {
	query,
};
