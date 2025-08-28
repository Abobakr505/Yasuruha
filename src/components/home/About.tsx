
import React, { useRef, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "جودة عالية",
      description: "نقدم أعلى مستويات الجودة في كل مشروع نعمل عليه"
    },
    {
      title: "أسعار منافسة",
      description: "أسعارنا مناسبة لجميع أنواع الشركات والميزانيات"
    },
    {
      title: "دعم مستمر",
      description: "نوفر دعم فني متواصل لجميع مشاريعنا بعد التسليم"
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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

    [sectionRef, featuresRef, teamRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [sectionRef, featuresRef, teamRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-dark/30">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className="opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="section-title dark:text-white">
            لماذا تختار يسِّرها ؟
          </h2>
        </div>

        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 opacity-0 translate-y-10 transition-all duration-700"
          style={{ transitionDelay: "200ms" }}
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center shadow-lg relative group">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30 group-hover:opacity-60"></div>
                <span className="text-white text-3xl font-bold relative z-10">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          ref={teamRef}
          className="mt-20 bg-gray-50 dark:bg-dark/50 p-8 rounded-2xl  opacity-0 translate-y-10 transition-all duration-700"
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/workspace.svg"
                alt="فريق العمل"
                className="rounded-xl max-w-full "
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-3xl font-bold mb-6 dark:text-white">
                فريق من المحترفين
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                شركة يسِّرها هي شركة متخصصة في تقديم خدمات تصميم وتطوير المواقع
                الإلكترونية والتطبيقات وحلول تكنولوجيا المعلومات بجودة عالية
                وأسعار منافسة. يعمل لدينا فريق من الخبراء المتخصصين في مجالات
                البرمجة والتصميم والتسويق الرقمي.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-lg">
                  <CheckCircle2
                    className="text-primary ml-3 flex-shrink-0"
                    size={24}
                  />
                  <span className="dark:text-white">
                    أكثر من 5 سنوات من الخبرة
                  </span>
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle2
                    className="text-primary ml-3 flex-shrink-0"
                    size={24}
                  />
                  <span className="dark:text-white">
                    فريق من المطورين المحترفين
                  </span>
                </li>
                <li className="flex items-center text-lg">
                  <CheckCircle2
                    className="text-primary ml-3 flex-shrink-0"
                    size={24}
                  />
                  <span className="dark:text-white">تقنيات حديثة ومتطورة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
