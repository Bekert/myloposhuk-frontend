const nextConfig = {
	reactStrictMode: true,
	experimental: {
		serverActions: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080',
				pathname: '/**'
			}
		]
	}
}

module.exports = nextConfig
