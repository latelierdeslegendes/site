import { vehicles } from '../data/vehicles';

export const generateDynamicSitemap = (): string => {
  const baseUrl = 'https://www.latelier-des-legendes.fr';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/about', priority: '0.8', changefreq: 'monthly' },
    { loc: '/for-sale', priority: '0.9', changefreq: 'daily' },
    { loc: '/sold', priority: '0.7', changefreq: 'weekly' },
    { loc: '/services', priority: '0.8', changefreq: 'monthly' },
    { loc: '/legal-notice', priority: '0.3', changefreq: 'yearly' },
    { loc: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
    { loc: '/terms-of-sale', priority: '0.3', changefreq: 'yearly' }
  ];

  const vehiclePages = vehicles.map(vehicle => ({
    loc: `/vehicle/${vehicle.id}`,
    priority: '0.8',
    changefreq: 'weekly',
    image: vehicle.images[0]
  }));

  const allPages = [...staticPages, ...vehiclePages];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  allPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`;

    if ('image' in page && page.image) {
      sitemap += `
    <image:image>
      <image:loc>${page.image}</image:loc>
    </image:image>`;
    }

    sitemap += `
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

export const downloadSitemap = () => {
  const sitemap = generateDynamicSitemap();
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sitemap.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
