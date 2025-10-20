'use client';

import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number;
  triggerOnce?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  triggerOnce = true,
}: AnimatedSectionProps) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce,
  });

  const animationClasses = {
    'fade-in': 'transition-opacity duration-700 ease-out',
    'slide-up': 'transition-all duration-700 ease-out',
    'scale-in': 'transition-all duration-500 ease-out',
  };

  const getInitialState = () => {
    switch (animation) {
      case 'fade-in':
        return 'opacity-0';
      case 'slide-up':
        return 'opacity-0 translate-y-8';
      case 'scale-in':
        return 'opacity-0 scale-95';
      default:
        return 'opacity-0';
    }
  };

  const getAnimatedState = () => {
    switch (animation) {
      case 'fade-in':
        return 'opacity-100';
      case 'slide-up':
        return 'opacity-100 translate-y-0';
      case 'scale-in':
        return 'opacity-100 scale-100';
      default:
        return 'opacity-100';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} ${
        hasIntersected ? getAnimatedState() : getInitialState()
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
