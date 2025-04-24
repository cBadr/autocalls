import React, { useRef, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
            entry.target.classList.remove('opacity-0', 'scale-95');
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

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white opacity-0 scale-95 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">جاهز لزيادة مبيعاتك؟</h2>
              <p className="text-blue-100 text-lg mb-8">
                ابدأ اليوم باستخدام خدمة الاتصالات الآلية وشاهد النتائج بنفسك. نحن هنا لمساعدتك في كل خطوة.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/+201028576824" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full md:w-auto md:inline-flex items-center rtl-btn bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-center"
                >
                  تواصل عبر واتساب
                  <MessageCircle className="ml-2 h-5 w-5" />
                </a>
                
                <a 
                  href="tel:+201234567890"
                  className="block w-full md:w-auto md:inline-flex items-center rtl-btn bg-white hover:bg-blue-50 text-blue-800 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 mr-0 md:mr-4 text-center"
                >
                  اتصل بنا مباشرة
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-blue-800 p-8 md:p-12">
              <div className="bg-white rounded-lg p-6 shadow-inner">
                <h3 className="text-xl font-bold text-blue-900 mb-4">لماذا تختار خدمتنا؟</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mt-0.5 ml-2">
                      <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>تسويق فعال بتكلفة أقل من الوسائل التقليدية</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mt-0.5 ml-2">
                      <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>التركيز فقط على العملاء المهتمين بخدماتك</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mt-0.5 ml-2">
                      <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>توفير الوقت والجهد لفريق المبيعات لديك</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mt-0.5 ml-2">
                      <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>الدفع فقط مقابل المكالمات الناجحة</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 rounded-full p-1 mt-0.5 ml-2">
                      <svg className="h-4 w-4 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>بدء الاستفادة من اليوم الأول</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

<style>{`
.rtl-btn {
  direction: rtl;
  justify-content: flex-end;
  text-align: right;
}
.rtl-btn svg {
  margin-left: 0;
  margin-right: 8px;
}
`}</style>

export default ContactCTA;