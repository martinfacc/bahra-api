export const removeAccent = (string) => string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export const normalizeValue = (value) => removeAccent(value.toString().toLowerCase())

export const areEqual = (a, b) => {
	if (!a || !b) return false
	if (a === b) return true
	if (normalizeValue(a) === normalizeValue(b)) return true
	return false
}

export const isEmpty = (object) => !object || Object.keys(object).length === 0

export const findByArgs = (collection, args) => {
	const { id, ...rest } = args
	if (isEmpty(args)) return null
	const restKeys = Object.keys(rest)
	const result = collection.find(item => {
		if (id) return item.id === id
		return restKeys.every(key => areEqual(item[key], rest[key]))
	})
	return result
}

export const filterByArgs = (collection, args) => {
	const { id, ...rest } = args
	const restKeys = Object.keys(rest)
	const result = collection.filter(item => {
		if (id) return item.id === id
		return restKeys.every(key => areEqual(item[key], rest[key]))
	})
	return result
}
