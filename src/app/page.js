'use client'

import { Button } from 'react-bootstrap'
import Heading from '../components/Heading'

import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
	return (
		<>
			<Heading />
			<Button>Example button</Button>
		</>
	)
}
