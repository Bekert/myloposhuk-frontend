import { Box, Card, CardContent, Chip, Typography } from '@mui/joy'
import Image from 'next/image'
import Link from 'next/link'
import { formatRating } from '../../lib/utils'

// will be a server component
export default function EntityCard({ image, title, id, isWatched, rating }) {
	const { rating: formattedRating, color: ratingColor } = formatRating(rating)

	return (
		<Box sx={{ width: 'fit-content' }}>
			<Link href={`/${id}`}>
				<Card
					sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'background.level2' } }}
				>
					<CardContent sx={{ width: 240, maxHeight: 420 }}>
						<Box
							sx={{
								borderRadius: 'md',
								position: 'relative',
								overflow: 'hidden',
								height: 360
							}}
						>
							<Chip
								variant='solid'
								color={ratingColor}
								sx={{ position: 'absolute', margin: '7px 0 0 7px' }}
							>
								{formattedRating}
							</Chip>

							{isWatched && (
								<Chip
									variant='solid'
									sx={{ position: 'absolute', right: 0, margin: '7px 7px 0 0' }}
								>
									Watched
								</Chip>
							)}

							<Image src={image} width={240} height={360} alt={title} />
						</Box>
						<Typography
							level='h3'
							fontSize='lg'
							noWrap={false}
							sx={{ textAlign: 'center', fontWeight: 'md' }}
						>
							{title}
						</Typography>
					</CardContent>
				</Card>
			</Link>
		</Box>
	)
}
