
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { PiFunnelXBold } from 'react-icons/pi';

const projectCategories = [
  "جميع المشاريع",
  "مواقع إلكترونية",
  "تطبيقات جوال",
  "برامج مكتبية",
  "هوية بصرية"
];

const projects = [
  // {
  //   id: 1,
  //   title: "  موقع زورن للملابس",
  //   category: "مواقع إلكترونية",
  //   description: "تصميم وتطوير موقع متجاوب لبرند ملابس  ",
  //   image: "/projects/project-2-1.png",
  //   technologies: ["React", "Tailwind CSS", "Supabase"]
  // },
  // {
  //   id: 2,
  //   title: "موقع تعريفي ",
  //   category: "مواقع إلكترونية",
  //   description: "تصميم وتطوير موقع تعريفي متجاوب لدكتور اسنان  ",
  //   image: "/projects/project-1-2.jpeg",
  //   technologies: ["React", "Tailwind CSS", "Supabase"]
  // },
  // {
  //   id: 3,
  //   title: "شركة المحيط",
  //   category: "مواقع إلكترونية",
  //   description: "موقع تعريفي لشركة استشارات مالية وإدارية",
  //   image: "/lovable-uploads/aba92ebb-5aa1-42ea-9fcd-d2bfe23ba137.png",
  //   technologies: ["WordPress", "PHP", "jQuery"]
  // },
  // {
  //   id: 4,
  //   title: "تطبيق المتابع الذكي",
  //   category: "تطبيقات جوال",
  //   description: "تطبيق لإدارة المهام والمواعيد بميزات ذكية",
  //   image: "/lovable-uploads/d654c2e8-32bc-4c20-b178-1449347c5bf5.png",
  //   technologies: ["React Native", "Firebase", "Redux"]
  // },
  // {
  //   id: 5,
  //   title: "نظام إدارة المبيعات",
  //   category: "برامج مكتبية",
  //   description: "برنامج متكامل لإدارة المبيعات والمخزون",
  //   image: "/lovable-uploads/f17e44dd-d139-4c7f-9df8-a294d3a6eff1.png",
  //   technologies: ["C#", ".NET", "SQL Server"]
  // },
  // {
  //   id: 6,
  //   title: "هوية شركة الأمان",
  //   category: "هوية بصرية",
  //   description: "تصميم هوية بصرية متكاملة لشركة خدمات أمنية",
  //   image: "/lovable-uploads/0874bc6b-236a-4653-8cf0-adc9dbbeddd5.png",
  //   technologies: ["Adobe Illustrator", "Photoshop", "InDesign"]
  // }
];

const PortfolioItem = ({ project }: { project: typeof projects[0] }) => {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    navigate(`/portfolio/${project.id}`);
  };
  
  return (
    <Card className="overflow-hidden h-full border-gray-100 dark:border-gray-800 hover:border-primary/20 dark:hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 transform hover:-translate-y-1">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h3 className="text-white text-xl font-bold">{project.title}</h3>
            <p className="text-white/90 text-sm">{project.category}</p>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-primary font-medium mb-3 text-sm">{project.category}</p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-white w-full transition-all duration-300"
          onClick={handleViewDetails}
        >
          عرض التفاصيل
        </Button>
      </CardFooter>
    </Card>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("جميع المشاريع");
  
  const filteredProjects = activeCategory === "جميع المشاريع"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[5rem]">
        <section className="pt-16 bg-gradient-to-b from-primary/20 to-transparent dark:from-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white relative inline-block">
                أعمالنا
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary opacity-50 rounded"></span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                استعرض أحدث المشاريع التي قمنا بتنفيذها لعملائنا في مختلف
                المجالات
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 pt-12 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {projectCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-primary hover:text-primary"
                  } transition-all duration-300`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <PortfolioItem key={project.id} project={project} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20  flex flex-col items-center">
                <PiFunnelXBold  className="text-6xl text-primary mb-4 " />
                <p className="text-xl text-gray-500 dark:text-gray-400">
                  لا توجد مشاريع في هذه الفئة حاليًا
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-dark/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 dark:text-white">
                لماذا يختار عملاؤنا العمل معنا؟
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                نحن نفخر بتقديم خدمات عالية الجودة والالتزام بالمواعيد النهائية
                وتحقيق تطلعات عملائنا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "جودة استثنائية",
                  description:
                    "نلتزم بتقديم أعلى مستويات الجودة في كل مشروع نعمل عليه",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-primary"
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
                  ),
                },
                {
                  title: "التزام بالمواعيد",
                  description:
                    "نحرص دائمًا على تسليم المشاريع في الوقت المحدد دون تأخير",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "دعم مستمر",
                  description:
                    "نوفر خدمات الدعم الفني المستمر لجميع مشاريعنا بعد التسليم",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#141414] rounded-lg p-8 shadow-md text-center  border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-3 rounded-full bg-primary/10">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">
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
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
