import { findByArgs } from '../src/helpers.js'
import { provincias, aglomerados, departamentos, municipios, asentamientos } from '../src/data/index.js'

test('Find a province with id "1"', () => {
	const result = findByArgs(provincias, { id: 1 })
	expect(result).toBeDefined()
})

test('Find a province with id "-1"', () => {
	const result = findByArgs(provincias, { id: -1 })
	expect(result).toBeUndefined()
})

test('Find a province with name "Buenos Aires"', () => {
	const result = findByArgs(provincias, { nombre: 'Buenos Aires' })
	expect(result).toBeDefined()
})

test('Find a province with an invalid column', () => {
	const result = findByArgs(provincias, { invalidColumn: 'Buenos Aires' })
	expect(result).toBeUndefined()
})

test('Find a agglomerate with id "1"', () => {
	const result = findByArgs(aglomerados, { id: 1 })
	expect(result).toBeDefined()
})

test('Find a agglomerate with id "-1"', () => {
	const result = findByArgs(aglomerados, { id: -1 })
	expect(result).toBeUndefined()
})

test('Find a agglomerate with name "Gran Mendoza"', () => {
	const result = findByArgs(aglomerados, { nombre: 'Gran Mendoza' })
	expect(result).toBeDefined()
})

test('Find a agglomerate with an invalid column', () => {
	const result = findByArgs(aglomerados, { invalidColumn: 'Gran Mendoza' })
	expect(result).toBeUndefined()
})

test('Find a departament with id "1"', () => {
	const result = findByArgs(departamentos, { id: 1 })
	expect(result).toBeDefined()
})

test('Find a departament with id "-1"', () => {
	const result = findByArgs(departamentos, { id: -1 })
	expect(result).toBeUndefined()
})

test('Find a departament with name "Alberti"', () => {
	const result = findByArgs(departamentos, { nombre: 'Alberti' })
	expect(result).toBeDefined()
})

test('Find a departament with an invalid column', () => {
	const result = findByArgs(departamentos, { invalidColumn: 'Alberti' })
	expect(result).toBeUndefined()
})

test('Find a municipality with id "1"', () => {
	const result = findByArgs(municipios, { id: 1 })
	expect(result).toBeDefined()
})

test('Find a municipality with id "-1"', () => {
	const result = findByArgs(municipios, { id: -1 })
	expect(result).toBeUndefined()
})

test('Find a municipality with name "Guaymallén"', () => {
	const result = findByArgs(municipios, { nombre: 'Guaymallén' })
	expect(result).toBeDefined()
})

test('Find a municipality with an invalid column', () => {
	const result = findByArgs(municipios, { invalidColumn: 'Guaymallén' })
	expect(result).toBeUndefined()
})

test('Find a settlement with id "1"', () => {
	const result = findByArgs(asentamientos, { id: 1 })
	expect(result).toBeDefined()
})

test('Find a settlement with id "-1"', () => {
	const result = findByArgs(asentamientos, { id: -1 })
	expect(result).toBeUndefined()
})

test('Find a settlement with name "Vicente Pereda"', () => {
	const result = findByArgs(asentamientos, { nombre: 'Vicente Pereda' })
	expect(result).toBeDefined()
})

test('Find a settlement with an invalid column', () => {
	const result = findByArgs(asentamientos, { invalidColumn: 'Vicente Pereda' })
	expect(result).toBeUndefined()
})
