import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
import { link } from "fs";

const FollowersCounter = () => {
  const stats = [
    {
      id: 1,
      platform: "Facebook",
      count: 110,
      icon: <FaFacebook />,
      gradient: "from-blue-500 to-blue-700",
      link:"https://www.facebook.com/profile.php?id=61569823090886"
    },
    {
      id: 2,
      platform: "Instagram",
      count: 100,
      icon: <FaInstagram />,
      gradient: "from-pink-500 to-purple-500 ",
      link:"https://www.instagram.com/yasuruha1"
    },
    {
      id: 3,
      platform: "TikTok",
      count: 2100,
      icon: <FaTiktok />,
      gradient: "from-gray-500 to-black",
      link:"https://www.tiktok.com/@yasuruha"
    },
    {
      id: 4,
      platform: "YouTube",
      count: 170,
      icon: <FaYoutube />,
      gradient: "from-red-500 to-red-700",
      link:"https://www.youtube.com/@yasuruha"
    }
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-white dark:bg-dark/30 py-12"
    >
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, index) => (
            <a href={item.link} target="_blank">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative p-6  bg-white dark:bg-dark/30
                         backdrop-blur-xl  flex flex-col items-center text-center 
                         "
            >
              {/* أيقونة مع خلفية متدرجة */}
              <div
                className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full 
                           bg-gradient-to-b ${item.gradient} text-white text-4xl shadow-md mb-4 hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>

              {/* الرقم */}
              <span className="text-3xl font-extrabold text-black dark:text-white ">
                {inView ? (
                  <CountUp start={0} end={item.count} duration={2} separator="," />
                ) : (
                  0
                )}
                +
              </span>

              {/* اسم المنصة */}
              <span className="text-gray-500 dark:text-gray-200 text-sm mt-1">{item.platform}</span>
            </motion.div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FollowersCounter;
