import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { FaTiktok, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-start space-x-reverse space-x-4 mb-8">
    <div className="bg-primary/10 p-3 rounded-full">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <div>
      <h3 className="font-bold text-lg mb-1 dark:text-white">{title}</h3>
      <div className="text-gray-600 dark:text-gray-300">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const formRef = useRef(null);

  useEffect(() => {
    emailjs.init("k9Ti1ib4trNRh4VAQ"); // استبدل بالمفتاح العمومي من EmailJS
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
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString("ar-EG"),
    };

    emailjs
      .send("service_lcr6o8n", "template_o1airgf", templateParams)
      .then(() => {
        setIsSubmitting(false);
        toast.success("تم إرسال رسالتك بنجاح، سنتواصل معك قريبًا", {
          position: "top-center",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("Email send error:", error);
        toast.error("حدث خطأ أثناء الإرسال، حاول مرة أخرى لاحقًا", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[5rem]">
        <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent dark:from-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white  relative inline-block">
              تواصل معنا
            <span className="absolute   left-0 w-full h-1 bg-primary opacity-50 rounded   mt-[3.2rem] "></span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* معلومات الاتصال */}
              <div>
                <h2 className="text-3xl font-bold mb-8 dark:text-white">
                  معلومات الاتصال
                </h2>
                <ContactInfo
                  icon={Phone}
                  title="الهاتف"
                  content={<p dir="ltr">+20 109 395 4137</p>}
                />
                <ContactInfo
                  icon={Mail}
                  title="البريد الإلكتروني"
                  content={<p>yasuruha1@gmail.com</p>}
                />
                <ContactInfo
                  icon={Clock}
                  title="ساعات العمل"
                  content={<p>24/7 متاحون لخدمتك</p>}
                />

                <div className="mt-20">
                  <h3 className="text-xl font-bold mb-4 dark:text-white">
                    تابعنا على
                  </h3>
                  <div className="flex space-x-reverse space-x-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61569823090886"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaFacebookF size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/yasuruha1"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaInstagram size={20} />
                    </a>
                    <a
                      href="https://www.tiktok.com/@yasuruha"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaTiktok size={20} />
                    </a>
                    <a
                      href="https://www.youtube.com/@yasuruha"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <FaYoutube size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* نموذج الإرسال */}
              <div>
                <Card className="border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-8">
                      <MessageSquare className="h-6 w-6 text-primary ml-3" />
                      <h2 className="text-2xl font-bold dark:text-white">
                        أرسل رسالة
                      </h2>
                    </div>
                    <form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="grid gap-6"
                    >
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="الاسم"
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="البريد الإلكتروني"
                        required
                      />
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="رقم الهاتف "
                      />
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="موضوع الرسالة"
                        required
                      />
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="اكتب رسالتك هنا..."
                        required
                      />
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full py-4"
                      >
                        {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
