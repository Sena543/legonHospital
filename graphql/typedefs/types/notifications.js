const { gql } = require("apollo-server");

const NotificationType = gql`
	type Notifications {
		title: String!
		message: String!
		date: String!
		seen: Boolean!
	}
`;
module.exports = { NotificationType };
