const nextConfig = {
    experimental: {
        cpus: 1,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    trailingSlash: true,
    output: 'export',
    assetPrefix: '../',
    images: {
        unoptimized: true,
    },
};
export default nextConfig;