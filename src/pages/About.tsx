import { TrophyIcon, UsersIcon, HeartIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline';
import ScrollReveal from '../components/ScrollReveal';
import { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useAboutPageContent } from '../hooks/useSanity';
import Loader from '../components/Loader';

interface AboutProps {
  onNavigate: (page: string) => void;
  onOpenContactPanel?: () => void;
}

export default function About({ onNavigate, onOpenContactPanel }: AboutProps) {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  
  const { content: sanityContent, loading } = useAboutPageContent();

  const iconMap: { [key: string]: any } = {
    HeartIcon,
    TrophyIcon,
    UsersIcon,
    CheckCircleIcon
  };

  const content = sanityContent;
  
  if (sanityContent && content?.values) {
    content.values = content.values.map((item: any) => ({
      ...item,
      icon: iconMap[item.icon] || HeartIcon
    }));
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Asymmetric */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={content?.heroImg}
            alt="About Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            <div className="text-white">
              <div className="mb-6 md:mb-8 flex items-center space-x-3 md:space-x-4">
                <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
                <span className="text-xs md:text-sm tracking-[0.3em] text-gray-300 uppercase">À propos</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[0.95]">
               {parse(content?.heroTitle || '')}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 md:mb-12">
                {parse(content?.heroDescription || '')}
              </p>
              <button
                onClick={onOpenContactPanel}
                className="group px-8 md:px-10 py-4 md:py-5 bg-[#ff1616] text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-3"
              >
                <span>{content?.heroButton}</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {content?.stats?.map((stat, index) => (
                <ScrollReveal
                  key={index}
                  animation="zoom-in"
                  delay={index * 100}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3">{stat.number}</div>
                    <div className="text-xs md:text-sm text-gray-300 tracking-wide">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Unique Layout */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            <ScrollReveal animation="slide-right" className="lg:col-span-2">
              <div className="mb-6 md:mb-8">
                <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">L'Atelier Des Légendes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 leading-tight">
                {parse(content?.storyTitle || '')}
              </h2>
              <div className="space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
               {parse(content?.storyDescription || '')}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" className="relative">
              <div className="sticky top-32 relative z-10">
                <img
                  src={content?.storySideImg}
                  alt="Atelier"
                  referrerPolicy="no-referrer"
                  className="w-full shadow-2xl"
                />
                <div className="absolute -top-8 -left-8 w-full h-full border-2 border-[#ff1616]/20 -z-10"></div>
                <div className="absolute -bottom-8 -right-8 w-full h-full bg-black/5 -z-20"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline - Vertical Layout */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-8 md:mb-10 lg:mb-12 text-center">
            <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">Notre expertise</span>
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {content?.savoirFaireTitle || 'Notre savoir-faire'}
            </h2>
          </div>

          <div className="space-y-0">
            {content?.timeline?.map((item, index) => (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="relative pl-20 md:pl-28 lg:pl-32 py-6 md:py-8 lg:py-10 border-l-2 border-white/20 last:border-l-transparent group">
                  <div className="absolute left-0 top-6 md:top-8 lg:top-10 transform -translate-x-1/2">
                    <div className={`w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 ${index === 1 ? 'bg-orange-500' : index === 2 ? 'bg-green-500' : 'bg-[#ff1616]'} rounded-full flex items-center justify-center text-base md:text-lg lg:text-xl font-bold group-hover:scale-110 transition-transform duration-500`}>
                      {item.year}
                    </div>
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Grid Layout */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fade">
            <div className="mb-8 md:mb-10 lg:mb-12 max-w-3xl">
              <div className="mb-6 md:mb-8">
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">Nos valeurs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              {parse(content?.ourValueTitle || '')}
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              {parse(content?.ourValueDescription || '')}
            </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {content?.values?.map((value, index) => (
              <ScrollReveal
                key={index}
                animation="rotate-in"
                delay={index * 100}
              >
                <div className="group relative p-6 md:p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-[#ff1616] transition-all duration-500">
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#ff1616] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="relative z-10 space-y-3 md:space-y-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-black group-hover:bg-[#ff1616] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <value.icon className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#ff1616] transition-colors duration-300">{value.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{parse(value.description)}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
        <ScrollReveal animation="blur">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
           {parse(content?.ctaTitle || '')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
            {parse(content?.ctaDescription || '')}
          </p>
          <button
            onClick={() => onNavigate('for-sale')}
            className="px-8 md:px-12 py-4 md:py-6 bg-[#ff1616] text-white font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            {parse(content?.ctaButton || '')}
          </button>
          </div>
        </ScrollReveal>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">Témoignages</span>
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              {parse(content?.testimonialTitle || '')}
            </h2>
            <p className="text-base md:text-xl text-gray-600">
              {parse(content?.testimonialDescription || '')}
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}>
              {[0, 1, 2].map((slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {content?.testimonials?.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                      <div key={index} className="group relative bg-white p-8 md:p-10 border-l-4 border-black hover:border-[#ff1616] transition-all duration-500 hover:shadow-2xl">
                        <div className="absolute top-6 md:top-8 right-6 md:right-8 text-5xl md:text-6xl text-[#ff1616] opacity-20 font-serif">"</div>
                        <div className="relative z-10 space-y-4 md:space-y-6">
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <StarIcon key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#ff1616] fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            {testimonial.comment}
                          </p>
                          <div className="pt-4 md:pt-6 border-t border-gray-200">
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
    </div>
  );
}
