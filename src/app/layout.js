import PropTypes from 'prop-types'
import { Inter } from 'next/font/google'
import { CssBaseline, CssVarsProvider } from '@mui/joy'

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
	return (
		<html lang='en' className={inter.className}>
			<body>
				<CssVarsProvider>
					<CssBaseline />
					{children}
				</CssVarsProvider>
			</body>
		</html>
	)
}

RootLayout.propTypes = {
	children: PropTypes.any
}

export default RootLayout
