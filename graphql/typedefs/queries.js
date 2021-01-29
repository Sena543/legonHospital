const { gql } = require("apollo-server");

const query = gql`
	scalar Upload
	type Query {
		students: [Student!]
		getDoctorAppointments(doctorID: ID): [Appointment]
	}
	type Mutation {
		addNewStudent(input: StudentInput): Student
		bookAppointment(input: AppointmentInput): Appointment
		addNewDoctor(input: DoctorInput): Doctor
	}
`;

module.exports = {
	query,
};
