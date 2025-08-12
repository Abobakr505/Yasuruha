
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Ghost } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-primary/95 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-16 max-w-md text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <img
            src="/page-not-found.svg"
            className="w-[14rem] h-[14rem] text-primary"
            loading='lazy'
          />
        </div>
        <p className="text-lg text-black mb-6">
          عذرًا، الصفحة التي تبحث عنها غير موجودة.
        </p>
        <a
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primary/90 transition duration-300"
        >
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    </div>
  );
};

export default NotFound;
