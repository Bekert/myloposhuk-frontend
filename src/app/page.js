import {
	Card,
	Grid,
	List,
	ListItem,
	ListItemContent,
	ListItemDecorator,
	ListSubheader
} from '@mui/joy'
import EntityCard from './components/EntityCard'
import {
	ArrowForward,
	ArrowForwardIos,
	ArrowRight,
	LiveTv,
	Movie,
	Theaters
} from '@mui/icons-material'
import Link from 'next/link'
import SuggestionsCard from './components/SuggestionsCard'

// only server
export default function Home() {
	const dataFromServer = [
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible - Dead Reckoning Part One',
			id: 123,
			rating: 3.287,
			isWatched: true
		},
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible ',
			id: 123,
			rating: 3.287,
			isWatched: true
		},
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible - Dead Reckoning Part One',
			id: 123,
			rating: 3.287,
			isWatched: true
		},
		{
			image: 'http://localhost:8080/2016603.jpg',
			title: 'Mission: Impossible - Dead Reckoning Part One 324324324 4434',
			id: 123,
			rating: 3.287,
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
								<Link href={url}>
									<ListSubheader
										sx={{
											alignItems: 'end',
											cursor: 'pointer',
											'&:hover': { textDecoration: 'underline' }
										}}
										component='h3'
									>
										<Icon /> {title} <ArrowForwardIos />
									</ListSubheader>
								</Link>
								<List orientation='horizontal' sx={{ overflow: 'scroll' }}>
									{data.map((data, i) => (
										<ListItem key={i}>
											<ListItemContent>
												<EntityCard {...data} />
											</ListItemContent>
										</ListItem>
									))}
								</List>
							</ListItem>
						))}
					</List>
				</Grid>
				{/* somehow add conditional rendering here in the future */}
				<Grid xs={0} md={4}>
					<SuggestionsCard />
				</Grid>
			</Grid>
		</>
	)
}
