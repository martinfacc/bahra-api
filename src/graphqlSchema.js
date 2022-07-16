import { makeExecutableSchema } from '@graphql-tools/schema'
import {
	provincias,
	departamentos,
	municipios,
	aglomerados,
	asentamientos
} from './data/index.js'
import { findByArgs, filterByArgs } from './helpers.js'

const typeDefs = `
	type Provincia {
		id: ID!
		nombre: String
		codigo: String
		departamentos: [Departamento]
	}

	type Departamento {
		id: ID!
		nombre: String
		codigo: String
		provinciaId: ID
		provincia: Provincia
		municipios: [Municipio]
	}

	type Municipio {
		id: ID!
		nombre: String
		codigo: String
		provinciaId: ID
		departamentoId: ID
		provincia: Provincia
		departamento: Departamento
		asentamientos: [Asentamiento]
	}

	type Aglomerado {
		id: ID!
		nombre: String
		codigo: String
		asentamientos: [Asentamiento]
	}

	type Asentamiento {
		id: ID!
		nombre: String
		codigo: String
		tipo: String
		latitud: String
		longitud: String
		fuente: String
		provinciaId: ID
		aglomeradoId: ID
		departamentoId: ID
		municipioId: ID
		provincia: Provincia
		aglomerado: Aglomerado
		departamento: Departamento
		municipio: Municipio
	}

	type Query {
		provincias(id: Int, nombre: String, codigo: String): [Provincia]
		departamentos(id: Int, nombre: String, codigo: String, provinciaId: Int ): [Departamento]
		municipios(id: Int, nombre: String, codigo: String, provinciaId: Int, departamentoId: Int): [Municipio]
		aglomerados(id: Int, nombre: String, codigo: String): [Aglomerado]
		asentamientos(id: Int, nombre: String, codigo: String, provinciaId: Int, departamentoId: Int, municipioId: Int, aglomeradoId: Int): [Asentamiento]

		provincia(id: Int, nombre: String, codigo: String): Provincia
		departamento(id: Int, nombre: String, codigo: String, provinciaId: Int ): Departamento
		municipio(id: Int, nombre: String, codigo: String, provinciaId: Int, departamentoId: Int): Municipio
		aglomerado(id: Int, nombre: String, codigo: String): Aglomerado
		asentamiento(id: Int, nombre: String, codigo: String, provinciaId: Int, departamentoId: Int, municipioId: Int, aglomeradoId: Int): Asentamiento
	}
`

const resolvers = {
	Query: {
		provincia: (parent, args) => findByArgs(provincias, args),
		departamento: (parent, args) => findByArgs(departamentos, args),
		municipio: (parent, args) => findByArgs(municipios, args),
		aglomerado: (parent, args) => findByArgs(aglomerados, args),
		asentamiento: (parent, args) => findByArgs(asentamientos, args),

		provincias: (parent, args) => filterByArgs(provincias, args),
		departamentos: (parent, args) => filterByArgs(departamentos, args),
		municipios: (parent, args) => filterByArgs(municipios, args),
		aglomerados: (parent, args) => filterByArgs(aglomerados, args),
		asentamientos: (parent, args) => filterByArgs(asentamientos, args)
	},

	Provincia: {
		departamentos: parent => departamentos.filter(departamento => departamento.provinciaId === parent.id)
	},

	Departamento: {
		provincia: parent => provincias.find(provincia => provincia.id === parent.provinciaId),
		municipios: parent => municipios.filter(municipio => municipio.departamentoId === parent.id)
	},

	Municipio: {
		provincia: parent => provincias.find(provincia => provincia.id === parent.provinciaId),
		departamento: parent => departamentos.find(departamento => departamento.id === parent.departamentoId),
		asentamientos: parent => asentamientos.filter(asentamiento => asentamiento.municipioId === parent.id)
	},

	Aglomerado: {
		asentamientos: parent => asentamientos.filter(asentamiento => asentamiento.aglomeradoId === parent.id)
	},

	Asentamiento: {
		provincia: parent => provincias.find(provincia => provincia.id === parent.provinciaId),
		aglomerado: parent => aglomerados.find(aglomerado => aglomerado.id === parent.aglomeradoId),
		departamento: parent => departamentos.find(departamento => departamento.id === parent.departamentoId),
		municipio: parent => municipios.find(municipio => municipio.id === parent.municipioId)
	}
}

export default makeExecutableSchema({
	typeDefs,
	resolvers
})
