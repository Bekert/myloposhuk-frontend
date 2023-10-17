import EntityCard from './components/EntityCard'

// only server
export default function Home() {
	const dataFromServer = [
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible - Dead Reckoning Part One',
			id: 123
		}
	]

	return (
		<>
			{dataFromServer.map((...data) => (
				<EntityCard key={data.id} {...data} />
			))}
			<h1>Premiers: In theaters</h1>
			<h1>Premiers: Online</h1>
			<h1>TV Shows</h1>

			<h1>aside what to watch</h1>
			<h1>aside realese calendar</h1>
		</>
	)
}
