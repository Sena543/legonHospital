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
		getWorkingHours(doctorID: ID!): Doctor
	}
	type Mutation {
		loginUser(studentID: ID!, password: String!): Token
		addNewStudent(input: StudentInput): Student
		bookAppointment(input: AppointmentInput): Appointment
		addNewDoctor(input: DoctorInput): Doctor
		notifications: String!
		confirmArrival(studentID: String!): String
		updateWorkingHours(doctorID: ID, timesAvailable: [String]): Doctor
	}
`;

module.exports = {
	query,
};
