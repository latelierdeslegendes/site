import type { PageSEO } from '../lib/sanity';
import { getImageUrl } from '../lib/sanity';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  structuredData?: object;
}

export const convertSanityToSEO = (sanitySEO: PageSEO | null, siteUrl: string): SEOData | null => {
  if (!sanitySEO) return null;

  return {
    title: sanitySEO.title,
    description: sanitySEO.description,
    keywords: sanitySEO.keywords,
    ogImage: sanitySEO.ogImage ? getImageUrl(sanitySEO.ogImage, 1200) : undefined,
    canonical: sanitySEO.canonical || `${siteUrl}/${sanitySEO.pageId === 'home' ? '' : sanitySEO.pageId}`
  };
};

export const updateMetaTags = (data: SEOData) => {
  document.title = data.title;

  const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
    const attribute = isProperty ? 'property' : 'name';
    let element = document.querySelector(`meta[${attribute}="${name}"]`);

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }

    element.setAttribute('content', content);
  };

  updateOrCreateMeta('description', data.description);

  if (data.keywords) {
    updateOrCreateMeta('keywords', data.keywords);
  }

  updateOrCreateMeta('og:title', data.title, true);
  updateOrCreateMeta('og:description', data.description, true);

  if (data.ogImage) {
    updateOrCreateMeta('og:image', data.ogImage, true);
    updateOrCreateMeta('twitter:image', data.ogImage);
  }

  updateOrCreateMeta('twitter:title', data.title);
  updateOrCreateMeta('twitter:description', data.description);

  if (data.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = data.canonical;
  }

  if (data.structuredData) {
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data.structuredData);
  }
};

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'AutomotiveBusiness',
  name: "L'Atelier Des Légendes",
  description: 'Achat et vente de véhicules d\'exception',
  url: 'https://www.latelier-des-legendes.fr',
  logo: 'https://www.latelier-des-legendes.fr/logo.png',
  image: 'https://lh3.googleusercontent.com/pw/AP1GczPeY6t2xVtpTSr16-U9CBrQe3jXhxxaIWjwJkQqHtTmSfvvwmis5Eb_tTXb-Rx_SXYNKYub9orUHxwi9lrECACtUcPxzix9rXVjE8dsze-NaWKlZDpPxBcoVO_lfA6umH0iQ9UFDQMfuGHur0rWqcCS=w1563-h756-s-no-gm',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
    addressLocality: 'France'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '150'
  },
  priceRange: '€€€€'
});

export const getVehicleSchema = (vehicle: {
  name: string;
  brand: string;
  year: number;
  price: string;
  mileage: string;
  power: string;
  image: string;
  description?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Car',
  name: vehicle.name,
  brand: {
    '@type': 'Brand',
    name: vehicle.brand
  },
  vehicleModelDate: vehicle.year,
  mileageFromOdometer: {
    '@type': 'QuantitativeValue',
    value: vehicle.mileage
  },
  vehicleEngine: {
    '@type': 'EngineSpecification',
    enginePower: vehicle.power
  },
  offers: {
    '@type': 'Offer',
    price: vehicle.price,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    seller: {
      '@type': 'AutomotiveBusiness',
      name: "L'Atelier Des Légendes"
    }
  },
  image: vehicle.image,
  description: vehicle.description || `${vehicle.name} - ${vehicle.year}`
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});
