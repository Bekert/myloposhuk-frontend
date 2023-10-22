import Image from 'next/image'
import Link from 'next/link'

import { Box, Typography } from '@mui/joy'

import Rating from '../../components/Rating'
import EntityTags from '../../components/EntityTags'
import EntityInfo from '../../components/EntityInfo'
import Carousel from './Carousel/Carousel'

export default function SuggestionsCarousel({ suggestions }) {
	return (
		<Carousel showThumbs={false} showArrows={true} showIndicators={false}>
			{suggestions.map(({ image, title, tags, rating, id, properties }, i) => (
				<Box
					sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
					key={i}
				>
					<Link href={`/${id}`}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: 2,
								cursor: 'pointer',
								'&:hover': {
									backgroundColor: 'background.level2'
								}
							}}
						>
							<Box width={240}>
								<Image src={image} width={240} height={360} alt={title} />
							</Box>

							<Typography
								level='h3'
								fontSize='lg'
								noWrap={false}
								sx={{ textAlign: 'center' }}
							>
								{title}
							</Typography>
						</Box>
					</Link>

					<Rating {...rating} />

					<EntityTags tags={tags} />

					<EntityInfo properties={properties} />
				</Box>
			))}
		</Carousel>
	)
}
