import PropTypes from 'prop-types'

import { Box, Chip } from '@mui/joy'

function EntityTags({ tags, nowrap, center }) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexWrap: nowrap ? 'nowrap' : 'wrap',
				justifyContent: center ? 'space-evenly' : 'unset',
				gap: 1
			}}
		>
			{tags.map(({ title, type }, i) => (
				<Chip key={i} color={type === 'genre' ? 'primary' : 'neutral'} variant='soft'>
					{title}
				</Chip>
			))}
		</Box>
	)
}

EntityTags.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.string, title: PropTypes.string }))
}

export default EntityTags
