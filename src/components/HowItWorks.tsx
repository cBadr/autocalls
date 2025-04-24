import React, { useRef, useEffect } from 'react';
import { PhoneCall, User, Phone, UserCheck } from 'lucide-react';
import AnalyticsDashboard from './AnalyticsDashboard';

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  const mainSteps = [
    {
      icon: <PhoneCall className="h-8 w-8 text-white" />,
      title: "إجراء الاتصال الآلي",
      description: "يتم إجراء اتصالات آلية على قائمة العملاء المحتملين التي تزودنا بها",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <User className="h-8 w-8 text-white" />,
      title: "استماع العميل للعرض",
      description: "يستمع العميل لرسالة ترحيبية وعرض صوتي مسجل عن خدماتك",
      color: "from-green-600 to-green-800"
    },
    {
      icon: <Phone className="h-8 w-8 text-white" />,
      title: "التحويل لمندوب المبيعات",
      description: "يتم تحويل العملاء المهتمين مباشرة إلى فريق المبيعات لديك",
      color: "from-purple-600 to-purple-800"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-white" />,
      title: "المتابعة وإتمام الصفقة",
      description: "يقوم فريقك بمتابعة العميل وإتمام عملية البيع بنجاح",
      color: "from-orange-600 to-orange-800"
    }
  ];






  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">كيف تعمل خدمتنا</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            نظام بسيط وفعال للتواصل مع العملاء المحتملين وتحويل المهتمين منهم إلى فريق المبيعات لديك
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainSteps.map((step, index) => (
            <div 
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="relative group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`bg-gradient-to-r ${step.color} rounded-2xl p-6 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-blue-100">{step.description}</p>
                </div>
                {index < mainSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-2 bg-gradient-to-r from-transparent to-blue-300"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* لوحة تحكم التحليلات البيانية الاحترافية */}
        <div className="mt-16">
          <AnalyticsDashboard />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;