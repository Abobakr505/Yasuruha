import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "أبوبكر حسن",
      role: "Owner & CEO",
      description:
        "خبرة 5+ سنوات في تطوير مواقع الويب وتطبيقات الجوال باستخدام أحدث التقنيات.",
      avatar: "/avatar.svg",
    },
    {
      id: 2,
      name: "محمد علي",
      role: "Frontend Developer",
      description:
        "متخصص في تطوير واجهات المستخدم وتجربة المستخدم مع أكثر من 7 سنوات خبرة.",
      avatar: "/coding.svg",
    },
    {
      id: 3,
      name: "خالد محمود",
      role: "Backend Developer",
      description:
        "متخصص في تطوير الأنظمة الخلفية وقواعد البيانات مع خبرة واسعة في الأمن السيبراني.",
      avatar: "/coding.svg",
    },
    {
      id: 4,
      name: "سارة أحمد",
      role: "Flutter Developer",
      description:
        "خبيرة في تصميم واجهات مستخدم جذابة وسهلة الاستخدام مع التركيز على تجربة العميل.",
      avatar: "/coding.svg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[5rem]">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white  relative inline-block">
                من نحن
                <span className="absolute   left-0 w-full h-1 bg-primary opacity-50 rounded   mt-[3.5rem] "></span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                نحن فريق من المبدعين والمطورين المتخصصين في تقديم حلول رقمية
                متكاملة
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">
                  قصتنا
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  بدأنا رحلتنا في عام 2025 بهدف تقديم خدمات تكنولوجية عالية
                  الجودة للشركات والمؤسسات من مختلف الأحجام. ومنذ ذلك الحين، نمت
                  شركتنا لتصبح واحدة من الشركات في مجال تطوير المواقع
                  الإلكترونية والتطبيقات في المنطقة.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  نسعى دائمًا لتقديم أفضل الحلول التقنية التي تساعد عملائنا على
                  تحقيق أهدافهم وتعزيز تواجدهم الرقمي بشكل فعال ومبتكر.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/work-friends.svg"
                  alt="قصتنا"
                  className="rounded-lg w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-dark/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
              قيمنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white dark:bg-dark/50 p-8 rounded-lg shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center dark:text-white">
                  الجودة
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  نلتزم بتقديم أعلى مستويات الجودة في كل مشروع نعمل عليه، مع
                  الاهتمام بأدق التفاصيل.
                </p>
              </div>

              <div className="bg-white dark:bg-dark/50 p-8 rounded-lg shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center dark:text-white">
                  الابتكار
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  نسعى دائمًا لإيجاد حلول مبتكرة ومتميزة تلبي احتياجات عملائنا
                  وتتجاوز توقعاتهم.
                </p>
              </div>

              <div className="bg-white dark:bg-dark/50 p-8 rounded-lg shadow-lg hover:shadow-xl  border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-primary p-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center dark:text-white">
                  التعاون
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  نؤمن بأهمية العمل الجماعي والتعاون مع عملائنا لتحقيق نتائج
                  استثنائية وناجحة.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
              فريقنا
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white dark:bg-dark/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl  border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-64 object-contain object-center"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-primary mb-4">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {member.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
