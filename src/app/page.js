import Link from 'next/link'

import { Box, Grid, List, ListItem, ListItemContent, ListSubheader } from '@mui/joy'
import { ArrowForwardIos, LiveTv, Movie, Theaters } from '@mui/icons-material'

import EntityCard from '../components/EntityCard'
import SuggestionsCard from './components/SuggestionsCard'
import CalendarCard from './components/CalendarCard'

export default function Home() {
	const dataFromServer = [
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible - Dead Reckoning Part One',
			id: 123,
			rating: { imdb: 3.287 },
			isWatched: true
		},
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible ',
			id: 123,
			rating: { imdb: 3.287 },
			isWatched: true
		},
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible - Dead Reckoning Part One',
			id: 123,
			rating: { imdb: 3.287 },
			isWatched: true
		},
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible - Dead Reckoning Part One 324324324 4434',
			id: 123,
			rating: { imdb: 3.287 },
			isWatched: true
		}
	]

	const lists = [
		{
			title: 'Premiers: In theaters',
			Icon: Theaters,
			url: '/movies#theaters',
			data: dataFromServer
		},
		{
			title: 'Premiers: Online',
			Icon: Movie,
			url: '/movies#online',
			data: dataFromServer
		},
		{
			title: 'TV Shows',
			Icon: LiveTv,
			url: '/shows',
			data: dataFromServer
		}
	]

	return (
		<>
			<Grid container spacing={2}>
				<Grid xs={12} md={8}>
					<List>
						{lists.map(({ title, Icon, url, data }, i) => (
							<ListItem key={i} nested>
								<ListSubheader>
									<Link href={url}>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'flex-end',
												cursor: 'pointer',
												'&:hover': { textDecoration: 'underline' }
											}}
											component='h3'
										>
											<Icon sx={{ mr: 0.5 }} />
											{/* fighting custom line height */}
											<Box mb={'-3px'}>{title}</Box>
											<ArrowForwardIos />
										</Box>
									</Link>
								</ListSubheader>
								<List orientation='horizontal' sx={{ overflow: 'scroll' }}>
									{data.map((data, i) => (
										<ListItem key={i}>
											<ListItemContent>
												<EntityCard data={data} />
											</ListItemContent>
										</ListItem>
									))}
								</List>
							</ListItem>
						))}
					</List>
				</Grid>
				{/* somehow add conditional rendering here in the future */}
				<Grid xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
					<SuggestionsCard />
					<CalendarCard />
				</Grid>
			</Grid>
		</>
	)
}
