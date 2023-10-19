import { Card, Typography } from '@mui/joy'

export default function Footer() {
	return (
		<Card variant='soft' component='footer' sx={{ borderRadius: 0, textAlign: 'center' }}>
			<Typography level='h3'>Myloposhuk</Typography>
			Copyright © 2023 Bekert
		</Card>
	)
}
