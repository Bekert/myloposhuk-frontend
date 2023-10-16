'use client'

import { useState } from 'react'

import { Alert, Button, CircularProgress, FormControl, FormLabel, Input, Stack } from '@mui/joy'
import { Key, Person } from '@mui/icons-material'

export default function LoginForm({ closeModal }) {
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')
	const [error, setError] = useState(false)

	const [loading, setLoading] = useState(false)

	function handleLogin(e) {
		e.preventDefault()

		setLoading(true)
		// server request
		setLoading(false)
		const success = true
		const serverError = 'something from server'

		if (success) {
			const ura = 'lol'
			closeModal()
		} else {
			const errorHandler = error => error
			setError(errorHandler(serverError))
		}
	}
	return (
		<>
			{error && <Alert color='danger'>{error}</Alert>}
			{loading && (
				<Alert color='primary' variant='soft'>
					<CircularProgress size='sm' />
					Just a second...
				</Alert>
			)}
			<form onSubmit={handleLogin}>
				<Stack spacing={2}>
					<FormControl>
						<FormLabel>Username</FormLabel>
						<Input
							startDecorator={<Person />}
							autoFocus
							required
							onChange={e => setUsername(e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel>Password</FormLabel>
						<Input
							type='password'
							startDecorator={<Key />}
							required
							onChange={e => setPassword(e.target.value)}
						/>
					</FormControl>
					<Button type='submit'>Log In</Button>
				</Stack>
			</form>
		</>
	)
}
