import PropTypes from 'prop-types'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

import '../styles/global.css'
import ThemeRegistry from './components/ThemeRegistry'
import Container from './components/Container'

export const metadata = {
	title: 'Next JS Template',
	description: 'Description of a simple Next JS template',
	viewport: 'initial-scale=1, width=device-width'
}

const inter = Inter({
	subsets: ['latin'],
	display: 'swap'
})

function RootLayout({ children }) {
	// the way joy ui handles dark mode with ssr is cursed or I'm just dumb
	// sorry god for suppressHydrationWarning, костиль is the way

	return (
		<html lang='en' className={inter.className} suppressHydrationWarning={true}>
			<body>
				<ThemeRegistry options={{ key: 'joy' }}>
					<Navbar />
					<Container>{children}</Container>
				</ThemeRegistry>
			</body>
		</html>
	)
}

RootLayout.propTypes = {
	children: PropTypes.any
}

export default RootLayout
