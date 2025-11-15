import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, HeartIcon } from '@heroicons/react/24/outline';
import parse from 'html-react-parser';

export default function Footer({ onNavigate, onOpenContactPanel, contactDetails, loading }: any) {
  const handleNavClick = (pageId: string) => {
    if (pageId === 'contact' && onOpenContactPanel) {
      onOpenContactPanel();
    } else {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  if(loading) return null;

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczPAincJEkR7o97xuIafNn6ooTXBszBekRY1yNl8It7heqGdsLGbrn9W39-eYFu8oNkhoanUqgsQ-U2k4OGnBHPr18-h-UXDQRxyTBnMPuOEZV1EeMUZJnnoMGjQIJoIKX7iwDUq8xHqsXzPsGKgd8M2=w1563-h762-s-no-gm"
              alt="L'Atelier Des Légendes"
              className="h-[67px] object-contain mb-4"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-400 mb-4 leading-relaxed">
              Spécialiste de l'achat et de la revente de véhicules premium.
              Passion, expertise et authenticité au service de votre rêve automobile.
            </p>
            <div className="flex space-x-4">
              <a
                href={contactDetails?.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#ff1616] transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href={contactDetails?.linkedin}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#ff1616] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              {[
                { name: 'Accueil', id: 'home' },
                { name: 'À propos', id: 'about' },
                { name: 'À vendre', id: 'for-sale' },
                { name: 'Déjà vendus', id: 'sold' },
                { name: 'Services', id: 'services' },
                { name: 'FAQ', id: 'services-faq' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-400 hover:text-[#ff1616] transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  19 Route de Gambais<br />
                  78550 Bazainville, France
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a
                  href={`tel:${contactDetails?.phone || ''}`}
                  className="text-gray-400 hover:text-[#ff1616] transition-colors"
                >
                  {contactDetails?.phoneDisplay || ''}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a
                  href={`mailto:${contactDetails?.email || ''}`}
                  className="text-gray-400 hover:text-[#ff1616] transition-colors"
                >
                  {contactDetails?.email || ''}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <ClockIcon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  {(contactDetails?.horaire) ? parse(contactDetails?.horaire) : ''}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-4">
          <p className="text-gray-400 text-sm">
            © L'Atelier Des Légendes. Tous droits réservés.
          </p>

          <a
            href="https://www.vasseo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-[#ff1616] transition-colors text-sm group"
          >
            <span>Created with</span>
            <HeartIcon className="w-4 h-4 text-[#ff1616] fill-[#ff1616] group-hover:scale-110 transition-transform" />
            <span>by Vasseo</span>
          </a>

          <div className="flex gap-3 text-sm">
            <button
              onClick={() => handleNavClick('legal-notice')}
              className="text-gray-400 hover:text-[#ff1616] transition-colors"
            >
              Mentions légales
            </button>
            <button
              onClick={() => handleNavClick('privacy-policy')}
              className="text-gray-400 hover:text-[#ff1616] transition-colors"
            >
              Politique de confidentialité
            </button>
            <button
              onClick={() => handleNavClick('terms-of-sale')}
              className="text-gray-400 hover:text-[#ff1616] transition-colors"
            >
              CGV
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
