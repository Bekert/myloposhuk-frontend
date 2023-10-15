export function capitalizeFirstLetter(str) {
	const chars = str.split('')
	const firstLetter = chars.shift()

	return firstLetter.toUpperCase() + chars.join('')
}
