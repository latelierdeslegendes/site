import { useState } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon, ArrowRightIcon, ChartBarIcon, CalendarIcon, FireIcon, MapIcon } from '@heroicons/react/24/outline';
import ScrollReveal from '../components/ScrollReveal';
import InstagramSection from '../components/InstagramSection';
import parse from 'html-react-parser';
import { useForSalePageContent, useAvailableVehicles } from '../hooks/useSanity';
import Loader from '../components/Loader';
interface ForSaleProps {
  onNavigate: (page: string, vehicleId?: string) => void;
  onOpenContactPanel?: () => void;
}

export default function ForSale({ onNavigate, onOpenContactPanel }: ForSaleProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const { content: sanityContent, loading: contentLoading } = useForSalePageContent();
  const { vehicles: sanityVehicles, loading: vehiclesLoading } = useAvailableVehicles();

  const content = sanityContent;

  const vehiclesList = (sanityVehicles || []).map((v: any) => ({
    id: v._id,
    name: v.name,
    brand: v.brand,
    year: v.year,
    mileage: v.mileage,
    power: v.power,
    price: v.priceValue,
    priceDisplay: v.price,
    image: Array.isArray(v.images) ? v.images[0] : '',
    imageAsset: null,
    status: 'available'
  }));

  const brands = ['all', ...Array.from(new Set(vehiclesList.map(v => v.brand)))];

  const filteredVehicles = vehiclesList.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'all' || vehicle.brand === selectedBrand;
    const matchesPrice = priceRange === 'all' ||
                         (priceRange === 'under80' && vehicle.price < 80000) ||
                         (priceRange === '80to180' && vehicle.price >= 80000 && vehicle.price < 180000) ||
                         (priceRange === 'over180' && vehicle.price >= 180000);

    return matchesSearch && matchesBrand && matchesPrice;
  });

  if (contentLoading || vehiclesLoading) return <Loader />;

  return (
    <div className="min-h-screen bg-white overflow-x-hiddern pt-20">
      {/* Hero Section - Full Screen Split */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src={content?.heroImgSrc}
            alt="For Sale Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-4xl">
            <div className="mb-6 md:mb-8 flex items-center space-x-3 md:space-x-4">
              <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gray-300 uppercase">Collection actuelle</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[0.95] text-white">
              {parse(content?.heroTitle || '')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              {content?.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Filter Bar - Sticky */}
      <section className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
            {/* MagnifyingGlassIcon Bar */}
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

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center space-x-3 px-6 md:px-8 py-3 md:py-4 bg-black text-white font-semibold hover:bg-[#ff1616] transition-all duration-300"
            >
              <AdjustmentsHorizontalIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span>Filtres</span>
            </button>

            {/* Desktop Filters */}
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
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 md:px-6 py-3 md:py-4 border-2 border-gray-200 focus:outline-none focus:border-[#ff1616] font-semibold text-gray-700 cursor-pointer hover:border-gray-400 transition-all min-w-[200px] text-sm md:text-base"
              >
                <option value="all">Tous les prix</option>
                <option value="under80">- 80 000 €</option>
                <option value="80to180">80 000 € - 180 000 €</option>
                <option value="over180">+ 180 000 €</option>
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
              <span className="font-bold text-black text-xl md:text-2xl">{filteredVehicles.length}</span> véhicule{filteredVehicles.length > 1 ? 's' : ''} disponible{filteredVehicles.length > 1 ? 's' : ''}
            </p>
            {(searchTerm || selectedBrand !== 'all' || priceRange !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedBrand('all');
                  setPriceRange('all');
                }}
                className="text-[#ff1616] font-semibold hover:underline text-sm md:text-base"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Vehicle Grid - Masonry Style */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {filteredVehicles.length === 0 ? (
            <div className="text-center py-16 md:py-20">
              <div className="mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
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
                  setPriceRange('all');
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
                  animation="fade"
                  delay={index * 100}
                >
                  <div
                    className="group cursor-pointer"
                    onClick={() => onNavigate('vehicle-detail', vehicle.id)}
                  >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-900 mb-4 md:mb-6">
                    <img
                      src={imageUrl}
                      alt={vehicle.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                      <div className="px-3 py-1.5 md:px-4 md:py-2 font-semibold text-xs md:text-sm tracking-wider bg-black group-hover:bg-[#ff1616] text-white transition-all duration-300">
                        DISPONIBLE
                      </div>
                    </div>

                    {/* Hover Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex items-center justify-between text-white group/details">
                        <span className="text-xs md:text-sm tracking-wider font-semibold group-hover/details:text-[#ff1616] transition-colors duration-300">VOIR DÉTAILS</span>
                        <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 group-hover/details:text-[#ff1616] transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Info */}
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#ff1616] transition-colors duration-300">
                        {vehicle.name}
                      </h3>
                      <p className="text-gray-500 text-xs md:text-sm tracking-wide uppercase">{vehicle.brand}</p>
                    </div>

                    {/* Specs */}
                    <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-600">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <CalendarIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span>{vehicle.year}</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <MapIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span>{vehicle.mileage}</span>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2">
                        <ChartBarIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        <span>{vehicle.power}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-200">
                      <span className="text-2xl md:text-3xl font-bold text-black">{vehicle.priceDisplay}</span>
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              )})}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-[#ff1616] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 md:mb-8 flex items-center justify-center space-x-3 md:space-x-4">
            <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
            <span className="text-xs md:text-sm tracking-[0.3em] text-gray-400 uppercase">{parse(content?.searchAnotherVehicleQuestion)}</span>
            <div className="h-px w-12 md:w-16 bg-[#ff1616]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            {content?.searchAnotherVehicleHeadline}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
            {content?.searchAnotherVehicleDescription}
          </p>
          <button
            onClick={onOpenContactPanel}
            className="px-8 md:px-12 py-4 md:py-6 bg-[#ff1616] text-white font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            {content?.searchAnotherVehicleButtonLabel}
          </button>
        </div>
      </section>

      <InstagramSection />
    </div>
  );
}
