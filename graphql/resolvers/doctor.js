const { addNewDoctor } = require("./Docotrs/addNewDoctor");
const doctorResolvers = {
	Query: {},
	Mutation: {
		addNewDoctor,
	},
};

module.exports = { doctorResolvers };
