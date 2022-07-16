import { filterByArgs } from '../src/helpers.js'
import { provincias, aglomerados, departamentos, municipios, asentamientos } from '../src/data/index.js'

test('Find all provinces with id "1"', () => {
	const result = filterByArgs(provincias, { id: 1 })
	expect(result).toBeDefined()
	expect(result.length).toBe(1)
})

test('Find all provinces with id "-1"', () => {
	const result = filterByArgs(provincias, { id: -1 })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all provinces with name "Buenos Aires"', () => {
	const result = filterByArgs(provincias, { nombre: 'Buenos Aires' })
	expect(result).toBeDefined()
	expect(result.length).toBeGreaterThan(0)
})

test('Find all provinces with an invalid column', () => {
	const result = filterByArgs(provincias, { invalidColumn: 'Buenos Aires' })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all agglomerates with id "1"', () => {
	const result = filterByArgs(aglomerados, { id: 1 })
	expect(result).toBeDefined()
	expect(result.length).toBe(1)
})

test('Find all agglomerates with id "-1"', () => {
	const result = filterByArgs(aglomerados, { id: -1 })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all agglomerates with name "Gran Mendoza"', () => {
	const result = filterByArgs(aglomerados, { nombre: 'Gran Mendoza' })
	expect(result).toBeDefined()
	expect(result.length).toBeGreaterThan(0)
})

test('Find all agglomerates with an invalid column', () => {
	const result = filterByArgs(aglomerados, { invalidColumn: 'Gran Mendoza' })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all departaments with id "1"', () => {
	const result = filterByArgs(departamentos, { id: 1 })
	expect(result).toBeDefined()
	expect(result.length).toBe(1)
})

test('Find all departaments with id "-1"', () => {
	const result = filterByArgs(departamentos, { id: -1 })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all departaments with name "Alberti"', () => {
	const result = filterByArgs(departamentos, { nombre: 'Alberti' })
	expect(result).toBeDefined()
	expect(result.length).toBeGreaterThan(0)
})

test('Find all departaments with an invalid column', () => {
	const result = filterByArgs(departamentos, { invalidColumn: 'Alberti' })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all departaments with provinciaId "1"', () => {
	const result = filterByArgs(departamentos, { provinciaId: 1 })
	expect(result).toBeDefined()
	expect(result.length).toBeGreaterThan(1)
})

test('Find all municipalities with id "1"', () => {
	const result = filterByArgs(municipios, { id: 1 })
	expect(result).toBeDefined()
	expect(result.length).toBe(1)
})

test('Find all municipalities with id "-1"', () => {
	const result = filterByArgs(municipios, { id: -1 })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all municipalities with name "Guaymallén"', () => {
	const result = filterByArgs(municipios, { nombre: 'Guaymallén' })
	expect(result).toBeDefined()
	expect(result.length).toBeGreaterThan(0)
})

test('Find all municipalities with an invalid column', () => {
	const result = filterByArgs(municipios, { invalidColumn: 'Guaymallén' })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all municipalities with departamentoId "75"', () => {
	const result = filterByArgs(municipios, { departamentoId: 75 })
	expect(result).toBeDefined()
	expect(result.length).toBeGreaterThan(1)
})

test('Find all settlements with id "780"', () => {
	const result = filterByArgs(asentamientos, { id: 780 })
	expect(result).toBeDefined()
	expect(result.length).toBe(1)
})

test('Find all settlements with id "-1"', () => {
	const result = filterByArgs(asentamientos, { id: -1 })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all settlements with name "Vicente Pereda"', () => {
	const result = filterByArgs(asentamientos, { nombre: 'Vicente Pereda' })
	expect(result).toBeDefined()
	expect(result.length).toBeGreaterThan(0)
})

test('Find all settlements with an invalid column', () => {
	const result = filterByArgs(asentamientos, { invalidColumn: 'Vicente Pereda' })
	expect(result).toBeDefined()
	expect(result.length).toBe(0)
})

test('Find all settlements with municipioId "1"', () => {
	const result = filterByArgs(asentamientos, { municipioId: 1 })
	expect(result).toBeDefined()
	expect(result.length).toBeGreaterThan(1)
})
