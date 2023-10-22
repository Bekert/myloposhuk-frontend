'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

import {
	Box,
	Button,
	Card,
	List,
	ListDivider,
	ListItem,
	ToggleButtonGroup,
	Typography
} from '@mui/joy'

export default function CalendarCard() {
	const [items, setItems] = useState([
		{
			title: 'Misson Impossible',
			image: 'http://localhost:8080/2016603.jpg',
			id: 123,
			properties: { premierWorld: '2022-10-16' }
		},
		{
			title: 'Mission: Impossible - Dead Reckoning Part One',
			image: 'http://localhost:8080/2016603.jpg',
			id: 123,
			properties: { premierWorld: '2022-10-16' }
		},
		{
			title: 'Misson Impossible',
			image: 'http://localhost:8080/2016603.jpg',
			id: 123,
			properties: { premierWorld: '2022-10-16' }
		},
		{
			title: 'Misson Impossible',
			image: 'http://localhost:8080/2016603.jpg',
			id: 123,
			properties: { premierWorld: '2022-10-16' }
		},
		{
			title: 'Misson Impossible',
			image: 'http://localhost:8080/2016603.jpg',
			id: 123,
			properties: { premierWorld: '2022-10-16' }
		}
	])

	const [mode, setMode] = useState('theaters')

	useEffect(() => {
		const l = 'b'
		//requests are made here
	}, [mode])

	return (
		<Card sx={{ mb: 2 }}>
			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap',
					columnGap: 2,
					justifyContent: 'space-between'
				}}
			>
				<Typography level='h2'>Coming soon</Typography>
				<ToggleButtonGroup value={mode} onChange={(_, value) => setMode(value)}>
					<Button value='theaters'>Theaters</Button>
					<Button value='online'>Online</Button>
				</ToggleButtonGroup>
			</Box>

			<List>
				{items.map(({ title, image, id }, i) => (
					<Fragment key={i}>
						<ListItem
							sx={{
								cursor: 'pointer',
								'&:hover': {
									backgroundColor: 'background.level2'
								}
							}}
						>
							<Link href={`/${id}`}>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<Box
										sx={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center'
										}}
										mr={1}
									>
										<Typography fontSize='xl'>22</Typography>
										<Typography fontSize='md'>nov</Typography>
									</Box>

									<Box width={60}>
										<Image src={image} width={60} height={90} alt={title} />
									</Box>
									<Typography fontSize='lg' ml={3} noWrap={false}>
										{title}
									</Typography>
								</Box>
							</Link>
						</ListItem>

						{i + 1 !== items.length && <ListDivider />}
					</Fragment>
				))}
			</List>
		</Card>
	)
}
