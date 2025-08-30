import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PiFunnelXBold } from "react-icons/pi";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = []; // للاختبار، جعلناها فارغة

const PortfolioCard = ({ item, index }: { item: PortfolioItem; index: number }) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }, index * 200);
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
  }, [index]);

  const handleViewDetails = () => {
    navigate(`/portfolio/${item.id}`);
  };

  return (
    <div 
      ref={cardRef} 
      className="portfolio-item opacity-0 translate-y-10 transition-all duration-700 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden group rounded-t-lg">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h3 className="text-white text-xl font-bold">{item.title}</h3>
            <p className="text-white/90 text-sm">{item.category}</p>
          </div>
        </div>
      </div>
      <div className="p-6 dark:text-white bg-white dark:bg-card rounded-b-lg shadow-md">
        <p className="text-primary font-medium mb-2">{item.category}</p>
        <h3 className="font-bold text-2xl mb-4">{item.title}</h3>
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          onClick={handleViewDetails}
        >
          تفاصيل المشروع
        </Button>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-dark/20">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className="opacity-0 translate-y-10 transition-all duration-700 text-center"
        >
          <h2 className="section-title dark:text-white relative inline-block">
            بعض أعمالنا
            <span className="absolute left-0 w-full h-1 bg-primary opacity-50 rounded mt-[3.3rem]"></span>
          </h2>
          <p className="section-subtitle">
            نفخر بتقديم مشاريع مميزة لعملائنا في مختلف المجالات
          </p>
        </div>
        
        {portfolioItems.length === 0 ? (
          <div className="mt-12 text-center flex flex-col items-center">
            <PiFunnelXBold  className="text-6xl text-primary mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              لا توجد مشاريع متاحة حاليًا
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-8 shadow-md shadow-primary/20   hover:scale-110 transition-transform duration-300"
          >
            <Link to="/portfolio">
              جميع المشاريع
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;