/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.to'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: ''
            }
        ]
    }
};

export default nextConfig;
