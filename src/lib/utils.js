export function capitalizeFirstLetter(str) {
	const chars = str.split('')
	const firstLetter = chars.shift()

	return firstLetter.toUpperCase() + chars.join('')
}

export function formatRating(rating, type) {
	if (type === 'rt') {
		const ratingColor = rating > 70 ? 'success' : rating > 40 ? 'warning' : 'danger'
		return { rating: rating + '%', color: ratingColor }
	} else {
		const formattedRating = rating % 1 ? Math.round(rating * 10) / 10 : (+rating).toFixed(1)
		const ratingColor = rating > 7 ? 'success' : rating > 4 ? 'warning' : 'danger'

		return { rating: formattedRating, color: ratingColor }
	}
}

export function formatTime(time) {
	time = new Date(time)

	const hours = time.getHours()
	const minutes = time.getMinutes()

	return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${minutes} ${
		minutes > 1 ? 'minutes' : 'minute'
	}`
}

export function formatDate(date) {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	}).format(new Date(date))
}
