import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ContactPanel from './components/ContactPanel';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import About from './pages/About';
import ForSale from './pages/ForSale';
import VehicleDetail from './pages/VehicleDetail';
import Sold from './pages/Sold';
import Services from './pages/Services';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfSale from './pages/TermsOfSale';
import { updateMetaTags, getOrganizationSchema, getBreadcrumbSchema, convertSanityToSEO } from './utils/seo';
import { usePageSEO, useSiteSettings, useVehicles } from './hooks/useSanity';
import { getPageSEO as getLocalPageSEO, siteSettings as localSiteSettings } from './data/seo';
import { useContactDetails } from './hooks/useSanity';
import Studio from './pages/Studio';
import Loader from './components/Loader';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | undefined>();
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);
  const { contactDetails, loading } = useContactDetails();
  const { vehicles: vehicleData, loading: _vehiclesLoading } = useVehicles();

  const handleNavigate = (page: string, vehicleId?: string) => {
    setCurrentPage(page);
    setSelectedVehicleId(vehicleId);
    window.scrollTo(0, 0);
  };

  const { settings } = useSiteSettings();
  const { seo: sanitySEO } = usePageSEO(currentPage);

  useEffect(() => {
    const siteUrl = settings?.siteUrl || localSiteSettings.siteUrl;

    const localSeoData = getLocalPageSEO(currentPage);

    const seoConfig: Record<string, any> = {
      [currentPage]: {
        title: localSeoData.title,
        description: localSeoData.description,
        keywords: localSeoData.keywords,
        ogImage: localSeoData.ogImage,
        canonical: localSeoData.canonical?.replace('https://www.latelier-des-legendes.fr', siteUrl),
        structuredData: currentPage === 'home'
          ? getOrganizationSchema()
          : getBreadcrumbSchema([
              { name: 'Accueil', url: `${siteUrl}/` },
              { name: localSeoData.title.split('|')[0].trim(), url: localSeoData.canonical || `${siteUrl}/${currentPage}` }
            ])
      }
    };

    const seoFromSanity = convertSanityToSEO(sanitySEO, siteUrl);
    const config = seoFromSanity || seoConfig[currentPage] || seoConfig.home;

    updateMetaTags(config);
  }, [currentPage, sanitySEO, settings]);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/studio') {
      window.location.href = 'https://atelierdeslegendes.sanity.studio/';
    }
  }, []);


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} onOpenContactPanel={() => setIsContactPanelOpen(true)} />;
      case 'about':
        return <About onNavigate={handleNavigate} onOpenContactPanel={() => setIsContactPanelOpen(true)} />;
      case 'for-sale':
        return <ForSale onNavigate={handleNavigate} onOpenContactPanel={() => setIsContactPanelOpen(true)} />;
      case 'vehicle-detail':
        return <VehicleDetail list={vehicleData} vehicleId={selectedVehicleId} onNavigate={handleNavigate} onOpenContactPanel={() => setIsContactPanelOpen(true)} />;
      case 'sold':
        return <Sold onNavigate={handleNavigate} onOpenContactPanel={() => setIsContactPanelOpen(true)} />;
      case 'services':
        return <Services onNavigate={handleNavigate} onOpenContactPanel={() => setIsContactPanelOpen(true)} />;
      case 'legal-notice':
        return <LegalNotice onNavigate={handleNavigate} />;
      case 'privacy-policy':
        return <PrivacyPolicy onNavigate={handleNavigate} />;
      case 'terms-of-sale':
        return <TermsOfSale onNavigate={handleNavigate} />;
      case 'studio':
        return <Studio />;
      default:
        return <Home onNavigate={handleNavigate} onOpenContactPanel={() => setIsContactPanelOpen(true)} />;
    }
  };

  if(_vehiclesLoading || loading) return <Loader />

  return (
    <div className="min-h-screen bg-white overflow-x-hiddern">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContactPanel={() => setIsContactPanelOpen(true)}
      />
      <main className="fade-in overflow-x-hidden">
        {renderPage()}
      </main>
      {!loading && <Footer 
      onNavigate={handleNavigate} 
      onOpenContactPanel={() => setIsContactPanelOpen(true)} 
      contactDetails={contactDetails}
      loading={loading}
      />}
      <ScrollToTop />
      <ContactPanel
        isOpen={isContactPanelOpen}
        onClose={() => setIsContactPanelOpen(false)}
        contactDetails={contactDetails}
        loading={loading}
      />
      <CookieBanner />
    </div>
  );
}

export default App;
