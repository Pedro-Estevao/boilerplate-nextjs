/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    reactStrictMode: true,
    compress: true,
    compiler: {
        styledComponents: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'public/styles')],
    },
}

module.exports = nextConfig;