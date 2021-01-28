const { gql } = require("apollo-server");

const query = gql`
	scalar Upload
	type Query {
		students: [Student!]
	}
	type Mutation {
		addNewStudent(input: StudentInput): Student
		bookAppointment(input: AppointmentInput): Appointment
	}
`;

module.exports = {
	query,
};
