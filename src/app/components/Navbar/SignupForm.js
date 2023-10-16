'use client'

import { useState } from 'react'

import {
	Button,
	CircularProgress,
	FormHelperText,
	FormControl,
	FormLabel,
	Input,
	Alert,
	Stack
} from '@mui/joy'
import { InfoOutlined, Key, Person } from '@mui/icons-material'

export default function SingupForm({ closeModal }) {
	const [password, setPassword] = useState('')
	const [username, setUsername] = useState('')

	const [loading, setLoading] = useState(false)

	const [uncaughtError, setUncaughtError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [confirmPasswordError, setConfirmPasswordError] = useState(false)
	const [usernameError, setUsernameError] = useState(false)
	console.log('reload')
	function handleSignup(e) {
		e.preventDefault()
		if (passwordError || confirmPasswordError || usernameError) return

		setLoading(true)
		// server request
		const success = true
		const serverError = { area: 'password', msg: 'something from server' }
		setLoading(false)

		if (success) {
			const lol = 'ha'
			closeModal()
		} else {
			switch (serverError.area) {
				case 'password':
					setPasswordError(serverError.msg)
					break
				case 'username':
					setUsernameError(serverError.msg)
					break
				default:
					setUncaughtError(serverError.msg)
					break
			}
		}
	}
	return (
		<>
			{uncaughtError && <Alert color='danger'>{uncaughtError}</Alert>}
			{loading && (
				<Alert color='primary' variant='soft'>
					<CircularProgress size='sm' />
					Just a second...
				</Alert>
			)}

			<form onSubmit={handleSignup}>
				<Stack spacing={2}>
					<FormControl error={!!usernameError}>
						<FormLabel>Username</FormLabel>
						<Input
							startDecorator={<Person />}
							autoFocus
							required
							onChange={e => setUsername(e.target.value)}
						/>
						{usernameError && (
							<FormHelperText>
								<InfoOutlined />
								{usernameError}
							</FormHelperText>
						)}
					</FormControl>
					<FormControl error={!!passwordError}>
						<FormLabel>Password</FormLabel>
						<Input
							type='password'
							startDecorator={<Key />}
							required
							onChange={e => setPassword(e.target.value)}
						/>
						{passwordError && (
							<FormHelperText>
								<InfoOutlined />
								{passwordError}
							</FormHelperText>
						)}
					</FormControl>
					<FormControl error={!!confirmPasswordError}>
						<FormLabel>Confirm password</FormLabel>
						<Input
							type='password'
							startDecorator={<Key />}
							required
							onChange={e => {
								console.log(e.target.value === password)
								e.target.value === password
									? setConfirmPasswordError(false)
									: setConfirmPasswordError("Passwords don't match")
							}}
						/>
						{confirmPasswordError && (
							<FormHelperText>
								<InfoOutlined />
								{confirmPasswordError}
							</FormHelperText>
						)}
					</FormControl>
					<Button type='submit'>Sign Up</Button>
				</Stack>
			</form>
		</>
	)
}
