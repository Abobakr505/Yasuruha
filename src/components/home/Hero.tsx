
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import img from "/website.svg";
import { Code,  } from 'lucide-react';
import { FaRegFaceSmileWink } from "react-icons/fa6";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  // تأثير الظهور التدريجي عند تحميل الصفحة
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary to-primary-dark dark:from-dark dark:to-secondary pt-28 pb-20 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div
            className={`lg:w-1/2 mb-10 lg:mb-0 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h1 className="main-text text-3xl sm:text-4xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              يـسِّـرهـا
            </h1>
            <p className="text-white text-3xl mb-10 opacity-90 max-w-xl">
             <span className='des-text dark:text-primary text-white'> {"<"} </span> يـسِّـرهـا ومـتـعـقـدهـاش <span className='des-text dark:text-primary text-white '> {">"} </span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg bg-gradient-to-r from-primary to-[#008549] text-white hover:bg-white/90 dark:bg-white  dark:hover:bg-white/90 shadow-lg hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link to="/portfolio">تصفح أعمالنا</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary  shadow-lg transition-all duration-300"
                asChild
              >
                <Link to="/contact">تواصل معنا</Link>
              </Button>
            </div>
          </div>
          <div
            className={`lg:w-1/2 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
              <div
                className="absolute -bottom-5 -right-5 w-20 h-20 bg-white/20 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              <img
                src={img}
                alt="تصميم مواقع إلكترونية"
                className="max-w-full mx-auto relative z-1 rounded-xl"
                loading="lazy"
              />
              <div className="absolute  bottom-[0.5%] md:bottom-[20%] right-[7rem] md:right-1  transform translate-x-1/2 translate-y-1/2">
                <div className="bg-white dark:bg-[#2e2b2b]  shadow p-2 md:p-4 rounded-sm flex items-center gap-2">
                  <FaRegFaceSmileWink className="md:h-9 h-8 md:w-9 w-8 text-primary rounded-full " />
                  <span className="font-bold text-[0.9rem] md:text-[1.3rem] text-black dark:text-white">
                    صمم موقعك باسلوبك{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* خلفية موجية */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="text-background fill-current"
        >
          <path d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,218.7C672,245,768,267,864,250.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
