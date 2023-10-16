'use client'

import { useState } from 'react'

import { Button, Modal, ModalDialog, DialogTitle } from '@mui/joy'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

export default function Login() {
	const [open, setOpen] = useState(false)
	const [mode, setMode] = useState('login')

	const toogleMode = () => setMode(mode === 'login' ? 'signup' : 'login')

	return (
		<>
			<Button variant='outlined' onClick={() => setOpen(!open)}>
				Login or Sign Up
			</Button>

			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog>
					<DialogTitle>{mode === 'login' ? 'Authorization' : 'Registration'}</DialogTitle>

					{mode === 'login' ? (
						<LoginForm closeModal={() => setOpen(false)} />
					) : (
						<SignupForm closeModal={() => setOpen(false)} />
					)}

					<Button variant='outlined' onClick={toogleMode}>
						{mode === 'login' ? 'Sign Up' : 'Log In'}
					</Button>
				</ModalDialog>
			</Modal>
		</>
	)
}
