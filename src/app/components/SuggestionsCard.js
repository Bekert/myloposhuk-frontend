'use client'

import { Box, Card, Chip, Typography } from '@mui/joy'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import EntityCard from './EntityCard'
import Image from 'next/image'
import Rating from './Rating'
import EntityTags from './EntityTags'
import EntityInfo from './EntityInfo'

export default function SuggestionsCard() {
	const data = {
		image: 'http://localhost:8080/2016603.jpg',
		title: 'Mission: Impossible - Dead Reckoning Part One',
		id: 123,
		rating: 3.287,
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

	const { image, title, tags } = data

	// title
	// genres of movie
	// information about moive

	return (
		<Carousel showThumbs={false} showArrows={true} showIndicators={false}>
			<Card sx={{ alignItems: 'center' }}>
				<Box width={240}>
					<Image src={image} width={240} height={360} alt={title} />
				</Box>

				<Typography level='h3' fontSize='lg' noWrap={false} sx={{ textAlign: 'center' }}>
					{title}
				</Typography>

				<Rating imdb={5.63} rt={72} user={4} />

				{/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
					{tags.map(({ title, type }, i) => (
						<Chip
							key={i}
							color={type === 'genre' ? 'primary' : 'neutral'}
							variant='soft'
						>
							{title}
						</Chip>
					))}
				</Box> */}
				<EntityTags tags={tags} />
				<EntityInfo properties={data.properties} />
			</Card>
		</Carousel>
	)
}
