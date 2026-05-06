export async function GET() {
    const body = `# robots.txt for Enmaa Engineering Consultancy

User-agent: *
Allow: /

# Disallow sensitive or unnecessary paths
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Disallow: /private/
Disallow: /admin/

# Allow important assets
Allow: /_next/static/
Allow: /_next/image/

# Crawl delay (optional, mostly ignored by Google)
Crawl-delay: 10

# Sitemap
Sitemap: https://www.enmaaengcon.com/sitemap.xml
    `;
    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}