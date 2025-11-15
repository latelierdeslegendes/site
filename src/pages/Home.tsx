import { ArrowRightIcon, ShieldCheckIcon, GlobeAltIcon, HeartIcon, WrenchIcon, ClockIcon, ArrowTrendingUpIcon, StarIcon } from '@heroicons/react/24/outline';
import ScrollReveal from '../components/ScrollReveal';
import InstagramSection from '../components/InstagramSection';
import { useState, useEffect } from 'react';
import { useHomePageContent, useFeaturedVehicles } from '../hooks/useSanity';
import Loader from '../components/Loader';

interface HomeProps {
  onNavigate: (page: string, id?: string) => void;
  onOpenContactPanel?: () => void;
}

export default function Home({ onNavigate, onOpenContactPanel }: HomeProps) {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [lockOverflowX, setLockOverflowX] = useState(true);
  
  const { content: sanityContent, loading: _contentLoading } = useHomePageContent();
  const { vehicles: sanityFeaturedVehicles, loading: _vehiclesLoading } = useFeaturedVehicles();

  const iconMap: { [key: string]: any } = {
    "Garantie & Sécurité": ShieldCheckIcon,
    "Réseau International": GlobeAltIcon,
    "Passion Automobile":HeartIcon,
    "Service Complet":WrenchIcon,
    "Estimation & Rachat":ClockIcon,
    "Sourcing sur-mesure":ArrowTrendingUpIcon,
    "Résultats":StarIcon
  };
  
  const content = sanityContent ;
  
  if (sanityContent && content?.advantages?.items) {
    content.advantages.items = content.advantages.items.map((item: any) => ({
      ...item,
      icon: iconMap[item.title] || ShieldCheckIcon
    }));
  }
  
  if (sanityContent && content?.services?.items) {
    content.services.items = content.services.items.map((item: any) => ({
      ...item,
      icon: iconMap[item.title] || WrenchIcon
    }));
  }

  const featuredVehicles = sanityFeaturedVehicles && sanityFeaturedVehicles.length > 0
    ? sanityFeaturedVehicles.slice(0, 3).map((v: any) => ({
        id: v._id,
        name: v.name,
        year: v.year,
        price: v.price,
        image: v.images && v.images.length > 0 ? v.images[0] : '',
        status: 'available'
      }))
    : []  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      setLockOverflowX(y >= 0 && y <= 220);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if(_contentLoading || _vehiclesLoading ) return <Loader />

  return (
    <div className={`min-h-screen bg-white ${lockOverflowX ? 'overflow-x-hidden' : ''}`}>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={content?.hero.images.desktop}
            alt={content?.hero.images.heroAlt}
            referrerPolicy="no-referrer"
            className="hidden md:block w-full h-full object-cover scale-105"
          />
          <img
            src={content?.hero.images.mobile}
            referrerPolicy="no-referrer"
            alt={content?.hero.images.heroMobileAlt}
            className="md:hidden w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="mb-4 md:mb-6 flex items-center space-x-3 md:space-x-4">
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-300 uppercase">{content?.hero.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-[0.95] tracking-tight text-white">
              {content?.hero.title.line1}<br />
              {content?.hero.title.line2}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{content?.hero.title.line3}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-20 md:mb-12 text-gray-300 leading-relaxed max-w-2xl">
              {content?.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-4">
              <button
                onClick={() => onNavigate('for-sale')}
                className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-black font-semibold overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span>{content?.hero.cta.primary}</span>
                  <ArrowRightIcon className="w-5 h-5 group-hoverr:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-[#ff1616] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white z-20">
                  <span className="flex items-center space-x-3">
                    <span>{content?.hero.cta.primary}</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </span>
                </span>
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-8 md:px-10 py-4 md:py-5 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                {content?.hero.cta.secondary}
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center">
            <ScrollReveal animation="slide-left" className="lg:col-span-2 order-2 lg:order-1 relative">
              <div className="relative z-10">
                <img
                  src={content?.about.image.src}
                  alt={content?.about.image.alt}
                  referrerPolicy="no-referrer"
                  className="shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-8 -left-[10px] w-full h-full border-2 border-[#ff1616]/20 -z-10"></div>
              <div className="absolute -bottom-8 -right-[11px] w-full h-full bg-black/5 -z-20"></div>
            </ScrollReveal>
            <ScrollReveal animation="slide-right" className="lg:col-span-3 order-1 lg:order-2">
              <div className="mb-4 md:mb-6">
                <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">{content?.about.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                {content?.about.title.line1}<br />
                {content?.about.title.line2}<br />
                {content?.about.title.line3} <span className="text-gray-400" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>{content?.about.title.line4}</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-600 leading-relaxed mb-8 md:mb-10">
                <p>
                  <strong className="text-black">{content?.about.paragraph1.bold}</strong>{content?.about.paragraph1.text}
                </p>
                <p>
                  {content?.about.paragraph2}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                <button
                  onClick={() => onNavigate('about')}
                  className="group flex items-center space-x-3 text-black font-semibold hover:text-[#ff1616] transition-colors"
                >
                  <span className="text-base md:text-lg">{content?.about.cta}</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-black">{content?.about.stats.value}</div>
                  <div className="text-sm text-gray-500">{content?.about.stats.label}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollReveal animation="fade">
            <div className="mb-12 md:mb-16 lg:mb-20">
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
                <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">{content?.featured.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                {content?.featured.title}
              </h2>
              <p className="text-base md:text-xl text-gray-400 max-w-2xl">
                {content?.featured.subtitle}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredVehicles.map((vehicle, index) => (
              <ScrollReveal
                key={vehicle.id}
                animation="scale"
                delay={index * 100}
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => onNavigate('vehicle-detail', vehicle.id)}
                >
                  <div className="relative overflow-hidden mb-6">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-6 right-6">
                    <div className="w-3 h-3 bg-[#ff1616] rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="group/status flex items-center justify-between text-white hover:text-[#ff1616] transition-colors">
                      <span className="text-sm tracking-wider">{content?.featured.status}</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </div>
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#ff1616] transition-colors duration-300">{vehicle.name}</h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-2 text-gray-400">
                      <span className="text-sm tracking-wide">{content?.featured.yearLabel} {vehicle.year}</span>
                      <span className="text-xl md:text-2xl font-bold text-white">{vehicle.price}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 md:mt-16 lg:mt-20 text-center">
            <button
              onClick={() => onNavigate('for-sale')}
              className="group relative px-8 md:px-12 py-4 md:py-6 border-2 border-white text-white font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <span className="flex items-center space-x-3">
                <span>{content.featured.cta}</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto ml-[13px]">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
            <div className="lg:sticky lg:top-32">
              <div className="mb-6 md:mb-8">
                <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">{content?.advantages.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                {content?.advantages.title.line1}<br />
                {content?.advantages.title.line2}
              </h2>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                {content?.advantages.subtitle}
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {content?.advantages.items.map((advantage, index) => (
                <div
                  key={index}
                  className="group relative pl-16 md:pl-20 lg:pl-24 py-6 md:py-8 border-l-2 border-gray-200 hover:border-[#ff1616] transition-colors duration-500"
                >
                  <div className="absolute left-0 top-6 md:top-8 transform -translate-x-1/2">
                    <div className="mx-2 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-black group-hover:bg-[#ff1616] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <advantage.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#ff1616] transition-colors duration-300">{advantage.title}</h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#ff1616] opacity-5 transform skew-x-12"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 md:mb-16 lg:mb-20 max-w-3xl">
            <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">{content?.services.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              {content?.services.title.line1}<br />
              {content?.services.title.line2}
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              {content?.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {content?.services.items.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-gray-200 last:border-0 hover:bg-black transition-all duration-500"
              >
                <div className="absolute top-8 md:top-10 right-8 md:right-10 text-6xl md:text-7xl lg:text-8xl font-bold text-gray-100 group-hover:text-white/10 transition-colors duration-500">
                  {service.number}
                </div>
                <div className="relative z-10 space-y-4 md:space-y-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-black group-hover:bg-[#ff1616] flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                    <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-white transition-colors duration-500">{service.title}</h3>
                  <p className="text-base text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-500">{service.description}</p>
                  <button
                    onClick={() => onNavigate(service.link)}
                    className="inline-flex items-center space-x-2 text-black group-hover:text-[#ff1616] font-semibold transition-colors duration-500"
                  >
                    <span>{content.services.cta}</span>
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16">
            <div>
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-6">
                <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
                <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">{content?.sold.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                {content?.sold.title}
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-2xl">
                {content?.sold.subtitle}
              </p>
            </div>
            <button
              onClick={() => onNavigate('sold')}
              className="group mt-6 lg:mt-0 flex items-center space-x-3 text-black font-semibold hover:text-[#ff1616] transition-colors"
            >
              <span className="text-base md:text-lg">{content?.sold.cta}</span>
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {content?.sold.images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden aspect-[4/3] cursor-pointer bg-gray-900"
                onClick={() => onNavigate('sold')}
              >
                <img
                  src={image}
                  referrerPolicy="no-referrer"
                  alt={`${content?.sold.imageAlt} ${index + 1}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-sm tracking-wider font-semibold">{content.sold.status}</span>
                    <ArrowRightIcon className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">{content?.testimonials.badge}</span>
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              {content?.testimonials.title}
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              {content?.testimonials.subtitle}
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}>
              {[0, 1, 2].map((slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {content?.testimonials.items.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                      <div key={index} className="group relative bg-white p-3 md:p-10 border-l-4 border-black hover:border-[#ff1616] transition-all duration-500 hover:shadow-2xl">
                        <div className="absolute top-6 md:top-8 right-6 md:right-8 text-5xl md:text-6xl text-[#ff1616] opacity-20 font-serif">"</div>
                        <div className="relative z-10 space-y-4 md:space-y-6">
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <StarIcon key={i} className="w-3 h-3 md:w-5 md:h-5 text-[#ff1616] fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-700 text-base text-sm leading-relaxed md:text-lg">
                            {testimonial.comment}
                          </p>
                          <div className="pt-2 md:pt-6 border-t border-gray-200">
                            <p className="font-bold text-base md:text-lg mb-1">{testimonial.name}</p>
                            <p className="text-sm text-gray-500 tracking-wide">{testimonial.vehicle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-8 md:mt-12">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonialSlide === index ? 'bg-[#ff1616] w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 lg:py-32 px-4 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
                <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">{content?.contact.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                {content?.contact.title.line1}<br />
                {content?.contact.title.line2}
              </h2>
              <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
                {content?.contact.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenContactPanel}
                  className="group px-8 md:px-10 py-4 md:py-5 bg-[#ff1616] text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <span>{content?.contact.cta.primary}</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate('for-sale')}
                  className="px-8 md:px-10 py-4 md:py-5 border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300"
                >
                  {content?.contact.cta.secondary}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:hidden mt-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">{content.contact.stats[0].value}</div>
                <div className="text-xs text-gray-400 tracking-wide">{content.contact.stats[0].label}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">{content.contact.stats[1].value}</div>
                <div className="text-xs text-gray-400 tracking-wide">{content.contact.stats[1].label}</div>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                  <div className="text-4xl font-bold mb-2">{content.contact.stats[0].value}</div>
                  <div className="text-sm text-gray-400 tracking-wide">{content.contact.stats[0].label}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                  <div className="text-4xl font-bold mb-2">{content.contact.stats[1].value}</div>
                  <div className="text-sm text-gray-400 tracking-wide">{content.contact.stats[1].label}</div>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                  <div className="text-4xl font-bold mb-2">{content.contact.stats[2].value}</div>
                  <div className="text-sm text-gray-400 tracking-wide">{content.contact.stats[2].label}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 border border-white/20">
                  <div className="text-4xl font-bold mb-2">{content.contact.stats[3].value}</div>
                  <div className="text-sm text-gray-400 tracking-wide">{content.contact.stats[3].label}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InstagramSection />
    </div>
  );
}
