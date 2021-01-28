const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const bodyParser = require("body-parser");
const { graphqlUploadExpress } = require("graphql-upload");
const { typeDefs } = require("./graphql/typedefs");
const { resolvers } = require("./graphql/resolvers");
const { connect } = require("mongoose");
const models = require("./models/index");
const app = express();

const db_url =
	"mongodb+srv://senanu:senanu@legonhospital.tjin0.mongodb.net/legonHospital?retryWrites=true&w=majority";
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
	context: {
		models,
	},
});

server.applyMiddleware({ app, path: "/" });

app.listen({ port: 8000 }, () => {
	console.log("Apollo Server on http://localhost:8000/");
});
