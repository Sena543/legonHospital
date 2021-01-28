const { addNewDoctor } = require("./Doctors/addNewDoctor");

const doctorResolvers = {
	Query: {},
	Mutation: {
		addNewDoctor,
	},
};

module.exports = { doctorResolvers };
