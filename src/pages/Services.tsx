import { MagnifyingGlassIcon, ArrowTrendingUpIcon, ShieldCheckIcon, WrenchIcon, ClockIcon, DocumentTextIcon, UsersIcon, CheckCircleIcon, ArrowRightIcon, BuildingStorefrontIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import InstagramSection from '../components/InstagramSection';
import parse from 'html-react-parser';
import { useServicesPageContent } from '../hooks/useSanity';
import Loader from '../components/Loader';

interface ServicesProps {
  onNavigate: (page: string) => void;
  onOpenContactPanel?: () => void;
  faq?: boolean;
}

export default function Services({ onNavigate, onOpenContactPanel, faq }: ServicesProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const { content: sanityContent, loading } = useServicesPageContent();

  const iconMap: { [key: string]: any } = {
    'Dépôt-Vente': BuildingStorefrontIcon,
    Recherche: MagnifyingGlassIcon,
    'Transparence totale': ShieldCheckIcon,
    Expertise: WrenchIcon,
    Réactivité: ClockIcon,
    'Accompagnement personnalisé': UsersIcon
  };

  const content: any = sanityContent;

  if (sanityContent && content?.depotVente) {
    content.depotVente = {
      ...content.depotVente,
      icon: iconMap[content.depotVente.icon] || BuildingStorefrontIcon
    };
  }

  if (sanityContent && content?.otherServices?.services) {
    content.otherServices.services = content.otherServices.services.map((item: any) => ({
      ...item,
      icon: iconMap[item.icon] || MagnifyingGlassIcon
    }));
  }

  if (sanityContent && content?.trustIndicators) {
    content.trustIndicators = content.trustIndicators.map((item: any) => ({
      ...item,
      icon: iconMap[item.title] || UsersIcon
    }));
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const maxSlide = isMobile && content?.otherServices?.services ? content.otherServices.services.length - 1 : 1;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isMobile, content?.otherServices?.services]);

  useEffect(() => {
    if (faq) {
      setTimeout(() => {
        const faqEl = document.getElementById('faq');
        if (faqEl) {
          faqEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  }, [faq]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handlePrevSlide = () => {
    const maxSlide = isMobile && content?.otherServices?.services ? content.otherServices.services.length - 1 : 1;
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNextSlide = () => {
    const maxSlide = isMobile && content?.otherServices?.services ? content.otherServices.services.length - 1 : 1;
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNextSlide();
    }

    if (distance < -minSwipeDistance) {
      handlePrevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  if (loading || !content) return <Loader />;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Dépôt-Vente */}
      <section className="relative flex items-center overflow-hidden bg-black py-20 md:py-28 lg:py-32">
        <div className="absolute inset-0">
          <img
            src={content.depotVente.image}
            alt="Dépôt-Vente"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-[0.95]">
                {parse(content.depotVente.title)}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                {parse(content.depotVente.description)}
              </p>
              <button
                onClick={onOpenContactPanel}
                className="px-8 py-3 md:px-10 md:py-4 bg-[#ff1616] text-white font-semibold text-base hover:bg-white hover:text-black transition-all duration-300"
              >
                {content.depotVente.cta}
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 lg:p-10 border-2 border-white/20">
              <ul className="space-y-2.5 md:space-y-3">
                {content.depotVente.features.slice(0, 6).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2.5 text-white">
                    <CheckCircleIcon className="w-5 h-5 text-[#ff1616] flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">Nos autres services</span>
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              {parse(content.otherServices.otherServicesTitle)}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {parse(content.otherServices.otherServicesDescription)}
            </p>
          </div>

          <div className="relative">
            {(isMobile || !isAutoPlaying) && (
              <>
                <button
                  onClick={handlePrevSlide}
                  className="absolute -left-3 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 w-8 h-8 md:w-14 md:h-14 bg-white hover:bg-[#ff1616] border-2 border-gray-200 hover:border-[#ff1616] flex items-center justify-center group transition-all duration-300 z-10 shadow-lg"
                  aria-label="Slide précédent"
                >
                  <ChevronLeftIcon className="w-4 h-4 md:w-7 md:h-7 text-black group-hover:text-white transition-colors" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute -right-3 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 w-8 h-8 md:w-14 md:h-14 bg-white hover:bg-[#ff1616] border-2 border-gray-200 hover:border-[#ff1616] flex items-center justify-center group transition-all duration-300 z-10 shadow-lg"
                  aria-label="Slide suivant"
                >
                  <ChevronRightIcon className="w-4 h-4 md:w-7 md:h-7 text-black group-hover:text-white transition-colors" />
                </button>
              </>
            )}

            <div className="overflow-hidden">
              {isMobile ? (
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {content.otherServices.services.map((service: any, index: number) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div
                        onClick={() => setIsAutoPlaying(false)}
                        className="group bg-white border-2 border-gray-200 hover:border-[#ff1616] transition-all duration-500 overflow-hidden cursor-pointer"
                      >
                        <div className="relative overflow-hidden aspect-[4/3]">
                          <img
                            src={service.image}
                            alt={service.title}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                          <div className="absolute top-4 left-4">
                            <div className="w-12 h-12 bg-[#ff1616] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                              <service.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <h3 className="text-xl font-bold group-hover:text-[#ff1616] transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {service.description}
                          </p>

                          <ul className="space-y-2">
                            {service.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start gap-2 text-xs">
                                <CheckCircleIcon className="w-4 h-4 text-[#ff1616] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <button
                            onClick={onOpenContactPanel}
                            className="group/btn w-full py-2.5 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                          >
                            <span>En savoir plus</span>
                            <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {[0, 1].map((slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {content.otherServices.services.slice(slideIndex * 3, slideIndex * 3 + 3).map((service: any, index: number) => (
                          <div
                            key={index}
                            onClick={() => setIsAutoPlaying(false)}
                            className="group bg-white border-2 border-gray-200 hover:border-[#ff1616] transition-all duration-500 overflow-hidden cursor-pointer"
                          >
                            <div className="relative overflow-hidden aspect-[4/3]">
                              <img
                                src={service.image}
                                alt={service.title}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ff1616] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                  <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                              </div>
                            </div>

                            <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                              <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#ff1616] transition-colors duration-300">
                                {service.title}
                              </h3>
                              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                {service.description}
                              </p>

                              <ul className="space-y-2 md:space-y-3">
                                {service.features.map((feature: string, fIndex: number) => (
                                  <li key={fIndex} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm">
                                    <CheckCircleIcon className="w-4 h-4 md:w-5 md:h-5 text-[#ff1616] flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{feature}</span>
                                  </li>
                                ))}
                              </ul>

                              <button
                                onClick={onOpenContactPanel}
                                className="group/btn w-full py-2.5 md:py-3 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                              >
                                <span>En savoir plus</span>
                                <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-2 transition-transform" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-center items-center gap-3 mt-8 md:mt-12">
              {isMobile ? (
                content.otherServices.services.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'w-12 bg-[#ff1616]' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))
              ) : (
                [0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'w-12 bg-[#ff1616]' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              {content.trustIndicatorTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-0">
            {content.trustIndicators.map((item: any, index: number) => (
              <div
                key={index}
                className="group relative p-8 md:p-10 lg:p-12 border md:border-r border-white/20 md:last:border-r-0 hover:bg-white/5 transition-all duration-500"
              >
                <div className="absolute top-8 md:top-10 right-8 md:right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
                </div>
                <div className="relative z-10 space-y-4 md:space-y-6 text-center">
                  <div className="inline-flex w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-[#ff1616] items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">FAQ</span>
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              {content.faqTitle}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600">
              {content.faqDescription}
            </p>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq: any, index: number) => (
              <div
                key={index}
                className="group border-2 border-gray-200 hover:border-[#ff1616] transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-base md:text-lg pr-4 group-hover:text-[#ff1616] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-black group-hover:bg-[#ff1616] flex items-center justify-center transition-all duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 bg-gray-50">
                    <div className="pt-3 md:pt-4 border-t border-gray-200">
                      <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-4 md:mb-6">Vous avez d'autres questions ?</p>
            <button
              onClick={onOpenContactPanel}
              className="px-8 md:px-12 py-4 md:py-6 bg-black text-white font-semibold text-base md:text-lg hover:bg-[#ff1616] transition-all duration-300"
            >
              Contactez-nous
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            Prêt à démarrer<br />
            votre projet ?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment
            nous pouvons vous aider
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenContactPanel}
              className="px-8 md:px-12 py-4 md:py-6 bg-[#ff1616] text-white font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Nous contacter
            </button>
            <button
              onClick={() => onNavigate('for-sale')}
              className="px-8 md:px-12 py-4 md:py-6 border-2 border-white text-white font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              Voir nos véhicules
            </button>
          </div>
        </div>
      </section>

      <InstagramSection />
    </div>
  );
}
