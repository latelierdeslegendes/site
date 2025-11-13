import { useState, useEffect } from 'react';
import {
  getPageSEO,
  getAllVehicles,
  getVehicleById,
  getAvailableVehicles,
  getSoldVehicles,
  getSiteSettings,
  getHomePageContent,
  getAboutPageContent,
  getSoldPageContent,
  getForSalePageContent,
  getServicesPageContent,
  getContactDetails,
  getInstagramContent,
  getFeaturedVehicles,
  getImageUrl,
  PageSEO,
  Vehicle,
  SiteSettings,
  HomePageContent,
  AboutPageContent,
  SoldPageContent,
  ForSalePageContent,
  ServicesPageContent,
  ContactDetails,
  InstagramContent
} from '../lib/sanity';

export function usePageSEO(pageId: string) {
  const [seo, setSeo] = useState<PageSEO | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchSEO() {
      try {
        const data = await getPageSEO(pageId);
        if (isMounted) {
          setSeo(data);
        }
      } catch (error) {
        console.error('Error in usePageSEO:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchSEO();

    return () => {
      isMounted = false;
    };
  }, [pageId]);

  return { seo, loading };
}

export function useVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchVehicles() {
      try {
        const data = await getAllVehicles();
        if (isMounted) {
          setVehicles(data);
        }
      } catch (error) {
        console.error('Error in useVehicles:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchVehicles();

    return () => {
      isMounted = false;
    };
  }, []);

  return { vehicles, loading };
}

export function useVehicle(id: string | undefined) {
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchVehicle() {
      if (!id) {
        setLoading(false);
        return;
      }

      try {
        const data = await getVehicleById(id);
        if (isMounted) {
          setVehicle(data);
        }
      } catch (error) {
        console.error('Error in useVehicle:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchVehicle();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { vehicle, loading };
}

export function useAvailableVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchVehicles() {
      try {
        const data = await getAvailableVehicles();
        if (isMounted) {
          setVehicles(data);
        }
      } catch (error) {
        console.error('Error in useAvailableVehicles:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchVehicles();

    return () => {
      isMounted = false;
    };
  }, []);

  return { vehicles, loading };
}

export function useSoldVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchVehicles() {
      try {
        const data = await getSoldVehicles();
        if (isMounted) {
          setVehicles(data);
        }
      } catch (error) {
        console.error('Error in useSoldVehicles:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchVehicles();

    return () => {
      isMounted = false;
    };
  }, []);

  return { vehicles, loading };
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchSettings() {
      try {
        const data = await getSiteSettings();
        if (isMounted) {
          setSettings(data);
        }
      } catch (error) {
        console.error('Error in useSiteSettings:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchSettings();

    return () => {
      isMounted = false;
    };
  }, []);

  return { settings, loading };
}

export function useHomePageContent() {
  const [content, setContent] = useState<HomePageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchContent() {
      try {
        const data = await getHomePageContent();
        if (isMounted) {
          setContent(data);
        }
      } catch (error) {
        console.error('Error in useHomePageContent:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, loading };
}

export function useFeaturedVehicles() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchVehicles() {
      try {
        const data = await getFeaturedVehicles();
        if (isMounted) {
          setVehicles(data);
        }
      } catch (error) {
        console.error('Error in useFeaturedVehicles:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchVehicles();

    return () => {
      isMounted = false;
    };
  }, []);

  return { vehicles, loading };
}

export function useAboutPageContent() {
  const [content, setContent] = useState<AboutPageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchContent() {
      try {
        const data = await getAboutPageContent();
        if (isMounted) {
          setContent(data);
        }
      } catch (error) {
        console.error('Error in useAboutPageContent:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, loading };
}

export function useSoldPageContent() {
  const [content, setContent] = useState<SoldPageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchContent() {
      try {
        const data = await getSoldPageContent();
        if (isMounted) {
          setContent(data);
        }
      } catch (error) {
        console.error('Error in useSoldPageContent:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, loading };
}

export function useForSalePageContent() {
  const [content, setContent] = useState<ForSalePageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchContent() {
      try {
        const data = await getForSalePageContent();
        if (isMounted) {
          setContent(data);
        }
      } catch (error) {
        console.error('Error in useForSalePageContent:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, loading };
}

export function useServicesPageContent() {
  const [content, setContent] = useState<ServicesPageContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchContent() {
      try {
        const data = await getServicesPageContent();
        if (isMounted) {
          setContent(data);
        }
      } catch (error) {
        console.error('Error in useServicesPageContent:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, loading };
}

export function useContactDetails() {
  const [contactDetails, setContactDetails] = useState<ContactDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchContactDetails() {
      try {
        const data = await getContactDetails();
        if (isMounted) {
          setContactDetails(data);
        }
      } catch (error) {
        console.error('Error in useContactDetails:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchContactDetails();

    return () => {
      isMounted = false;
    };
  }, []);

  return { contactDetails, loading };
}

export function useInstagramContent() {
  const [content, setContent] = useState<InstagramContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchContent() {
      try {
        const data = await getInstagramContent();
        if (isMounted) {
          setContent(data);
        }
      } catch (error) {
        console.error('Error in useInstagramContent:', error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, []);

  return { content, loading };
}

export { getImageUrl };
