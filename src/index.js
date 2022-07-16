import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import graphqlSchema from './graphqlSchema.js'
import logger from './logger.js'
import cors from 'cors'

const { APP_PORT } = process.env

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', graphqlHTTP({
	graphiql: true,
	schema: graphqlSchema,
}))

app.use((request, response) => response.status(404).end())

app.listen(APP_PORT, () => logger.info(`BAHRA-API listening on port ${APP_PORT}!`))