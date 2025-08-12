
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'scale-100');
          entry.target.classList.remove('opacity-0', 'scale-95');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* خلفية متدرجة */}
      <div className="absolute inset-0 bg-primary dark:bg-dark z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary dark:from-dark/80 dark:to-dark"></div>
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white dark:from-dark/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-dark/80 to-transparent"></div>
      </div>
      
      {/* أشكال زخرفية */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ctaRef}
          className="text-center opacity-0 scale-95 transition-all duration-700"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            احجز موقعك الإلكتروني الآن
          </h2>
          <p className="text-white text-xl mb-10 max-w-3xl mx-auto opacity-90">
            مستعدون للعمل معك على مشروعك القادم. احصل على تجربة رقمية متميزة وخدمات متكاملة.
          </p>
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="text-lg bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary dark:hover:bg-white/90 shadow-lg"
          >
            <Link to="/contact">
              احجز الآن
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
