import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import graphqlSchema from './graphqlSchema.js'

const app = express()
const { APP_PORT } = process.env

app.use('/', graphqlHTTP({
	graphiql: true,
	schema: graphqlSchema,
}))

app.listen(APP_PORT, () => console.log(`BAHRA-API listening on port ${APP_PORT}!`))