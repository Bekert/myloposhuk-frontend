import { Box, List, ListItem, ListItemContent, Typography } from '@mui/joy'
import { formatDate, formatTime } from '../../lib/utils'

// properties: {
// 	countries: ['USA', 'Canada'],
// 	runtime: 1000 * 60 * 88,
// 	premierWorld: '2022-10-16',
// 	premierDigital: '2022-11-16',
// 	productionCompanies: ['FOX', 'Disney']
// }

const Item = ({ title, children }) => (
	<ListItem>
		<ListItemContent sx={{ display: 'flex' }}>
			<Box sx={{ flex: 1, textAlign: 'start' }}>
				<Typography fontSize='sm'>{title}:</Typography>
			</Box>
			<Box sx={{ flex: 1, textAlign: 'start' }}>{children}</Box>
		</ListItemContent>
	</ListItem>
)

export default function EntityInfo({ properties }) {
	return (
		<List variant='soft' sx={{ width: '100%' }}>
			<Item title='Countries'>
				<Typography fontSize='sm'>{properties.countries.join(', ')}</Typography>
			</Item>

			<Item title='Runtime'>
				<Typography fontSize='sm'>{formatTime(properties.runtime)}</Typography>
			</Item>

			<Item title='World premier'>
				<Typography fontSize='sm'>{formatDate(properties.premierWorld)}</Typography>
			</Item>

			<Item title='Online realese'>
				<Typography fontSize='sm'>{formatDate(properties.premierDigital)}</Typography>
			</Item>

			<Item title='Production companies'>
				<Typography fontSize='sm'>{properties.productionCompanies.join(', ')}</Typography>
			</Item>
		</List>
	)
}
