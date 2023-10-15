'use client'

import Switch from '@mui/joy/Switch'
import DarkMode from '@mui/icons-material/DarkMode'
import { useColorScheme } from '@mui/joy/styles'
import { useEffect, useState } from 'react'

export default function ThemeSwitch() {
	const { mode, setMode } = useColorScheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<>
			{mounted ? (
				<Switch
					variant='solid'
					onChange={() => setMode(mode === 'dark' ? 'light' : 'dark')}
					slotProps={{
						input: { 'aria-label': 'Dark mode' },
						thumb: {
							children: <DarkMode />
						}
					}}
					sx={{
						'--Switch-thumbSize': '16px'
					}}
				/>
			) : (
				<Switch variant='solid' />
			)}
		</>
	)
}
