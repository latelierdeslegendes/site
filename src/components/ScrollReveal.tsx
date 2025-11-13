import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'scale' | 'fade-up' | 'fade-down' | 'zoom-in' | 'rotate-in' | 'blur' | 'slide-up';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = 'fade',
  delay = 0,
  className = ''
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClass = {
    fade: 'scroll-fade-in',
    'slide-left': 'scroll-slide-left',
    'slide-right': 'scroll-slide-right',
    scale: 'scroll-scale',
    'fade-up': 'scroll-fade-up',
    'fade-down': 'scroll-fade-down',
    'zoom-in': 'scroll-zoom-in',
    'rotate-in': 'scroll-rotate-in',
    blur: 'scroll-blur',
    'slide-up': 'scroll-slide-up'
  }[animation];

  const delayClass = delay > 0 ? `scroll-delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
