import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const formRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    emailjs.init("k9Ti1ib4trNRh4VAQ"); // مفتاح عام من EmailJS
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      reply_to: formData.email,
      phone: formData.phone,
      message: formData.message,
      time: new Date().toLocaleString("ar-EG"),
    };

    emailjs
      .send("service_1bdsc8t", "template_zvn7klm", templateParams)
      .then(() => {
        setIsSubmitting(false);
        toast.success("تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا", {
          position: "top-center",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Email send error:", error);
        toast.error("حدث خطأ أثناء الإرسال، حاول مرة أخرى لاحقًا", {
          position: "top-center",
        });
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      setTimeout(() => observer.observe(contentRef.current), 200);
    }

    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-dark/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div
            ref={contentRef}
            className="md:w-1/2 mb-10 md:mb-0 md:pl-10 opacity-0 translate-y-10 transition-all duration-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
              تريد التواصل معنا لمناقشة مشروعك؟
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
              املأ النموذج وسيقوم فريقنا بالتواصل معك في أقرب وقت ممكن لمناقشة
              احتياجاتك ومساعدتك في تحقيق أهدافك.
            </p>
            <div
              className="translate-y-10 transition-all duration-700"
              style={{ transitionDelay: "200ms" }}
            >
              <img
                src="/email.svg"
                alt="اتصل بنا"
                className="max-w-full rounded-xl"
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-card p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  الاسم
                </label>
                <Input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  className="bg-gray-50 dark:bg-dark/50"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="bg-gray-50 dark:bg-dark/50"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  الهاتف
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="أدخل رقم هاتفك"
                  className="bg-gray-50 dark:bg-dark/50"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                  الرسالة
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gray-50 dark:bg-dark/50"
                  rows={5}
                  placeholder="اكتب رسالتك هنا..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;