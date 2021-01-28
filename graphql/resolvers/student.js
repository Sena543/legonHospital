const studentResolvers = {
	Query: {
		students: () => {
			return [
				{
					studentName: "Charles",
					email: "charles@gmail.com",
					studentID: "132",
					residentialStatus: "Resident",
				},
			];
		},
	},
	Mutation: {},
};

module.exports = {
	studentResolvers,
};
