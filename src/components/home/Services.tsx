
import React, { useEffect, useRef } from 'react';
import { Monitor, Smartphone, Globe, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon,
  delay
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType;
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className="service-card dark:bg-[#141414]  opacity-0 translate-y-10 border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex justify-center mb-6">
        <div className="bg-primary p-5 rounded-full">
          <Icon className="text-white" size={28} />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6">{description}</p>
      <div className="mt-6 text-center">
        <Link to="/services" className="text-primary font-medium hover:text-white hover:bg-primary  py-1 px-2 border border-primary rounded-sm transition-all duration-300">
          المزيد
        </Link>
      </div>
    </div>
  )
};

const Services = () => {
  const services = [
    {
      title: "المواقع الإلكترونية",
      description: "تطوير مواقع احترافية سريعة الاستجابة تناسب احتياجات عملك وتحسن تجربة المستخدم.",
      icon: Globe,
      delay: 100
    },
    {
      title: "تطبيقات الهاتف المحمول",
      description: "تصميم وتطوير تطبيقات جوال احترافية لأنظمة iOS و Android بمزايا متقدمة.",
      icon: Smartphone,
      delay: 300
    },
    {
      title: "خدمات الويب",
      description: "تطوير واجهات برمجة التطبيقات API وخدمات الويب المتقدمة لربط أنظمتك المختلفة.",
      icon: Code,
      delay: 500
    }
  ];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-dark/50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="section-title dark:text-white">ماذا نقدم لك؟</h2>
          <p className="section-subtitle">
            سنعمل معًا من أجلك لمساعدتك في التحول الرقمي بشكل احترافي وبخدماتنا المتنوعة
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="text-lg">
            <Link to="/services">
              تصفح جميع خدماتنا
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
