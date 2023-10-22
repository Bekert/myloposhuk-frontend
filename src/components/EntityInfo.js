import PropTypes from 'prop-types'

import { Box, List, ListItem, ListItemContent, Typography } from '@mui/joy'

import { formatDate, formatTime } from '../lib/utils'

// this will be amazing with TS but маємо шо маємо at this time
// you can probably make this part more universal without describing each element
// but I plan to add more complex data trasformations when backend is finished
const elements = {
	countries: { title: 'Countries', content: data => data.join(', ') },
	runtime: { title: 'Runtime', content: formatTime },
	premierWorld: { title: 'World premier', content: formatDate },
	premierDigital: { title: 'Online premier', content: formatDate },
	productionCompanies: { title: 'Production companies', content: data => data.join(', ') }
}

// properties are all optional because there is a lack of data on some movies
function EntityInfo({ properties }) {
	return (
		<List variant='soft' sx={{ width: '100%' }}>
			{Object.entries(elements)
				.map(
					([type, { title, content }], i) =>
						properties[type] && (
							<ListItem key={i}>
								<ListItemContent sx={{ display: 'flex' }}>
									<Box sx={{ flex: 1, textAlign: 'start' }}>
										<Typography fontSize='sm'>{title}:</Typography>
									</Box>
									<Box sx={{ flex: 1, textAlign: 'start' }}>
										<Typography fontSize='sm'>
											{content(properties[type])}
										</Typography>
									</Box>
								</ListItemContent>
							</ListItem>
						)
				)
				.filter(Boolean)}
		</List>
	)
}

EntityInfo.propTypes = {
	properties: PropTypes.shape({
		countries: PropTypes.arrayOf(PropTypes.string),
		runtime: PropTypes.number,
		premierWorld: PropTypes.string,
		premierDigital: PropTypes.string,
		productionCompanies: PropTypes.arrayOf(PropTypes.string)
	})
}

export default EntityInfo
