import { removeAccent } from '../src/helpers.js'

test('removeAccent("áéíóúñ")', () => {
	const result = removeAccent('áéíóúñ')
	expect(result).toBe('aeioun')
})

test('removeAccent("ÁÉÍÓÚÑ")', () => {
	const result = removeAccent('ÁÉÍÓÚÑ')
	expect(result).toBe('AEIOUN')
})

test('removeAccent("âêôûãõũ")', () => {
	const result = removeAccent('âêôûãõũ')
	expect(result).toBe('aeouaou')
})
