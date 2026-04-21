const nextConfig = {
    experimental: {
        cpus: 1,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
};
export default nextConfig;