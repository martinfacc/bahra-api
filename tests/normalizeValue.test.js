import { normalizeValue } from '../src/helpers.js'

test('normalizeValue("áé íóú ñ")', () => {
	const result = normalizeValue('áé íóú ñ')
	expect(result).toBe('ae iou n')
})

test('normalizeValue("ÁÉÍÓ ÚÑ")', () => {
	const result = normalizeValue('ÁÉÍÓ ÚÑ')
	expect(result).toBe('aeio un')
})

test('normalizeValue("Hola Mundo")', () => {
	const result = normalizeValue('Hola Mundo')
	expect(result).toBe('hola mundo')
})

test('normalizeValue(900)', () => {
	const result = normalizeValue(900)
	expect(result).toBe('900')
})

test('normalizeValue(900.00)', () => {
	const result = normalizeValue(900.00)
	expect(result).toBe('900')
})

test('normalizeValue("HoLAaA900")', () => {
	const result = normalizeValue('HoLAaA900')
	expect(result).toBe('holaaa900')
})