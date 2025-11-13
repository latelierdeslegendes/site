export interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface PageSEO {
  _id: string;
  pageId: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: SanityImage;
  canonical?: string;
}

export interface VehicleSEO {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface Vehicle {
  _id: string;
  vehicleId?: string;
  name: string;
  brand: string;
  model?: string;
  year: number;
  mileage: string;
  power: string;
  fuel: string;
  transmission: string;
  color?: string;
  price: string;
  priceValue: number;
  images: string[] | SanityImage[];
  description?: string;
  features?: string[];
  services?: string[];
  status: 'available' | 'sold';
  isFeatured?: boolean;
  seo?: VehicleSEO;
}

export interface SiteSettings {
  _id: string;
  siteName: string;
  siteUrl: string;
  defaultSeo: {
    title: string;
    description: string;
    keywords: string;
    ogImage?: SanityImage;
  };
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface HomePageContent {
  _id: string;
  hero: {
    badge: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
    };
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
    images: {
      desktop: string;
      mobile: string;
      heroAlt: string;
      heroMobileAlt: string;
    };
  };
  about: {
    badge: string;
    title: {
      line1: string;
      line2: string;
      line3: string;
      line4: string;
    };
    paragraph1: {
      bold: string;
      text: string;
    };
    paragraph2: string;
    cta: string;
    stats: {
      value: string;
      label: string;
    };
    image: {
      src: string;
      alt: string;
    };
  };
  featured: {
    badge: string;
    title: string;
    subtitle: string;
    status: string;
    yearLabel: string;
    cta: string;
  };
  advantages: {
    badge: string;
    title: {
      line1: string;
      line2: string;
    };
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  services: {
    badge: string;
    title: {
      line1: string;
      line2: string;
    };
    subtitle: string;
    cta: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      link: string;
      number: string;
    }>;
  };
  sold: {
    badge: string;
    title: string;
    subtitle: string;
    status: string;
    cta: string;
    images: string[];
    imageAlt: string;
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      comment: string;
      rating: number;
      vehicle: string;
    }>;
  };
  contact: {
    badge: string;
    title: {
      line1: string;
      line2: string;
    };
    subtitle: string;
    cta: {
      primary: string;
      secondary: string;
    };
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
}

export interface AboutPageContent {
  _id: string;
  heroTitle: string;
  heroImg: string;
  heroDescription: string;
  heroButton: string;
  storyTitle: string;
  storyDescription: string;
  storySideImg: string;
  savoirFaireTitle: string;
  ourValueTitle: string;
  ourValueDescription: string;
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  testimonialTitle: string;
  testimonialDescription: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
  timeline: Array<{
    year: string;
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    comment: string;
    rating: number;
    vehicle: string;
  }>;
}

export interface SoldPageContent {
  _id: string;
  heroTitle: string;
  heroDescription: string;
  heroImgSrc: string;
  successTitle: string;
  successSubtitle: string;
  successElements: Array<{
    icon: string;
    number: string;
    label: string;
    description: string;
  }>;
  searchAnotherVehicleHeadline: string;
  searchAnotherVehicleDescription: string;
  searchAnotherVehicleButtonLabel1: string;
  searchAnotherVehicleButtonLabel2: string;
}

export interface ForSalePageContent {
  _id: string;
  heroTitle: string;
  heroDescription: string;
  heroImgSrc: string;
  searchAnotherVehicleQuestion: string;
  searchAnotherVehicleHeadline: string;
  searchAnotherVehicleDescription: string;
  searchAnotherVehicleButtonLabel: string;
}

export interface ServicesPageContent {
  _id: string;
  depotVente: {
    icon: string;
    title: string;
    description: string;
    cta: string;
    features: string[];
    image: string;
  };
  otherServices: {
    otherServicesTitle: string;
    otherServicesDescription: string;
    services: Array<{
      icon: string;
      title: string;
      description: string;
      features: string[];
      image: string;
    }>;
  };
  trustIndicatorTitle: string;
  trustIndicators: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  faqTitle: string;
  faqDescription: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonLabel1: string;
  ctaButtonLabel2: string;
}

export interface ContactDetails {
  _id: string;
  email: string;
  phone: string;
  phoneDisplay: string;
  address: string;
  horaire: string;
  instagram: string;
  linkedin: string;
}

export interface InstagramContent {
  _id: string;
  instagramTitle: string;
  instagramDescription: string;
  images: string[];
  instagramLink: string;
}

let clientInstance: any = null;
let builderInstance: any = null;

async function initSanity() {
  if (clientInstance) return clientInstance;

  try {
    const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';
    const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-10-21';

    if (!projectId) {
      console.warn('Sanity Project ID not configured. CMS features will be disabled.');
      return null;
    }

    const { createClient } = await import('@sanity/client');
    const imageUrlBuilder = await import('@sanity/image-url');

    clientInstance = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    });

    builderInstance = imageUrlBuilder.default(clientInstance);
    return clientInstance;
  } catch (error) {
    console.warn('Sanity packages not installed. CMS features will be disabled.');
    return null;
  }
}

export async function getClient() {
  return await initSanity();
}

export function urlFor(source: any) {
  if (!builderInstance) {
    return { url: () => '' };
  }
  return builderInstance.image(source);
}

export async function getPageSEO(pageId: string): Promise<PageSEO | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "pageSeo" && pageId == $pageId][0]`;
    const result = await client.fetch(query, { pageId });
    return result;
  } catch (error) {
    console.error('Error fetching page SEO:', error);
    return null;
  }
}

export async function getAllVehicles(): Promise<Vehicle[]> {
  const client = await getClient();
  if (!client) return [];

  try {
    const query = `*[_type == "vehicle"] | order(_createdAt desc)`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return [];
  }
}

export async function getVehicleById(id: string): Promise<Vehicle | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "vehicle" && _id == $id][0]`;
    const result = await client.fetch(query, { id });
    return result;
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    return null;
  }
}

export async function getAvailableVehicles(): Promise<Vehicle[]> {
  const client = await getClient();
  if (!client) return [];

  try {
    const query = `*[_type == "vehicle" && status == "available"] | order(_createdAt desc)`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching available vehicles:', error);
    return [];
  }
}

export async function getSoldVehicles(): Promise<Vehicle[]> {
  const client = await getClient();
  if (!client) return [];

  try {
    const query = `*[_type == "vehicle" && status == "sold"] {
      _id,
      name,
      brand,
      year,
      "image": images[0],
      status
    } | order(_createdAt desc)`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching sold vehicles:', error);
    return [];
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "siteSettings"][0]`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
}

export function getImageUrl(image: SanityImage | undefined, width?: number): string {
  if (!image || !builderInstance) return '';

  let imageBuilder = builderInstance.image(image);

  if (width) {
    imageBuilder = imageBuilder.width(width);
  }

  return imageBuilder.url();
}

export async function getHomePageContent(): Promise<HomePageContent | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "homePageContent"][0]`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching home page content:', error);
    return null;
  }
}

export async function getFeaturedVehicles(): Promise<Vehicle[]> {
  const client = await getClient();
  if (!client) return [];

  try {
    const query = `*[_type == "vehicle" && isFeatured == true && status == "available"] | order(_createdAt desc)`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching featured vehicles:', error);
    return [];
  }
}

export async function getAboutPageContent(): Promise<AboutPageContent | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "aboutPageContent"][0]`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching about page content:', error);
    return null;
  }
}

export async function getSoldPageContent(): Promise<SoldPageContent | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "soldPageContent"][0]`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching sold page content:', error);
    return null;
  }
}

export async function getForSalePageContent(): Promise<ForSalePageContent | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "forSalePageContent"][0]`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching for sale page content:', error);
    return null;
  }
}

export async function getServicesPageContent(): Promise<ServicesPageContent | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "servicesPageContent"][0]`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching services page content:', error);
    return null;
  }
}

export async function getContactDetails(): Promise<ContactDetails | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "contactDetails"][0]`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching contact details:', error);
    return null;
  }
}

export async function getInstagramContent(): Promise<InstagramContent | null> {
  const client = await getClient();
  if (!client) return null;

  try {
    const query = `*[_type == "instagramContent"][0]`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.error('Error fetching Instagram content:', error);
    return null;
  }
}
