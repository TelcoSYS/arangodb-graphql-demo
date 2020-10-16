'use strict';
/*
 *  Starting with graphql 0.12 you can also use the official graphql library 
 *  if you include it in the node_modules folder of your service bundle
 *  https://www.arangodb.com/docs/stable/foxx-reference-modules-graph-ql.html
 */
const graphql = require('graphql');
const createGraphqlRouter = require('@arangodb/foxx/graphql');

// GraphQL Foxx Router
const router = createGraphqlRouter({
	schema: require('./schema'),
	rootValue: require('./resolvers'),
	graphiql: true,
	graphql: graphql
})
.summary('GraphQL endpoint')
.description('GraphQL endpoint for the Star Wars GraphQL example.');

module.context.use(router);
console.log('GraphQL endpoint enabled')
