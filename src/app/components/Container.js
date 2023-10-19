import { Box } from '@mui/joy'

export default function Container({ children }) {
	return (
		<Box p='80px 10px 0 10px' sx={{ maxWidth: '2000px', margin: 'auto' }}>
			{children}
		</Box>
	)
}
