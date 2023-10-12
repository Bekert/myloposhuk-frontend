import PropTypes from 'prop-types'

export const metadata = {
	title: 'Next JS Template',
	description: 'Description of a simple Next JS template'
}

function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}

RootLayout.propTypes = {
	children: PropTypes.any
}

export default RootLayout
