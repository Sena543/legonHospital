const { gql } = require("apollo-server");

const query = gql`
	scalar Upload
	type Token {
		token: String!
	}
	type Query {
		students: [Student!]
		getStudentProfile(studentID: ID!): Student!
		getDoctorAppointments(doctorID: ID): [Appointment]
		getAppointmentHistory(studentID: ID!): [Appointment]
		getAvailableDoctors(timeSelected: String): [Doctor]
		findStudentID(studentID: String!): Student
	}
	type Mutation {
		loginUser(studentID: ID!, password: String!): Token
		addNewStudent(input: StudentInput): Student
		bookAppointment(input: AppointmentInput): Appointment
		addNewDoctor(input: DoctorInput): Doctor
		notifications: String!
		confirmArrival(studentID: String!): String
	}
`;

module.exports = {
	query,
};
