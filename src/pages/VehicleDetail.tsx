import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ChartBarIcon, FireIcon, CogIcon, CheckCircleIcon, PhoneIcon, EnvelopeIcon, ChevronDownIcon, MapIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { getVehicleById } from '../data/vehicles';

interface VehicleDetailProps {
  vehicleId?: string;
  onNavigate: (page: string, vehicleId?: string) => void;
  onOpenContactPanel?: () => void;
  list?: any;
}

export default function VehicleDetail({ vehicleId, onNavigate, onOpenContactPanel, list }: VehicleDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openSection, setOpenSection] = useState<'description' | 'features' | 'services' | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const vehicleData = list.find((vehicle: any) => vehicle._id === vehicleId);

  console.log({
    vehicleId,
    list,
    vehicleData
  })

  if (!vehicleData) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Véhicule non trouvé</h1>
          <button
            onClick={() => onNavigate('for-sale')}
            className="px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition-all"
          >
            Retour aux véhicules
          </button>
        </div>
      </div>
    );
  }

  const vehicle = {
    ...vehicleData,
    specifications: [
      { label: 'Année', value: vehicleData.year.toString(), icon: CalendarIcon },
      { label: 'Kilométrage', value: vehicleData.mileage, icon: MapIcon },
      { label: 'Puissance', value: vehicleData.power, icon: ChartBarIcon },
      { label: 'Carburant', value: vehicleData.fuel, icon: FireIcon },
      { label: 'Transmission', value: vehicleData.transmission, icon: CogIcon }
    ]
  };


  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => onNavigate('for-sale')}
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors mb-4"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            <span>Retour aux véhicules</span>
          </button>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="relative bg-black rounded-lg overflow-hidden mb-4">
                <img
                  src={vehicle.images[currentImageIndex]}
                  alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-[500px] object-cover cursor-pointer"
                  onClick={() => setLightboxOpen(true)}
                  referrerPolicy="no-referrer"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-black" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <ChevronRightIcon className="w-6 h-6 text-black" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {vehicle.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-3">
                {vehicle.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-[#ff1616]' : ''
                    }`}
                  >
                    <img
                      src={image}
                      referrerPolicy="no-referrer"
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-20 object-cover hover:opacity-75 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-2">{vehicle.name}</h1>
                <p className="text-xl text-gray-600">{vehicle.year}</p>
              </div>

              <div className="text-4xl font-bold text-black mb-8">
                {vehicle.price}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {vehicle.specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <spec.icon className="w-6 h-6 text-gray-700" />
                    <div>
                      <p className="text-sm text-gray-600">{spec.label}</p>
                      <p className="font-semibold">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenContactPanel}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-all duration-200 mb-8"
              >
                <span>CE VÉHICULE M'INTÉRESSE</span>
              </button>

              <div className="space-y-4 mb-8">
                <div className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenSection(openSection === 'description' ? null : 'description')}
                    className="w-full flex items-center justify-between py-4 text-left hover:text-[#ff1616] transition-colors"
                  >
                    <h3 className="text-xl font-bold">Description</h3>
                    <ChevronDownIcon
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openSection === 'description' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection === 'description' ? 'max-h-[1000px] pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {vehicle.description}
                    </p>
                  </div>
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenSection(openSection === 'features' ? null : 'features')}
                    className="w-full flex items-center justify-between py-4 text-left hover:text-[#ff1616] transition-colors"
                  >
                    <h3 className="text-xl font-bold">Équipements & Options</h3>
                    <ChevronDownIcon
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openSection === 'features' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection === 'features' ? 'max-h-[2000px] pb-6' : 'max-h-0'
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-3">
                      {vehicle.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-[#ff1616] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200">
                  <button
                    onClick={() => setOpenSection(openSection === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between py-4 text-left hover:text-[#ff1616] transition-colors"
                  >
                    <h3 className="text-xl font-bold">Services inclus</h3>
                    <ChevronDownIcon
                      className={`w-6 h-6 transition-transform duration-300 ${
                        openSection === 'services' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection === 'services' ? 'max-h-[1000px] pb-6' : 'max-h-0'
                    }`}
                  >
                    <div className="grid grid-cols-1 gap-3">
                      {vehicle.services.map((service, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircleIcon className="w-5 h-5 text-[#ff1616] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>

          <img
            src={vehicle.images[currentImageIndex]}
            alt={`${vehicle.name} - Image ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {vehicle.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
