'use client'

import {
	Box,
	Button,
	ButtonGroup,
	Dropdown,
	Menu,
	MenuButton,
	MenuItem,
	Slider,
	Tooltip,
	Typography
} from '@mui/joy'
import { formatRating } from '../../lib/utils'
import { useRef, useState } from 'react'

export default function Rating({ user, imdb, rt }) {
	const userRating = user && formatRating(user)
	const imdbRating = imdb && formatRating(imdb)
	const rtRating = rt && formatRating(rt, 'rt')

	const anchorRef = useRef(null)
	const [open, setOpen] = useState(false)
	const [scoreValue, setScoreValue] = useState(userRating.rating)

	function updateUserScore() {}
	return (
		<div>
			<ButtonGroup variant='outlined'>
				<Tooltip title='Click to set a score'>
					<Button
						sx={{ fontWeight: 'md', width: 'calc(100% / 3)' }}
						ref={anchorRef}
						onClick={() => setOpen(!open)}
					>
						<Box>
							<Typography level='title-lg' fontSize='sm'>
								Your score:
							</Typography>
							<Typography
								color={userRating?.color || 'neutral'}
								level='title-lg'
								fontSize='xl'
							>
								{userRating?.rating || '---'}
							</Typography>
						</Box>
					</Button>
				</Tooltip>

				<Tooltip title='Open IMDB'>
					<Button
						sx={{ fontWeight: 'md', width: 'calc(100% / 3)' }}
						onClick={() => window.open('https://www.imdb.com', '_blank')}
					>
						<Box>
							<Typography level='title-lg' fontSize='sm'>
								IMDB:
							</Typography>
							<Typography color={imdbRating.color} level='title-lg' fontSize='xl'>
								{imdbRating.rating}
							</Typography>
						</Box>
					</Button>
				</Tooltip>

				<Tooltip title='Open Rotten Tomatoes'>
					<Button
						sx={{ fontWeight: 'md', width: 'calc(100% / 3)' }}
						onClick={() => window.open('https://www.rottentomatoes.com', '_blank')}
					>
						<Box>
							<Typography level='title-lg' fontSize='sm'>
								Rotten Tomatoes:
							</Typography>
							<Typography color={rtRating.color} level='title-lg' fontSize='xl'>
								{rtRating.rating}
							</Typography>
						</Box>
					</Button>
				</Tooltip>
			</ButtonGroup>
			<Menu open={open} anchorEl={anchorRef.current}>
				{user ? (
					<>
						<MenuItem
							sx={{
								height: 300,
								maxWidth: 100,
								flexDirection: 'column',
								'&:hover': { backgroundColor: 'transparent !important' }
							}}
						>
							<Slider
								orientation='vertical'
								defaultValue={userRating.rating || 5}
								step={1}
								marks
								min={1}
								max={10}
								valueLabelDisplay='on'
								color={
									scoreValue > 7
										? 'success'
										: scoreValue > 4
										? 'warning'
										: 'danger'
								}
								onChange={(_, value) => setScoreValue(value)}
							/>
							<Button onClick={updateUserScore}>Set a score</Button>
						</MenuItem>
					</>
				) : (
					<MenuItem>You need to Log In to set a score</MenuItem>
				)}
			</Menu>
		</div>
	)
}
