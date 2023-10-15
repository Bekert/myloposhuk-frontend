'use client'

import { Button } from '@mui/joy'
import { useState } from 'react'
import FormControl from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Input from '@mui/joy/Input'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import DialogTitle from '@mui/joy/DialogTitle'
import DialogContent from '@mui/joy/DialogContent'
import Stack from '@mui/joy/Stack'
import Add from '@mui/icons-material/Add'

export default function Login() {
	const [open, setOpen] = useState(false)
	return (
		<>
			<Button variant='outlined' onClick={() => setOpen(!open)}>
				Login or Sign Up
			</Button>
			<Modal open={open} onClose={() => setOpen(false)}>
				<ModalDialog>
					<DialogTitle>Create new project</DialogTitle>
					<DialogContent>Fill in the information of the project.</DialogContent>
					<form
						onSubmit={event => {
							event.preventDefault()
							setOpen(false)
						}}
					>
						<Stack spacing={2}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input autoFocus required />
							</FormControl>
							<FormControl>
								<FormLabel>Description</FormLabel>
								<Input required />
							</FormControl>
							<Button type='submit'>Submit</Button>
						</Stack>
					</form>
				</ModalDialog>
			</Modal>
		</>
	)
}
