import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenContactPanel: () => void;
}

export default function Header({ currentPage, onNavigate, onOpenContactPanel }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', id: 'home' },
    { name: 'À propos', id: 'about' },
    { name: 'À vendre', id: 'for-sale' },
    { name: 'Déjà vendus', id: 'sold' },
    { name: 'Services', id: 'services' },
  ];

  const handleNavClick = (pageId: string) => {
    if (pageId === 'contact') {
      onOpenContactPanel();
      setIsMenuOpen(false);
    } else {
      onNavigate(pageId);
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 group"
          >
            <img
              src="https://lh3.googleusercontent.com/pw/AP1GczPeY6t2xVtpTSr16-U9CBrQe3jXhxxaIWjwJkQqHtTmSfvvwmis5Eb_tTXb-Rx_SXYNKYub9orUHxwi9lrECACtUcPxzix9rXVjE8dsze-NaWKlZDpPxBcoVO_lfA6umH0iQ9UFDQMfuGHur0rWqcCS=w1563-h756-s-no-gm"
              alt="L'Atelier Des Légendes"
              referrerPolicy="no-referrer"
              className="h-16 object-contain group-hover:opacity-80 transition-opacity"
            />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 pb-1 ${
                  currentPage === item.id
                    ? 'text-black border-b-2 border-[#ff1616]'
                    : 'text-gray-600 hover:text-black hover:border-b-2 hover:border-[#ff1616]/30'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={onOpenContactPanel}
              className="text-sm font-medium tracking-wide transition-colors duration-200 pb-1 text-gray-600 hover:text-black hover:border-b-2 hover:border-[#ff1616]/30"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-black" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-gray-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                onOpenContactPanel();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 text-black hover:bg-gray-50"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
