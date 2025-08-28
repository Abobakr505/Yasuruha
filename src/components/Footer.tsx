
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { FaTiktok, FaYoutube } from "react-icons/fa";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary dark:bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-6 text-primary">تابعنا</h3>
              <div className="flex space-x-reverse space-x-4 mb-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61569823090886"
                  className="bg-white/10 p-3 rounded-full text-white hover:bg-primary transition-all"
                  target="_blank"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/yasuruha1"
                  className="bg-white/10 p-3 rounded-full text-white hover:bg-primary transition-all"
                  target="_blank"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@yasuruha"
                  className="bg-white/10 p-3 rounded-full text-white hover:bg-primary transition-all"
                  target="_blank"
                >
                  <FaTiktok size={20} />
                </a>
                <a
                  href="https://www.youtube.com/@yasuruha"
                  className="bg-white/10 p-3 rounded-full text-white hover:bg-primary transition-all"
                  target="_blank"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
              <p className="text-gray-300">
                انضم إلينا على وسائل التواصل الاجتماعي للبقاء على اطلاع بأحدث
                الأخبار والعروض.
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                روابط سريعة
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    أعمالنا
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    تواصل معنا
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                تواصل معنا
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone
                    className="text-primary ml-3 flex-shrink-0"
                    size={22}
                  />
                  <span dir="ltr">+201093954137</span>
                </li>
                <li className="flex items-center">
                  <Mail className="text-primary ml-3 flex-shrink-0" size={22} />
                  <span>yasuruha1@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center py-8 border-t border-gray-700">
          <div className="mb-4 flex justify-center ">
            <Link to="/" className="flex items-center">
              <img className=' w-[6rem] h-[6rem] ' src="/logoy.webp" alt="" loading="lazy" />
            </Link>
          </div>
          <p className="text-gray-400">
            كل الحقوق محفوظة &copy; {currentYear} - يسِّرها لتطوير المواقع
            والتطبيقات
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
