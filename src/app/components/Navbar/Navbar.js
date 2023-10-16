import { Fragment } from 'react'
import Link from 'next/link'

import { Card, Box, List, ListDivider, ListItem, ListItemButton, Typography } from '@mui/joy'
import { Home, Person } from '@mui/icons-material'

import Auth from './Auth'
import ThemeSwitch from './ThemeSwitch'

const menuItems = [
	{
		name: 'Home',
		path: '/',
		icon: Home
	},
	{
		name: 'Movies',
		path: '/movies'
	},
	{
		name: 'TV Shows',
		path: '/shows'
	}
]

export default function Navbar() {
	const user = false

	return (
		<Card
			variant='outlined'
			sx={{
				display: 'flex',
				position: 'fixed',
				width: 'calc(100% - 20px)',
				height: '60px',
				marginLeft: '10px',
				marginTop: '10px',
				zIndex: 10,
				overflow: 'scroll'
			}}
		>
			<Box
				component='nav'
				aria-label='My site'
				sx={{ display: 'flex', height: '100%', alignItems: 'center' }}
			>
				<List role='menubar' orientation='horizontal'>
					<ListItem role='none'>
						<Typography level='h1' fontSize='xl'>
							Myloposhuk
						</Typography>
					</ListItem>

					{menuItems.map(({ name, path, icon: Icon }) => {
						return (
							<Fragment key={name}>
								<ListDivider />
								<ListItem role='none' key={name}>
									<Link href={path}>
										<ListItemButton
											role='menuitem'
											component='div'
											aria-label={name}
											color='primary'
											sx={{ marginLeft: '-12px' }}
										>
											{Icon ? <Icon /> : name}
										</ListItemButton>
									</Link>
								</ListItem>
							</Fragment>
						)
					})}
					<ListDivider />

					<ListItem role='none' sx={{ marginInlineStart: 'auto' }}>
						{user ? (
							<Link href='/profile'>
								<ListItemButton
									role='menuitem'
									component='div'
									aria-label='Profile'
									color='primary'
								>
									<Person />
								</ListItemButton>
							</Link>
						) : (
							<Auth />
						)}
					</ListItem>
					<ListItem role='none'>
						<ThemeSwitch />
					</ListItem>
				</List>
			</Box>
		</Card>
	)
}
