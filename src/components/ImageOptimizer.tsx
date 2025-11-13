import { useState } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

export default function ImageOptimizer({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  onClick
}: ImageOptimizerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-400">Image non disponible</span>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <div className={`bg-gray-200 animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${!isLoaded ? 'hidden' : ''}`}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        onClick={onClick}
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </>
  );
}
