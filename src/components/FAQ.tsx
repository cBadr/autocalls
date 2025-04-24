import React, { useRef, useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const FAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "كيف تعمل خدمة اوتو كول؟",
      answer: "تعمل الخدمة عن طريق إجراء اتصالات آلية على أرقام العملاء المحتملين. عندما يرد العميل على المكالمة، يستمع إلى رسالة ترحيبية وعرض صوتي عن خدماتك، ثم يتم تحويله مباشرة إلى فريق المبيعات لديك إذا كان مهتماً."
    },
    {
      question: "كيف يتم محاسبتي على الخدمة؟",
      answer: "نحن نتحاسب معك على المكالمات المكتملة فقط بواقع جنيه واحد لكل دقيقة. لا نقوم باحتساب المكالمات التي لم يرد عليها العميل أو المكالمات التي تعذر إجراؤها."
    },
    {
      question: "هل يمكنني تخصيص الرسالة الصوتية؟",
      answer: "نعم، يمكنك تخصيص الرسالة الصوتية بالكامل لتناسب خدماتك ومنتجاتك. يمكننا مساعدتك في إعداد رسالة احترافية تجذب انتباه العملاء المحتملين."
    },
    {
      question: "كيف يتم تحويل المكالمات إلى فريق المبيعات؟",
      answer: "يمكن تحويل المكالمات إلى فريق المبيعات لديك من خلال برامج الاتصال مثل MicroSIP أو تحويلها مباشرة إلى أرقام الهواتف المحمولة للموظفين حسب احتياجاتك."
    },
    {
      question: "هل أحتاج إلى تجهيزات خاصة لاستخدام الخدمة؟",
      answer: "لا، لا تحتاج إلى أي تجهيزات خاصة. نحن نقوم بإعداد وتشغيل النظام بالكامل لك. كل ما تحتاجه هو قائمة بأرقام العملاء المحتملين وأرقام فريق المبيعات لديك للتحويل إليهم."
    },
    {
      question: "كيف يمكنني الاشتراك في الخدمة؟",
      answer: "يمكنك الاشتراك في الخدمة من خلال التواصل معنا عبر الواتساب أو عبر النموذج على الموقع. سنقوم بالاتفاق معك على الباقة المناسبة وطريقة الدفع، ثم البدء في إعداد وتشغيل الخدمة لك."
    },
    {
      question: "هل بيانات العملاء آمنة؟",
      answer: "نعم، نحن نلتزم بأعلى معايير الأمان والخصوصية للحفاظ على بيانات عملائك وعدم مشاركتها مع أي طرف ثالث." 
    },
    {
      question: "هل يمكن تجربة الخدمة قبل الاشتراك؟",
      answer: "نعم، يمكنك طلب تجربة مجانية للخدمة للتأكد من ملاءمتها لاحتياجاتك قبل اتخاذ قرار الاشتراك النهائي." 
    }
  ];

  return (
    <section 
      id="faq"
      ref={sectionRef}
      className="py-16 md:py-24 bg-blue-50 opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">الأسئلة الشائعة</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            إليك إجابات على الأسئلة الأكثر شيوعاً حول خدمة الاتصالات الآلية
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`mb-4 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 border-2 ${openIndex === index ? 'border-accent' : 'border-transparent'} group`}
            >
              <button
                className="w-full text-right px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg text-blue-900 flex items-center gap-2">
  <svg className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-90 text-accent' : 'text-blue-400'}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
  {faq.question}
</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-blue-700 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-blue-700 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;