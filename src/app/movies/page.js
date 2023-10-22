import EntityCard from '../../components/EntityCard'

export default function Movies() {
	const data = {
		image: 'http://localhost:8080/2016603.jpg',
		title: 'Mission: Impossible - Dead Reckoning Part One 324324324 4434',
		id: 123,
		// rating: 3.287,
		isWatched: true,
		rating: {
			user: 4,
			imdb: 5.34,
			rt: 77
		},
		tags: [
			{ title: 'Horror', type: 'genre' },
			{ title: 'Adventure', type: 'genre' },
			{ title: 'Adventure', type: 'genre' },
			{ title: 'Based on real events' }
		]
	}
	return (
		<>
			<h1>movies</h1>
			<EntityCard data={data} extended={true} size='lg' />
		</>
	)
}
