import { Box, Chip } from '@mui/joy'

export default function EntityTags({ tags }) {
	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
			{tags.map(({ title, type }, i) => (
				<Chip key={i} color={type === 'genre' ? 'primary' : 'neutral'} variant='soft'>
					{title}
				</Chip>
			))}
		</Box>
	)
}
