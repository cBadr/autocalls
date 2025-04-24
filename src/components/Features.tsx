import React, { useRef, useEffect } from 'react';
import { Sparkles, DollarSign, BarChart, Headphones, MessageCircle, PhoneForwarded } from 'lucide-react';
import { Feature } from '../types';

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    featuresRef.current.forEach((feature) => {
      if (feature) observer.observe(feature);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      featuresRef.current.forEach((feature) => {
        if (feature) observer.unobserve(feature);
      });
    };
  }, []);

  const features: Feature[] = [
    {
      icon: <Sparkles className="h-6 w-6 text-blue-700" />,
      title: "رسائل صوتية مخصصة",
      description: "رسائل صوتية احترافية مخصصة لخدماتك تترك انطباعاً إيجابياً لدى العملاء المحتملين",
      image: "https://yellow.ai/wp-content/uploads/2024/03/customer-service-training.webp"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-blue-700" />,
      title: "دفع للمكالمات المكتملة فقط",
      description: "نحن نحاسبك فقط على المكالمات المكتملة بواقع جنيه واحد للدقيقة، بدون رسوم على المكالمات غير المكتملة",
      image: "https://ahdath-khalij.com/user_images/news/10-09-24-880342808.webp"
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-700" />,
      title: "تقارير وإحصائيات دقيقة",
      description: "تقارير مفصلة عن نتائج حملتك مع إحصائيات دقيقة للمكالمات الناجحة والمهتمين",
      image: "https://www.reamacs.com/wp-content/themes/saeed/assets/img/accounting.webp"
    },
    {
      icon: <Headphones className="h-6 w-6 text-blue-700" />,
      title: "دعم فني متكامل",
      description: "فريق دعم فني متكامل لمساعدتك في إعداد وتشغيل حملتك الإعلانية بكفاءة عالية",
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-blue-700" />,
      title: "تكامل مع واتساب",
      description: "إمكانية التواصل مع العملاء عبر واتساب لمتابعة العروض وتسهيل عملية الاشتراك في الخدمة",
      image: "https://gpt-gate.com/wp-content/uploads/2025/02/ChatGPT-on-WhatsApp-930x576.jpg"
    },
    {
      icon: <PhoneForwarded className="h-6 w-6 text-blue-700" />,
      title: "تحويل المكالمات آلياً",
      description: "تحويل المكالمات آلياً لفريق المبيعات لديك عبر برامج الاتصال أو مباشرة على أرقام الهواتف",
      image: "https://www.voipinfo.net/wp-content/uploads/2019/10/5-ideas-to-monitor-the-quality-of-your-voip-network.jpg"
    }
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">مميزات خدمتنا</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            نقدم لك مجموعة من المميزات الفريدة التي تساعدك على تحقيق أقصى استفادة من حملتك الإعلانية
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              ref={el => featuresRef.current[index] = el}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/70 to-transparent opacity-90"></div>
              </div>
              
              <div className="relative p-8">
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-100 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;