import Box from '@mui/joy/Box'
import List from '@mui/joy/List'
import ListDivider from '@mui/joy/ListDivider'
import ListItem from '@mui/joy/ListItem'
import ListItemButton from '@mui/joy/ListItemButton'
import Home from '@mui/icons-material/Home'
import Person from '@mui/icons-material/Person'
import Link from 'next/link'
import { Fragment } from 'react'
import { Button, Card } from '@mui/joy'
import Login from './Login'
import { Switch } from '@mui/material'
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
							<Login />
							// <Button>Login</Button>
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
