/** @type {import('next').NextConfig} */
const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: !isProd
});

const nextConfig = withPWA({
    reactStrictMode: true,
    compress: true,
    compiler: {
        styledComponents: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'public/styles')],
    },
});

module.exports = nextConfig;