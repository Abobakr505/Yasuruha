export interface Project {
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
    completionDate: "يناير 2023",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
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
  },
  {
    id: 2,
    title: "موقع ديسكفري",
    category: "مواقع إلكترونية",
    description: "منصة تعليمية تفاعلية للدورات عبر الإنترنت",
    fullDescription:
      "قمنا بتطوير منصة تعليمية متكاملة لشركة ديسكفري، تتيح للمستخدمين الوصول إلى مكتبة كبيرة من الدورات التعليمية عبر الإنترنت. تضم المنصة نظام إدارة للمحتوى التعليمي ونظام دفع آمن وميزات تفاعلية متقدمة.",
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
    challenge:
      "كان التحدي الرئيسي هو بناء منصة قابلة للتوسع تستوعب آلاف المستخدمين في وقت واحد مع الحفاظ على أداء سريع وتجربة مستخدم سلسة.",
    solution:
      "استخدمنا بنية تقنية حديثة تعتمد على Vue.js للواجهة الأمامية وLaravel للخلفية، مع استخدام خدمات AWS لضمان أداء عالي وتوافر مستمر.",
    results:
      "وصلت المنصة إلى أكثر من 10,000 مستخدم في الشهر الأول من إطلاقها، واستطاعت استيعاب أكثر من 5000 مستخدم متزامن دون أي تأثير على الأداء.",
  }
];
