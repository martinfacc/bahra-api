import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import graphqlSchema from './graphqlSchema.js'
import logger from './logger.js'
import cors from 'cors'
import path from 'path'
import favicon from 'serve-favicon'

const { APP_PORT, APP_URL } = process.env
const __dirname = path.resolve()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))

app.use(
	'/',
	graphqlHTTP({
		graphiql: true,
		schema: graphqlSchema,
	})
)

app.use((request, response) => response.status(404).end())

app.listen(APP_PORT, () => {
	logger.info(`BAHRA-API on ${APP_URL}`)
	console.log(`BAHRA-API on ${APP_URL}`)
})
