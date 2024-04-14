/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compress: true,
	compiler: {
		removeConsole: true,
		styledComponents: true
	}
};

export default nextConfig;
