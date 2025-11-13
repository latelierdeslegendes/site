import { useState } from 'react';
import { CheckCircleIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, CalendarIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import ScrollReveal from '../components/ScrollReveal';
import InstagramSection from '../components/InstagramSection';
import parse from 'html-react-parser';
import { useSoldPageContent, useSoldVehicles } from '../hooks/useSanity';
import Loader from '../components/Loader';

interface SoldProps {
  onNavigate: (page: string) => void;
  onOpenContactPanel?: () => void;
}

export default function Sold({ onNavigate, onOpenContactPanel }: SoldProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const { content: sanityContent, loading: contentLoading } = useSoldPageContent();
  const { vehicles: sanityVehicles, loading: vehiclesLoading } = useSoldVehicles();

  const iconMap: { [key: string]: any } = {
    ArrowTrendingUpIcon,
    CheckCircleIcon,
    CalendarIcon
  };

  const content = sanityContent;
  
  if (sanityContent && content?.successElements) {
    content.successElements = content.successElements.map((item: any) => ({
      ...item,
      icon: iconMap[item.icon] || CheckCircleIcon
    }));
  }

  const soldVehicles = (sanityVehicles || []).map((v: any) => ({
    id: v._id,
    name: v.name,
    brand: v.brand,
    year: v.year,
    image: v.image,
    images: v.images
  }));

  const brands = ['all', ...Array.from(new Set(soldVehicles.map(v => v.brand)))];
  const years = ['all', ...Array.from(new Set(soldVehicles.map(v => v.year.toString()))).sort().reverse()];

  const filteredVehicles = soldVehicles.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || vehicle.brand === selectedBrand;
    const matchesYear = selectedYear === 'all' || vehicle.year.toString() === selectedYear;

    return matchesSearch && matchesBrand && matchesYear;
  });

  if (contentLoading || vehiclesLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Timeline Style */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0">
          <img
            src={content?.heroImgSrc}
            alt="Sold Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 md:mb-8 flex items-center space-x-3 md:space-x-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ff1616] flex items-center justify-center">
                <CheckCircleIcon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-[#ff1616] to-transparent"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[0.95] text-white">
              {parse(content?.heroTitle || '')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              {parse(content?.heroDescription || '')}
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar - Sticky */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
            <div className="flex-1 relative group">
              <MagnifyingGlassIcon className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 md:w-5 md:h-5 group-focus-within:text-[#ff1616] transition-colors" />
              <input
                type="text"
                placeholder="Rechercher un véhicule, une marque..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-3 md:py-4 border-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-[#ff1616] transition-all duration-300 text-base md:text-lg"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center space-x-3 px-6 md:px-8 py-3 md:py-4 bg-black text-white font-semibold hover:bg-[#ff1616] transition-all duration-300"
            >
              <AdjustmentsHorizontalIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span>Filtres</span>
            </button>

            <div className={`${showFilters ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row gap-3 md:gap-4`}>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 focus:outline-none focus:border-[#ff1616] font-semibold text-gray-700 cursor-pointer hover:border-gray-400 transition-all min-w-[200px] text-sm md:text-base"
              >
                <option value="all">Toutes marques</option>
                {brands.filter(b => b !== 'all').map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 focus:outline-none focus:border-[#ff1616] font-semibold text-gray-700 cursor-pointer hover:border-gray-400 transition-all min-w-[200px] text-sm md:text-base"
              >
                <option value="all">Toutes années</option>
                {years.filter(y => y !== 'all').map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Counter */}
      <section className="py-6 md:py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base md:text-lg text-gray-600">
              <span className="font-bold text-black text-xl md:text-2xl">{filteredVehicles.length}</span> véhicule{filteredVehicles.length > 1 ? 's' : ''} vendu{filteredVehicles.length > 1 ? 's' : ''}
            </p>
            {(searchTerm || selectedBrand !== 'all' || selectedYear !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBrand('all');
                  setSelectedYear('all');
                }}
                className="text-[#ff1616] font-semibold hover:underline text-sm md:text-base"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Vehicle Grid - Masonry Timeline */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {filteredVehicles.length === 0 ? (
            <div className="text-center py-16 md:py-20">
              <div className="mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 flex items-center justify-center mx-auto">
                  <MagnifyingGlassIcon className="w-10 h-10 md:w-12 md:h-12 text-gray-400" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Aucun véhicule trouvé</h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Modifiez vos critères de recherche pour voir plus de résultats
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBrand('all');
                  setSelectedYear('all');
                }}
                className="px-6 md:px-8 py-3 md:py-4 bg-black text-white font-semibold hover:bg-[#ff1616] transition-all duration-300"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredVehicles.map((vehicle, index) => {
                const imageUrl = vehicle.image;

                return (
                <ScrollReveal
                  key={vehicle.id}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="group">
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-900 mb-3 md:mb-4">
                    <img
                      src={imageUrl}
                      alt={vehicle.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                      <div className="transform translate-y-0 transition-all duration-500">
                        <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{vehicle.name}</h3>
                        <div className="flex items-center text-xs md:text-sm">
                          <span className="flex items-center gap-1.5 md:gap-2">
                            <CalendarIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                            {vehicle.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-white flex items-center justify-center">
                        <CheckCircleIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Interest Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenContactPanel?.();
                    }}
                    className="w-full mt-4 px-4 py-3 bg-black text-white font-semibold text-xs md:text-sm tracking-wider hover:bg-[#ff1616] transition-all duration-300"
                  >
                    CE MODÈLE M'INTÉRESSE
                  </button>
                </div>
                </ScrollReveal>
              )})}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">Nos réalisations</span>
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              {parse(content?.successTitle || '')}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {parse(content?.successSubtitle || '')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {content?.successElements?.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-black p-8 md:p-10 lg:p-12 border-b md:border-b-0 md:border-r border-gray-800 last:border-0 hover:bg-white hover:border hover:border-black transition-all duration-500"
              >
                <div className="absolute top-8 md:top-10 right-8 md:right-10 text-6xl md:text-7xl lg:text-8xl font-bold text-white/10 group-hover:text-gray-100 transition-colors duration-500">
                  0{index + 1}
                </div>
                <div className="relative z-10 space-y-3 md:space-y-4 text-center">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white group-hover:text-[#ff1616] transition-colors duration-500">
                    {stat.number}
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white group-hover:text-black transition-colors duration-500">
                    {stat.label}
                  </div>
                  <p className="text-sm md:text-base text-gray-300 group-hover:text-gray-600 leading-relaxed transition-colors duration-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            {parse(content?.searchAnotherVehicleHeadline || '')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
            {parse(content?.searchAnotherVehicleDescription || '')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('for-sale')}
              className="px-8 md:px-12 py-4 md:py-6 bg-[#ff1616] text-white font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              {parse(content?.searchAnotherVehicleButtonLabel1 || '')}
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-8 md:px-12 py-4 md:py-6 border-2 border-white text-white font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              {parse(content?.searchAnotherVehicleButtonLabel2 || '')}
            </button>
          </div>
        </div>
      </section>

      <InstagramSection />
    </div>
  );
}
