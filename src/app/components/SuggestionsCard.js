import { Card, CardContent, Typography } from '@mui/joy'

import SuggestionsCarousel from './SuggestionsCarousel'

export default function SuggestionsCard() {
	const suggestions = [
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible - Dead Reckoning Part One',
			id: 123,
			rating: {
				user: 4,
				imdb: 5.34,
				rt: 77
			},
			isWatched: true,
			tags: [
				{ title: 'Horror', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Based on real events' }
			],
			properties: {
				countries: ['USA', 'Canada'],
				runtime: 1000 * 60 * 88,
				premierWorld: '2022-10-16',
				premierDigital: '2022-11-16',
				productionCompanies: ['FOX', 'Disney']
			}
		},
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible',
			id: 123,
			rating: {
				user: 8,
				imdb: 9,
				rt: 55
			},
			isWatched: true,
			tags: [
				{ title: 'Horror', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Adventure', type: 'genre' },
				{ title: 'Based on real events' }
			],
			properties: {
				countries: ['USA', 'Canada'],
				runtime: 1000 * 60 * 88,
				premierWorld: '2022-10-16',
				premierDigital: '2022-11-16',
				productionCompanies: ['FOX', 'Disney']
			}
		}
	]

	return (
		<Card>
			<Typography level='h2'>What to watch</Typography>
			<CardContent>
				<SuggestionsCarousel suggestions={suggestions} />
			</CardContent>
		</Card>
	)
}
