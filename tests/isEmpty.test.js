import { isEmpty } from '../src/helpers.js'

test('isEmpty("")', () => {
	const result = isEmpty('')
	expect(result).toBe(true)
})

test('isEmpty([])', () => {
	const result = isEmpty([])
	expect(result).toBe(true)
})

test('isEmpty({})', () => {
	const result = isEmpty({})
	expect(result).toBe(true)
})

test('isEmpty(null)', () => {
	const result = isEmpty(null)
	expect(result).toBe(true)
})

test('isEmpty(undefined)', () => {
	const result = isEmpty(undefined)
	expect(result).toBe(true)
})