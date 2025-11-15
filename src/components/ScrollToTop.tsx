import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

interface ScrollToTopProps {
  dimOnHorizontalEnd?: boolean;
}

export default function ScrollToTop({ dimOnHorizontalEnd = true }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [dimBackground, setDimBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.pageYOffset || window.scrollY || 0;
      setIsVisible(y > 300);

      if (!dimOnHorizontalEnd) {
        setDimBackground(false);
        return;
      }

      const doc = document.documentElement;
      const scrollWidth = doc.scrollWidth || document.body.scrollWidth;
      const x = window.scrollX || window.pageXOffset || 0;
      const maxScrollX = Math.max(scrollWidth - window.innerWidth, 0);
      const distanceToEnd = maxScrollX - x;

      setDimBackground(distanceToEnd <= 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [dimOnHorizontalEnd]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-40 w-12 h-12 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            false && dimBackground ? 'bg-black/40 hover:bg-black/50' : 'bg-black hover:bg-gray-800'
          }`}
          aria-label="Retour en haut"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
