const nextConfig = {
    experimental: {
        cpus: 1,
        parallelServerBuildTraces: false,
        parallelServerCompiles: false,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    trailingSlash: true,
    // output: 'export',
    // assetPrefix: './',
    images: {
        unoptimized: true,
    },
    async redirects() {
        return [
            {
                source: "/projects/",
                destination: "/our-projects/",
                permanent: true,
            },
            {
                source: "/projects-2/",
                destination: "/our-projects/",
                permanent: true,
            },
            {
                source: "/projects-3/",
                destination: "/our-projects/",
                permanent: true,
            },
 
            {
                source: "/engineering-consultants/project-map/",
                destination: "/project-map/",
                permanent: true,
            },
            {
                source: "/ar/engineering-consultants/project-map/",
                destination: "/ar/project-map/",
                permanent: true,
            },
 
            {
                source: "/services/:slug(residential-design-2|commercial-design-2|office-design)/",
                destination: "/our-services/",
                permanent: true,
            },
 
            {
                source: "/ar/projects-2/",
                destination: "/our-projects/",
                permanent: true,
            },
            {
                source: "/ar/projects-3/",
                destination: "/our-projects/",
                permanent: true,
            },
            {
                source: "/ar/projects/",
                destination: "/ar/our-projects/",
                permanent: true,
            },
 
            {
                source: "/contact/",
                destination: "/contact-us/",
                permanent: true,
            },
            {
                source: "/ar/contact/",
                destination: "/ar/contact-us/",
                permanent: true,
            },
 
            {
                source: "/awards/",
                destination: "/",
                permanent: true,
            },
            {
                source: "/team/",
                destination: "/",
                permanent: true,
            },
 
            {
                source: "/%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-%D8%A7%D8%A8%D9%88%D8%B8%D8%A8%D9%8A/",
                destination: "/ar/استشارات-هندسية-ابوظبي/",
                permanent: true,
            },
        ];
    },
};
export default nextConfig;
 