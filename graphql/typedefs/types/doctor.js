const { gql } = require("apollo-server");

const DoctorType = gql`
	type Doctor {
		doctorID: ID!
		doctorName: String!
		email: String!
		timesAvailable: [String!]!
		officeNumber: String!
	}

	input DoctorInput {
		doctorID: ID!
		doctorName: String!
		email: String!
		timesAvailable: [String!]!
		password: String!
		officeNumber: String!
	}
`;

module.exports = { DoctorType };
