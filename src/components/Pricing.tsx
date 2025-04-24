import React, { useRef, useEffect } from 'react';
import { Check, MessageCircle } from 'lucide-react';
import { PricingPackage } from '../types';

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<(HTMLDivElement | null)[]>([]);

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

    packagesRef.current.forEach((pkg) => {
      if (pkg) observer.observe(pkg);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      packagesRef.current.forEach((pkg) => {
        if (pkg) observer.unobserve(pkg);
      });
    };
  }, []);

  const allFeatures = [
    "500 دقيقة اتصال",
    "1000 دقيقة اتصال",
    "2000 دقيقة اتصال",
    "رسالة صوتية واحدة",
    "رسالتين صوتيتين مخصصتين",
    "3 رسائل صوتية مخصصة",
    "تحويل للمبيعات عبر MicroSIP",
    "تحويل للمبيعات عبر MicroSIP أو الموبايل",
    "تحويل للمبيعات عبر أي قناة",
    "تقرير أسبوعي",
    "تقرير يومي مفصل",
    "لوحة تحكم خاصة بالإحصائيات",
    "دعم فني عبر الواتساب",
    "دعم فني على مدار الساعة",
    "إعداد قوائم العملاء المستهدفين",
    "إعداد وتنظيم قوائم العملاء",
    "تسجيل المكالمات"
  ];

  // تعريف 8 مزايا لكل باقة (متاحة أو غير متاحة)
  const packages: PricingPackage[] = [
  {
    title: "الباقة الأساسية",
    price: "499 جنيه / شهريًا",
    description: "300 دقيقة اتصال شهريًا للشركات الصغيرة والناشئة.",
    features: [
      { label: "300 دقيقة اتصال شهريًا", available: true },
      { label: "رسالة صوتية أساسية", available: true },
      { label: "تحويل للمبيعات عبر MicroSIP فقط", available: true },
      { label: "تقرير أسبوعي مبسط", available: true },
      { label: "دعم فني عبر الواتساب في أوقات العمل", available: true },
      { label: "لوحة تحكم للإحصائيات الأساسية", available: false },
      { label: "تسجيل المكالمات", available: false },
      { label: "إعداد قوائم العملاء يدويًا", available: false },
    ]
  },
  {
    title: "الباقة الاحترافية",
    price: "999 جنيه / شهريًا",
    description: "1200 دقيقة اتصال شهريًا للشركات المتوسطة مع مزايا متقدمة.",
    features: [
      { label: "1200 دقيقة اتصال شهريًا", available: true },
      { label: "رسالتين صوتيتين مخصصتين", available: true },
      { label: "تحويل للمبيعات عبر MicroSIP أو الموبايل", available: true },
      { label: "تقرير يومي مفصل", available: true },
      { label: "دعم فني عبر الواتساب والهاتف", available: true },
      { label: "لوحة تحكم متقدمة للإحصائيات", available: true },
      { label: "تسجيل المكالمات لمدة 14 يوم", available: true },
      { label: "إعداد قوائم العملاء تلقائيًا", available: true },
    ],
    isPopular: true
  },
  {
    title: "الباقة المتقدمة",
    price: "1999 جنيه / شهريًا",
    description: "3000 دقيقة اتصال شهريًا للشركات الكبيرة والمؤسسات مع أعلى مزايا ودعم فائق.",
    features: [
      { label: "3000 دقيقة اتصال شهريًا", available: true },
        { label: "3 رسائل صوتية مخصصة", available: true },
        { label: "تحويل للمبيعات عبر أي قناة", available: true },
        { label: "لوحة تحكم خاصة بالإحصائيات", available: true },
        { label: "دعم فني على مدار الساعة", available: true },
        { label: "تسجيل المكالمات", available: true },
        { label: "إعداد وتنظيم قوائم العملاء", available: true },
        { label: "تقرير يومي مفصل", available: true },
      ]
    }
  ];

  return (
    <section 
      id="pricing"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-blue-50 via-white to-blue-100 opacity-0 translate-y-10 transition-all duration-1000 overflow-x-hidden"
    >
      {/* خلفية هندسية ناعمة أسفل البطاقات */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-end">
        <div className="w-[90vw] h-48 md:h-64 bg-gradient-to-tr from-blue-100/60 via-blue-200/40 to-blue-50/0 rounded-b-full blur-2xl opacity-70"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">باقات الاشتراك</h2>
          <div className="text-blue-700 font-semibold text-lg md:text-xl mb-2 animate-fade-in-up">اختر خطوتك نحو النجاح</div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">كل باقة تمنحك قيمة حقيقية وتدعم نمو أعمالك. جميع الباقات تشمل الدفع للمكالمات المكتملة فقط بواقع جنية للدقيقة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 md:mt-14">
          {packages.map((pkg, index) => {
            // ألوان مخصصة لكل باقة
            const headerColors = [
              'from-blue-400 to-blue-600',
              'from-purple-500 to-blue-700',
              'from-orange-400 to-pink-500'
            ];
            const badgeColors = [
              'bg-blue-500',
              'bg-purple-600',
              'bg-orange-500'
            ];
            const icons = [
              <MessageCircle className="h-8 w-8 text-blue-600 drop-shadow-md" />, // الأساسية
              <Check className="h-8 w-8 text-purple-600 drop-shadow-md" />, // الاحترافية
              <Check className="h-8 w-8 text-orange-500 drop-shadow-md" /> // المتقدمة
            ];
            return (
              <div
                key={index}
                ref={el => packagesRef.current[index] = el}
                className={`group relative glass-card border border-white/30 dark:border-white/10 bg-white/60 dark:bg-blue-950/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-4 hover:bg-white/80 dark:hover:bg-blue-950/80 opacity-0 translate-y-10 ${
                  pkg.isPopular ? 'ring-2 ring-blue-500 scale-105 z-10' : ''
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* شريط علوي ملون */}
                <div className={`h-2 w-full ${headerColors[index]} rounded-t-3xl`}></div>
                {/* شارة الأكثر طلباً */}
                {pkg.isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-5 py-1 rounded-full bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs font-bold shadow-xl animate-bounce border border-blue-200/60 dark:border-blue-900/60">
                    <svg className="h-4 w-4 text-yellow-300 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="6" /></svg>
                    الأكثر طلباً
                  </div>
                )}
                {/* أيقونة الباقة */}
                <div className="flex justify-center">
                  <div className="bg-white/80 dark:bg-blue-900/80 shadow-lg rounded-full p-5 border border-white/40 dark:border-blue-900/40 mt-10 mb-8 relative z-20 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}>
                    {icons[index]}
                  </div>
                </div>
                <div className="p-8 pt-4 group-hover:bg-gradient-to-b from-white/80 to-blue-50/70 dark:from-blue-950/80 dark:to-blue-900/60 transition-all duration-300 flex flex-col h-full">
                  <h3 className="text-2xl font-extrabold text-blue-900 dark:text-white mb-2 tracking-tight text-center">{pkg.title}</h3>
                  <p className="text-gray-600 dark:text-blue-100 mb-6 text-md min-h-[48px] text-center">{pkg.description}</p>
                  <div className="mb-6 flex items-center justify-center">
                    <span className="text-5xl font-extrabold text-blue-900 dark:text-white drop-shadow-lg">{pkg.price}</span>
                  </div>
                  <ul className="space-y-4 mb-4">
                    {[...pkg.features]
                      .sort((a, b) => (a.available === b.available ? 0 : a.available ? -1 : 1))
                      .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-blue-900 dark:text-blue-100 font-medium text-lg">
                          {feature.available ? (
                            <span className="rounded-full p-1 bg-gradient-to-br from-green-400 to-green-600 shadow-md animate-bounce">
                              <Check className="h-4 w-4 text-white drop-shadow animate-pulse" />
                            </span>
                          ) : (
                            <span className="rounded-full p-1 bg-gradient-to-br from-red-400 to-red-600 shadow-md animate-shake">
                              <svg className="h-4 w-4 text-white drop-shadow animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                          )}
                          <span className="flex-1 leading-relaxed">{feature.label}</span>
                        </li>
                      ))}
                  </ul>
                  <a
                    href="https://wa.me/+201028576824"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center py-4 px-8 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 gap-2 mt-4 ${
                      pkg.isPopular
                        ? 'bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950'
                        : index === 2
                        ? 'bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700'
                        : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900'
                    } animate-bounce`}
                  >
                    <span className="inline-flex items-center justify-center bg-white/20 rounded-full p-2 mr-1">
                      <MessageCircle className="h-6 w-6 animate-pulse" />
                    </span>
                    اشترك الآن
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* شريط مقارنة مزايا صغير */}
        <div className="mt-10 md:mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 items-center justify-center bg-gradient-to-r from-blue-100/60 via-white/80 to-blue-50/60 rounded-xl px-6 py-3 shadow-sm mb-6">
            <span className="inline-flex items-center gap-2 text-blue-800 font-semibold">
              <Check className="h-5 w-5 text-green-500" /> تقارير فورية
            </span>
            <span className="inline-flex items-center gap-2 text-blue-800 font-semibold">
              <Check className="h-5 w-5 text-green-500" /> دعم فني سريع
            </span>
            <span className="inline-flex items-center gap-2 text-blue-800 font-semibold">
              <Check className="h-5 w-5 text-green-500" /> تحكم كامل في الحملات
            </span>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-gray-700 mb-4">هل تحتاج إلى باقة مخصصة لاحتياجاتك؟</p>
          <a 
            href="https://wa.me/+201028576824" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-white hover:bg-blue-50 text-blue-700 font-semibold py-3 px-8 rounded-full border-2 border-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="ml-2 h-5 w-5" />
            تواصل معنا لباقة مخصصة
          </a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;