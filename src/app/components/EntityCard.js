import { Box, Card, CardContent, Typography } from '@mui/joy'
import Image from 'next/image'
import Link from 'next/link'

// will be a server component
export default function EntityCard({ entityId }) {
	const dataFromServer = {
		imageUrl: 'http://localhost:8080/2016603.jpg',
		title: 'Mission: Impossible - Dead Reckoning Part One'
	}
	const { imageUrl, title } = dataFromServer

	return (
		<Box sx={{ width: 'fit-content' }}>
			<Link href={`/${entityId}`}>
				<Card sx={{ cursor: 'pointer' }}>
					<CardContent sx={{ width: 240 }}>
						<Box sx={{ borderRadius: 'md', overflow: 'hidden', height: 360 }}>
							<Image src={imageUrl} width={240} height={360} alt={title} />
						</Box>
						<Typography
							level='h3'
							fontSize='lg'
							noWrap={false}
							sx={{ textAlign: 'center' }}
						>
							{title}
						</Typography>
					</CardContent>
				</Card>
			</Link>
		</Box>
	)
}
