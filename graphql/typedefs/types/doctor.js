const { gql } = require("apollo-server");

const DoctorType = gql`
	type Doctor {
		doctorID: ID!
		doctorName: String!
		email: String!
		timesAvaiable: [String!]!
		officeNumber: String!
	}

	input DoctorInput {
		doctorID: ID!
		doctorName: String!
		email: String!
		timesAvaiable: [String!]!
		officeNumber: String!
	}
`;

module.exports = { DoctorType };
