require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const bodyParser = require("body-parser");
const { graphqlUploadExpress } = require("graphql-upload");
const { typeDefs } = require("./graphql/typedefs");
const { resolvers } = require("./graphql/resolvers");
const { connect } = require("mongoose");
const { checkUserAuthentication } = require("./graphql/resolvers/auth/checkAuthentication");
const models = require("./models/index");

const app = express();

const db_url = process.env.DB_URL;
// "mongodb+srv://senanu:senanu@legonhospital.tjin0.mongodb.net/legonHospital?retryWrites=true&w=majority";

connect(db_url, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
})
	.then(() => console.log("Database connected"))
	.catch((error) => console.error(error));

app.use(cors("*"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(graphqlUploadExpress());
const server = new ApolloServer({
	resolvers,
	typeDefs,
	uploads: false,
	// context: {
	// models,
	// },
	context: async ({ req }) => {
		// const user = checkUserAuthentication(req);
		return {
			models,
			// user,
			secret: process.env.SECRET,
		};
	},
});

server.applyMiddleware({ app, path: "/gql" });

app.listen({ port: process.env.PORT || 9000 }, () => {
	console.log("Apollo Server on http://localhost:8000/gql");
});
