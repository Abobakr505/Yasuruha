
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Link2 } from "lucide-react";

interface Project {
  link: string;
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  clientName?: string;
  completionDate?: string;
  technologies: string[];
  features?: string[];
  images: string[];
  primaryImage: string;
  challenge?: string;
  solution?: string;
  results?: string;
}

// Sample project data
const projects: Project[] = [
  {
    id: 1,
    title: "موقع ايليت لبزنس",
    category: "مواقع إلكترونية",
    description: "تصميم وتطوير موقع متجاوب لشركة خدمات أعمال",
    fullDescription:
      "قمنا بتصميم وتطوير موقع إلكتروني متكامل لشركة ايليت لبزنس، وهي شركة متخصصة في تقديم خدمات الأعمال للشركات الناشئة والمؤسسات الصغيرة. تم تصميم الموقع بأحدث التقنيات ليكون متجاوبًا مع جميع أحجام الشاشات ومنصات الأجهزة المختلفة.",
    clientName: "شركة ايليت لبزنس",
    completionDate: "ابريل 2023",
    technologies: ["React", "Tailwind CSS", ""],
    features: [
      "تصميم متجاوب يعمل على جميع الأجهزة",
      "لوحة تحكم مخصصة لإدارة المحتوى",
      "نظام حجز مواعيد متكامل",
      "دمج مع وسائل التواصل الاجتماعي",
      "تحسين لمحركات البحث SEO",
    ],
    images: [
      "/lovable-uploads/0874bc6b-236a-4653-8cf0-adc9dbbeddd5.png",
      "/lovable-uploads/0c382f59-1c67-4c6b-a670-4eb0ca385530.png",
      "/lovable-uploads/aba92ebb-5aa1-42ea-9fcd-d2bfe23ba137.png",
    ],
    primaryImage: "/lovable-uploads/0874bc6b-236a-4653-8cf0-adc9dbbeddd5.png",
    link: "https://bakrhasan.netlify.app/",
  },
  {
    id: 2,
    title: "موقع ديسكفري",
    category: "مواقع إلكترونية",
    description: "منصة تعليمية تفاعلية للدورات عبر الإنترنت",
    fullDescription: "قمنا بتطوير منصة تعليمية متكاملة لشركة ديسكفري، تتيح للمستخدمين الوصول إلى مكتبة كبيرة من الدورات التعليمية عبر الإنترنت. تضم المنصة نظام إدارة للمحتوى التعليمي ونظام دفع آمن وميزات تفاعلية متقدمة.",
    clientName: "شركة ديسكفري التعليمية",
    completionDate: "مارس 2023",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    features: [
      "نظام تسجيل وإدارة المستخدمين",
      "منصة عرض للدورات التعليمية",
      "نظام دفع إلكتروني آمن",
      "منتدى للنقاش والتفاعل",
      "شهادات إتمام الدورات",
    ],
    images: [
      "/lovable-uploads/0c382f59-1c67-4c6b-a670-4eb0ca385530.png",
      "/lovable-uploads/0874bc6b-236a-4653-8cf0-adc9dbbeddd5.png",
      "/lovable-uploads/f17e44dd-d139-4c7f-9df8-a294d3a6eff1.png",
    ],
    primaryImage: "/lovable-uploads/0c382f59-1c67-4c6b-a670-4eb0ca385530.png",
    challenge: "كان التحدي الرئيسي هو بناء منصة قابلة للتوسع تستوعب آلاف المستخدمين في وقت واحد مع الحفاظ على أداء سريع وتجربة مستخدم سلسة.",
    solution: "استخدمنا بنية تقنية حديثة تعتمد على Vue.js للواجهة الأمامية وLaravel للخلفية، مع استخدام خدمات AWS لضمان أداء عالي وتوافر مستمر.",
    results: "وصلت المنصة إلى أكثر من 10,000 مستخدم في الشهر الأول من إطلاقها، واستطاعت استيعاب أكثر من 5000 مستخدم متزامن دون أي تأثير على الأداء.",
    link: ''
  },
  // {
  //   id: 3,
  //   title: "شركة المحيط",
  //   category: "مواقع إلكترونية",
  //   description: "موقع تعريفي لشركة استشارات مالية وإدارية",
  //   fullDescription:
  //     "قمنا بتطوير موقع إلكتروني احترافي لشركة المحيط للاستشارات المالية والإدارية، يعرض خدمات الشركة ويبرز خبراتها في مجال الاستشارات. تم تصميم الموقع بمظهر عصري يعكس الاحترافية والثقة.",
  //   clientName: "شركة المحيط للاستشارات",
  //   completionDate: "مايو 2023",
  //   technologies: ["WordPress", "PHP", "jQuery", "MySQL"],
  //   features: [
  //     "تصميم عصري واحترافي",
  //     "صفحات تعريفية بخدمات الشركة",
  //     "نماذج تواصل متعددة",
  //     "معرض أعمال وإنجازات",
  //     "مدونة لنشر المقالات المتخصصة",
  //   ],
  //   images: [
  //     "/lovable-uploads/aba92ebb-5aa1-42ea-9fcd-d2bfe23ba137.png",
  //     "/lovable-uploads/d654c2e8-32bc-4c20-b178-1449347c5bf5.png",
  //     "/lovable-uploads/f17e44dd-d139-4c7f-9df8-a294d3a6eff1.png",
  //   ],
  //   primaryImage: "/lovable-uploads/aba92ebb-5aa1-42ea-9fcd-d2bfe23ba137.png",
  //   challenge:
  //     "كان التحدي هو تصميم موقع يعكس المكانة المرموقة للشركة في مجال الاستشارات المالية ويكون سهل التحديث من قبل فريق التسويق بالشركة.",
  //   solution:
  //     "اخترنا نظام WordPress مع قالب مخصص للشركات الاستشارية، مع تطوير إضافات خاصة لتلبية احتياجات الشركة المحددة وتدريب فريق التسويق على إدارة المحتوى.",
  //   results:
  //     "ارتفع عدد العملاء المحتملين بنسبة 42% بعد إطلاق الموقع، مع زيادة في معدل مدة البقاء على الموقع بنسبة 65%.",
  // },
  // {
  //   id: 4,
  //   title: "تطبيق المتابع الذكي",
  //   category: "تطبيقات جوال",
  //   description: "تطبيق لإدارة المهام والمواعيد بميزات ذكية",
  //   fullDescription:
  //     "قمنا بتطوير تطبيق المتابع الذكي لإدارة المهام والمواعيد اليومية، مع إضافة ميزات ذكية مثل التذكيرات الذكية والتعلم من سلوك المستخدم لتقديم اقتراحات مخصصة.",
  //   clientName: "شركة سمارت تك",
  //   completionDate: "يوليو 2023",
  //   technologies: ["React Native", "Firebase", "Redux", "Node.js"],
  //   features: [
  //     "إدارة المهام والمواعيد",
  //     "تذكيرات ذكية",
  //     "تعلم من سلوك المستخدم",
  //     "تقارير وإحصائيات",
  //     "مزامنة عبر الأجهزة المتعددة",
  //   ],
  //   images: [
  //     "/lovable-uploads/d654c2e8-32bc-4c20-b178-1449347c5bf5.png",
  //     "/lovable-uploads/f17e44dd-d139-4c7f-9df8-a294d3a6eff1.png",
  //     "/lovable-uploads/0874bc6b-236a-4653-8cf0-adc9dbbeddd5.png",
  //   ],
  //   primaryImage: "/lovable-uploads/d654c2e8-32bc-4c20-b178-1449347c5bf5.png",
  //   challenge:
  //     "كان التحدي هو تطوير نظام ذكي يتعلم من سلوك المستخدم ويقدم اقتراحات مخصصة، مع الحفاظ على تجربة مستخدم سلسة عبر منصات iOS و Android.",
  //   solution:
  //     "استخدمنا React Native لتطوير واجهة المستخدم، مع Firebase للتخزين والمصادقة، وقمنا بتطوير خوارزميات تعلم آلي بسيطة لتحليل سلوك المستخدم وتقديم اقتراحات ذكية.",
  //   results:
  //     "حصل التطبيق على تقييم 4.8 من 5 على متجر التطبيقات، مع أكثر من 50,000 تنزيل في الشهر الأول من إطلاقه.",
  // },
  // {
  //   id: 5,
  //   title: "نظام إدارة المبيعات",
  //   category: "برامج مكتبية",
  //   description: "برنامج متكامل لإدارة المبيعات والمخزون",
  //   fullDescription:
  //     "قمنا بتطوير نظام متكامل لإدارة المبيعات والمخزون لسلسلة متاجر التجزئة، يشمل إدارة المنتجات والمخزون والمبيعات والعملاء والتقارير والإحصائيات.",
  //   clientName: "سلسلة متاجر الأفق",
  //   completionDate: "سبتمبر 2023",
  //   technologies: ["C#", ".NET", "SQL Server", "DevExpress"],
  //   features: [
  //     "إدارة المنتجات والمخزون",
  //     "نظام نقاط البيع POS",
  //     "إدارة العملاء وبرامج الولاء",
  //     "إدارة الموردين والمشتريات",
  //     "تقارير وإحصائيات متقدمة",
  //   ],
  //   images: [
  //     "/lovable-uploads/f17e44dd-d139-4c7f-9df8-a294d3a6eff1.png",
  //     "/lovable-uploads/d654c2e8-32bc-4c20-b178-1449347c5bf5.png",
  //     "/lovable-uploads/0c382f59-1c67-4c6b-a670-4eb0ca385530.png",
  //   ],
  //   primaryImage: "/lovable-uploads/f17e44dd-d139-4c7f-9df8-a294d3a6eff1.png",
  //   challenge:
  //     "كان التحدي هو تطوير نظام متكامل يلبي احتياجات سلسلة المتاجر المتنوعة، مع دعم للعمل دون اتصال بالإنترنت ومزامنة البيانات بين الفروع.",
  //   solution:
  //     "طورنا نظامًا باستخدام C# و.NET مع قاعدة بيانات SQL Server، مع تصميم بنية تدعم العمل دون اتصال بالإنترنت ومزامنة البيانات عند استعادة الاتصال.",
  //   results:
  //     "ساهم النظام في زيادة كفاءة عمليات البيع بنسبة 45% وخفض الأخطاء البشرية بنسبة 75%، مع تحسن في دقة إدارة المخزون بنسبة 90%.",
  // },
  // {
  //   id: 6,
  //   title: "هوية شركة الأمان",
  //   category: "هوية بصرية",
  //   description: "تصميم هوية بصرية متكاملة لشركة خدمات أمنية",
  //   fullDescription:
  //     "قمنا بتطوير هوية بصرية متكاملة لشركة الأمان للخدمات الأمنية، تشمل الشعار والألوان والخطوط وتطبيقات الهوية على مختلف المواد التسويقية والمطبوعات.",
  //   clientName: "شركة الأمان للخدمات الأمنية",
  //   completionDate: "نوفمبر 2023",
  //   technologies: [
  //     "Adobe Illustrator",
  //     "Photoshop",
  //     "InDesign",
  //     "After Effects",
  //   ],
  //   features: [
  //     "تصميم شعار احترافي",
  //     "نظام ألوان متكامل",
  //     "قوالب للمطبوعات والقرطاسية",
  //     "تصميمات للوسائط الرقمية",
  //     "دليل استخدام الهوية البصرية",
  //   ],
  //   images: [
  //     "/lovable-uploads/0874bc6b-236a-4653-8cf0-adc9dbbeddd5.png",
  //     "/lovable-uploads/aba92ebb-5aa1-42ea-9fcd-d2bfe23ba137.png",
  //     "/lovable-uploads/0c382f59-1c67-4c6b-a670-4eb0ca385530.png",
  //   ],
  //   primaryImage: "/lovable-uploads/0874bc6b-236a-4653-8cf0-adc9dbbeddd5.png",
  //   challenge:
  //     "كان التحدي هو تصميم هوية بصرية تعكس قيم الأمان والثقة والاحترافية، مع الحفاظ على بساطة التصميم وسهولة التعرف عليه.",
  //   solution:
  //     "عملنا مع العميل على فهم قيم العلامة التجارية وأهدافها، ثم قمنا بتطوير مفاهيم تصميمية متعددة واختيار الأنسب منها بالتعاون مع العميل.",
  //   results:
  //     "حصلت الهوية البصرية الجديدة على إشادة من العملاء والشركاء، وساعدت في تعزيز التعرف على العلامة التجارية بنسبة 60%.",
  // },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  useEffect(() => {
    if (id) {
      const projectId = parseInt(id);
      const foundProject = projects.find(p => p.id === projectId);
      if (foundProject) {
        setProject(foundProject);
        setActiveImage(foundProject.primaryImage);
      }
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4 dark:text-white">المشروع غير موجود</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">عذراً، لم نتمكن من العثور على تفاصيل هذا المشروع.</p>
            <Button asChild>
              <Link to="/portfolio">العودة إلى المشاريع</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[5rem]">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center text-primary mb-4 hover:underline"
                >
                  <ArrowLeft className="ml-1" size={16} />
                  العودة إلى المشاريع
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                  {project.title}
                </h1>
                <div className="mb-4">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary border-primary/20 text-sm"
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                  {project.fullDescription}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {project.clientName && (
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200">
                        العميل:
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.clientName}
                      </p>
                    </div>
                  )}
                  {project.completionDate && (
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200">
                        تاريخ الإنجاز:
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.completionDate}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105">
                  <img
                    src={project.primaryImage}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden mb-8">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">
                      نظرة عامة على المشروع
                    </h2>

                    {project.description && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                          الوصف:
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {project.description}
                        </p>
                      </div>
                    )}
                    {project.link && (
                      <a href={project.link}>
                        <div className="mt-4">
                          <Badge
                            variant="outline"
                            className="bg-primary text-white border-primary/20 text-sm p-2"
                          >
                            ربط الموقع <Link2 className="w-5 h-5 mr-1" />
                          </Badge>
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Gallery */}
                <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">
                      معرض الصور
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                      <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center h-80">
                        <img
                          src={activeImage}
                          alt={project.title}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {project.images.map((image, index) => (
                          <div
                            key={index}
                            className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                              activeImage === image
                                ? "border-primary"
                                : "border-transparent"
                            } transition-all`}
                            onClick={() => setActiveImage(image)}
                          >
                            <img
                              src={image}
                              alt={`${project.title} - صورة ${index + 1}`}
                              className="w-full h-24 object-cover"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                {/* Project Features */}
                <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden mb-8">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">
                      المميزات
                    </h2>
                    <ul className="space-y-3">
                      {project.features?.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <svg
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
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="bg-white dark:bg-card rounded-xl shadow-lg overflow-hidden mb-8">
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">
                      التقنيات المستخدمة
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="px-3 py-1 text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 dark:text-white">
                    هل أعجبك هذا المشروع؟
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    دعنا نساعدك في تنفيذ مشروع مشابه يحقق أهدافك ويلبي احتياجاتك
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">تواصل معنا الآن</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 bg-gray-50 dark:bg-dark/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-right dark:text-white">
              مشاريع مشابهة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects
                .filter(
                  (p) => p.id !== project.id && p.category === project.category
                )
                .slice(0, 3)
                .map((relatedProject) => (
                  <div
                    key={relatedProject.id}
                    className="bg-white dark:bg-card rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedProject.primaryImage}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 dark:text-white">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/portfolio/${relatedProject.id}`}>
                          عرض التفاصيل
                        </Link>
                      </Button>
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

export default ProjectDetail;
