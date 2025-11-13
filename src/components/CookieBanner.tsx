import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-fade-in">
      <div className="bg-white border border-gray-200 shadow-lg p-4 rounded-sm">
        <div className="flex justify-between items-start mb-3">
          <p className="text-xs text-gray-600 leading-relaxed pr-2">
            Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          </p>
          <button
            onClick={declineCookies}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fermer"
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={acceptCookies}
            className="flex-1 px-3 py-2 bg-black text-white text-xs font-medium hover:bg-[#ff1616] transition-colors"
          >
            Accepter
          </button>
          <button
            onClick={declineCookies}
            className="px-3 py-2 border border-gray-300 text-gray-700 text-xs font-medium hover:bg-gray-50 transition-colors"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
