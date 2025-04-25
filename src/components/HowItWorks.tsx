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
      icon: <PhoneCall className="h-8 w-8 text-white" />, circle: { bg: 'bg-blue-500 animate-pulse-blue', text: 'text-white' },
      title: "إجراء الاتصال الآلي", description: "يتم إجراء اتصالات آلية على قائمة العملاء المحتملين التي تزودنا بها", color: "from-blue-600 to-blue-800"
    },
    {
      icon: <User className="h-8 w-8 text-white" />, circle: { bg: 'bg-green-500 animate-pulse-green', text: 'text-white' },
      title: "استماع العميل للعرض", description: "يستمع العميل لرسالة ترحيبية وعرض صوتي مسجل عن خدماتك", color: "from-green-600 to-green-800"
    },
    {
      icon: <Phone className="h-8 w-8 text-white" />, circle: { bg: 'bg-yellow-400 animate-pulse-yellow', text: 'text-blue-900' },
      title: "التحويل لمندوب المبيعات", description: "يتم تحويل العملاء المهتمين مباشرة إلى فريق المبيعات لديك", color: "from-yellow-300 to-yellow-500"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-white" />, circle: { bg: 'bg-purple-600 animate-pulse-purple', text: 'text-white' },
      title: "المتابعة وإتمام الصفقة", description: "يقوم فريقك بمتابعة العميل وإتمام عملية البيع بنجاح", color: "from-purple-600 to-purple-800"
    },
  ];







  return (
    <section 
      id="how-it-works" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 animate-fade-in">كيف تعمل خدمتنا</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fade-in delay-150">
            رحلة متكاملة تبدأ من تحديد العملاء الأكثر اهتماماً، مروراً بالتواصل الذكي الآلي، وصولاً إلى تحويل المهتمين مباشرة لفريق المبيعات ومتابعتهم حتى إتمام الصفقة—all automated, seamless, and measurable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {mainSteps.map((step, index) => (
            <div
              key={index}
              ref={el => stepsRef.current[index] = el}
              className="relative group opacity-0 translate-y-10 scale-95 animate-step-fade-in"
              style={{ animationDelay: `${index * 0.25 + 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className={`bg-gradient-to-r ${step.color} rounded-2xl p-6 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:-translate-y-2`}
              >
                <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg animate-bounce-in ${step.circle.bg}`}
                  style={{ animationDelay: `${index * 0.25 + 0.4}s`, animationFillMode: 'forwards' }}>
                  <span className={step.circle.text}>{step.icon}</span>
                </div>
                <div className="mt-8">
                  <h3 className={`text-xl font-bold mb-3 animate-fade-in delay-200 ${index === 2 ? 'text-blue-900' : 'text-white'}`}>{step.title}</h3>
                  <p className={`animate-fade-in delay-300 ${index === 2 ? 'text-blue-900/80' : 'text-blue-100'}`}>{step.description}</p>
                </div>
                {index < mainSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-2 bg-gradient-to-r from-transparent to-blue-300"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* مؤثرات حركية مخصصة */}
        <style>{`
          @keyframes pulse-blue {
            0%, 100% { box-shadow: 0 0 0 0 #3b82f655; }
            50% { box-shadow: 0 0 0 12px #3b82f622; }
          }
          .animate-pulse-blue { animation: pulse-blue 1.7s infinite cubic-bezier(.4,0,.6,1); }
          @keyframes pulse-green {
            0%, 100% { box-shadow: 0 0 0 0 #22c55e55; }
            50% { box-shadow: 0 0 0 12px #22c55e22; }
          }
          .animate-pulse-green { animation: pulse-green 1.7s infinite cubic-bezier(.4,0,.6,1); }
          @keyframes pulse-yellow {
            0%, 100% { box-shadow: 0 0 0 0 #fde04777; }
            50% { box-shadow: 0 0 0 12px #fde04733; }
          }
          .animate-pulse-yellow { animation: pulse-yellow 1.7s infinite cubic-bezier(.4,0,.6,1); }
          @keyframes pulse-purple {
            0%, 100% { box-shadow: 0 0 0 0 #a21caf55; }
            50% { box-shadow: 0 0 0 12px #a21caf22; }
          }
          .animate-pulse-purple { animation: pulse-purple 1.7s infinite cubic-bezier(.4,0,.6,1); }

            0% { opacity: 0; transform: translateY(40px) scale(0.95); }
            80% { opacity: 1; transform: translateY(-6px) scale(1.03); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          .animate-step-fade-in {
            animation: step-fade-in 1.1s cubic-bezier(.22,1,.36,1) forwards;
          }
          @keyframes bounce-in {
            0% { transform: scale(0.7); opacity: 0; }
            80% { transform: scale(1.15); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-bounce-in {
            animation: bounce-in 0.95s cubic-bezier(.22,1,.36,1) forwards;
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease forwards;
          }
          .delay-150 { animation-delay: 0.15s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
        `}</style>

        {/* لوحة تحكم التحليلات البيانية الاحترافية */}
        <div className="mt-16">
          <AnalyticsDashboard />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;