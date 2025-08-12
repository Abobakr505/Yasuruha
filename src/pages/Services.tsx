
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Monitor, Code, Smartphone, Server, Megaphone } from 'lucide-react';

const serviceItems = [
  {
    id: 1,
    title: "تطوير المواقع الإلكترونية",
    description: "تصميم وتطوير مواقع إلكترونية احترافية تلبي احتياجات عملك وتعزز تواجدك على الإنترنت.",
    icon: Globe,
    features: [
      "تصميم مواقع متجاوبة مع جميع الأجهزة",
      "تحسين لمحركات البحث SEO",
      "منصات إدارة محتوى سهلة الاستخدام",
      "دعم فني وصيانة مستمرة"
    ]
  }
  ,
  {
    id: 2,
    title: "برامج إدارة الأعمال",
    description: "تطوير برمجيات وأنظمة إدارية متكاملة تساعد في تنظيم وإدارة أعمالك بكفاءة عالية.",
    icon: Monitor,
    features: [
      "أنظمة محاسبية ومالية",
      "إدارة المخزون والمبيعات",
      "إدارة علاقات العملاء CRM",
      "تقارير وإحصائيات متقدمة"
    ]
  },
  {
    id: 3,
    title: "تطبيقات الهواتف الذكية",
    description: "تطوير تطبيقات جوال احترافية لأنظمة iOS و Android تلبي احتياجات عملائك وتعزز علامتك التجارية.",
    icon: Smartphone,
    features: [
      "تطبيقات iOS و Android",
      "واجهات مستخدم سلسة وجذابة",
      "تكامل مع أنظمتك الحالية",
      "تحديثات وصيانة مستمرة"
    ]
  },
  {
    id: 4,
    title: "تطوير واجهات برمجة API",
    description: "تصميم وتطوير واجهات برمجة تطبيقات احترافية تمكنك من الربط بين مختلف الأنظمة والتطبيقات.",
    icon: Code,
    features: [
      "واجهات REST API حديثة",
      "توثيق شامل للاستخدام",
      "تكامل سلس مع الأنظمة الحالية",
      "أمان وحماية متقدمة للبيانات"
    ]
  },
  {
    id: 5,
    title: "استضافة وإدارة الخوادم",
    description: "خدمات استضافة موثوقة وآمنة مع إدارة كاملة للخوادم لضمان عمل موقعك بكفاءة.",
    icon: Server,
    features: [
      "استضافة سحابية عالية الأداء",
      "خوادم مخصصة لاحتياجاتك",
      "نسخ احتياطية دورية",
      "حماية متقدمة من الهجمات"
    ]
  }
];

const ServiceCard = ({ service }: { service: typeof serviceItems[0] }) => {
  const Icon = service.icon;

  return (
    <Card className="border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden bg-white dark:bg-[#141414]">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto bg-primary/10 dark:bg-primary/10 p-5 rounded-full mb-4 w-20 h-20 flex items-center justify-center shadow-md">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white">
          {service.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center px-6">
        <CardDescription className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </CardDescription>
        <ul className="space-y-3 text-right">
          {service.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-gray-700 dark:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-primary ml-2 flex-shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex justify-center pt-4 px-6">
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-white w-full py-2 rounded-lg transition duration-300"
        >
          <Link to="/contact">طلب الخدمة</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[5rem]">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white  relative inline-block">
                خدماتنا
                <span className="absolute   left-0 w-full h-1 bg-primary opacity-50 rounded  mt-[3rem] "></span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                نقدم مجموعة متكاملة من الخدمات الرقمية لمساعدتك في تنمية عملك
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 ">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceItems.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-dark/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">
                كيف نعمل
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                نتبع نهجًا منظمًا وفعالًا في تنفيذ مشاريعنا لضمان تحقيق أفضل
                النتائج
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "تحليل المتطلبات",
                  description:
                    "نستمع لاحتياجاتك ونحلل متطلبات مشروعك بشكل دقيق",
                },
                {
                  step: 2,
                  title: "التصميم والتخطيط",
                  description:
                    "نضع خطة عمل مفصلة ونصمم هيكلًا متكاملًا للمشروع",
                },
                {
                  step: 3,
                  title: "التطوير والتنفيذ",
                  description: "نبدأ في تطوير المشروع وفق المعايير العالمية",
                },
                {
                  step: 4,
                  title: "الاختبار والتسليم",
                  description: "نختبر المشروع بشكل شامل قبل تسليمه للعميل",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white dark:bg-dark/50 border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300  rounded-lg p-6 shadow-lg relative"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl absolute -top-6 right-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mt-6 mb-4 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-10 text-center">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">
                هل تحتاج إلى مساعدة في مشروعك؟
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                نحن جاهزون لمساعدتك في تحقيق أهدافك. تواصل معنا اليوم لمناقشة
                مشروعك وكيف يمكننا مساعدتك.
              </p>
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">احصل على استشارة مجانية</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
