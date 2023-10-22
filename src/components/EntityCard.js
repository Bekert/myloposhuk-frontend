import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

import { Box, Card, CardContent, Chip, Typography } from '@mui/joy'

import { formatRating } from '../lib/utils'
import EntityTags from './EntityTags'
import Rating from './Rating'

// sorry god for this
// I don't know how to achive what I want without this shitcode
function LinkWrapper({ shouldBypass, id, children }) {
	if (shouldBypass) return children
	return <Link href={`/${id}`}>{children}</Link>
}

function EntityCard({ data, extended, size }) {
	if (!size) size = 'md'

	const formattedRating = Object.fromEntries(
		Object.entries(data.rating).map(([type, value]) => [type, formatRating(value, type)])
	)

	const factor = size === 'sm' ? 0.7 : size === 'lg' ? 1.3 : 1

	return (
		<Box sx={{ width: 'fit-content' }}>
			<LinkWrapper shouldBypass={extended} id={data.id}>
				<Card
					sx={
						!extended && {
							cursor: 'pointer',
							'&:hover': { backgroundColor: 'background.level1' }
						}
					}
				>
					<CardContent
						sx={{
							display: 'flex',
							gap: 1,
							flexDirection: extended ? 'row' : 'column',
							width: extended ? 500 * factor : 240 * factor,
							maxHeight: 420 * factor
						}}
					>
						<Box
							sx={{
								borderRadius: 'md',
								position: 'relative',
								overflow: 'hidden',
								height: 360 * factor,
								minWidth: 240 * factor
							}}
						>
							{!extended && (
								<Chip
									variant='solid'
									color={formattedRating.imdb.color}
									size={size}
									sx={{ position: 'absolute', margin: '7px 0 0 7px' }}
								>
									{formattedRating.imdb.rating}
								</Chip>
							)}

							{data.isWatched && (
								<Chip
									variant='solid'
									sx={{ position: 'absolute', right: 0, margin: '7px 7px 0 0' }}
								>
									Watched
								</Chip>
							)}

							<Image
								src={data.image}
								width={240 * factor}
								height={360 * factor}
								alt={data.title}
							/>
						</Box>
						{extended ? (
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									gap: 2
								}}
							>
								<Link href={`/${data.id}`}>
									<Typography
										level='h3'
										fontSize={
											size === 'md' ? 'lg' : size === 'sm' ? 'md' : 'xl'
										}
										noWrap={false}
										sx={{
											textAlign: 'center',
											fontWeight: 'md',
											cursor: 'pointer',
											'&:hover': { textDecoration: 'underline' }
										}}
									>
										{data.title}
									</Typography>
								</Link>
								<EntityTags tags={data.tags} center={true} />
								<Rating
									imdb={data.rating.imdb}
									rt={data.rating.rt}
									user={data.rating.user}
								/>
							</Box>
						) : (
							<Typography
								level='h3'
								fontSize={size}
								noWrap={false}
								sx={{ textAlign: 'center', fontWeight: 'md' }}
							>
								{data.title}
							</Typography>
						)}
					</CardContent>
				</Card>
			</LinkWrapper>
		</Box>
	)
}

// not sure about id type
EntityCard.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		rating: PropTypes.shape({
			imdb: PropTypes.number.isRequired,
			rt: PropTypes.number,
			user: PropTypes.number
		}),
		isWatched: PropTypes.bool,
		tags: PropTypes.arrayOf(
			PropTypes.shape({ type: PropTypes.string, title: PropTypes.string })
		)
	}).isRequired,
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	extended: PropTypes.bool
}

export default EntityCard
