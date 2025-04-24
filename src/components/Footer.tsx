import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';
import LegalPopup from './LegalPopup';

const termsText = `اتفاقية الاستخدام\n\nمرحبًا بك في منصة اوتو كول. باستخدامك لهذا الموقع، فإنك توافق على الشروط والأحكام التالية وفقًا للقوانين المصرية:\n\n1. الاستخدام المشروع: يجب استخدام المنصة للأغراض القانونية فقط وبما لا يخالف القوانين المصرية، ويمنع إساءة استخدام الخدمة لأي غرض غير مشروع.\n2. الملكية الفكرية: جميع حقوق الملكية الفكرية للمحتوى والتصاميم محفوظة لمنصة اوتو كول ولا يجوز نسخ أو إعادة نشر أي جزء منها دون إذن كتابي.\n3. الحسابات والبيانات: يلتزم المستخدم بتقديم بيانات صحيحة وعدم انتحال هوية أو استخدام بيانات مزيفة.\n4. حدود المسؤولية: المنصة غير مسؤولة عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام الخدمة.\n5. التعديلات: تحتفظ المنصة بحق تعديل الشروط في أي وقت، ويُعد استمرارك في الاستخدام موافقة على التعديلات.\n6. القانون الواجب التطبيق: تخضع هذه الاتفاقية للقوانين المصرية وأي نزاع يختص به القضاء المصري.\n\nلمزيد من التفاصيل أو الاستفسارات، يرجى التواصل مع فريق الدعم.`;

const privacyText = `سياسة الخصوصية\n\nتلتزم منصة اوتو كول بحماية خصوصية بياناتك الشخصية واتباع القوانين المصرية ذات الصلة بحماية البيانات الشخصية.\n\n1. جمع البيانات: نقوم بجمع البيانات التي تقدمها طواعية (مثل الاسم ورقم الهاتف) عند التسجيل أو التواصل معنا.\n2. استخدام البيانات: تُستخدم بياناتك لتحسين الخدمة والتواصل معك ولا يتم بيعها أو مشاركتها مع أي طرف ثالث إلا بموجب القانون أو إذن صريح منك.\n3. حماية البيانات: نستخدم إجراءات أمنية مناسبة لحماية بياناتك من الوصول أو الاستخدام غير المصرح به.\n4. ملفات تعريف الارتباط (Cookies): قد نستخدم الكوكيز لتحسين تجربتك في الموقع.\n5. حقوقك: لك الحق في طلب تصحيح أو حذف بياناتك الشخصية أو الاعتراض على معالجتها في أي وقت.\n6. التعديلات: قد نقوم بتحديث هذه السياسة عند الحاجة، وسيتم إخطارك بأي تغييرات جوهرية.\n\nلمزيد من المعلومات أو لممارسة حقوقك، يرجى التواصل مع فريق الدعم.`;

const Footer: React.FC = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
  <Logo className="w-12 h-12 mr-3" footer />
</div>
            <p className="text-blue-200 mb-6">
  اوتو كول هو منصة اتصالات متطورة تمكّنك من الوصول إلى عملائك بشكل تلقائي وفعّال، مع تحويل العملاء المهتمين مباشرة إلى فريق المبيعات لديك. يساهم النظام في زيادة المبيعات وتقليل التكاليف التشغيلية من خلال أتمتة عمليات الاتصال، وتحسين سرعة الاستجابة، ودعم فرق المبيعات بأدوات ذكية وسهلة الاستخدام. مع اوتو كول، يمكنك تعزيز تجربة عملائك، وتحقيق نمو أسرع لأعمالك بثقة واحترافية.
</p>
            <div className="flex space-x-3 space-x-reverse">
              <a 
                href="#" 
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="تابعنا على فيسبوك" title="تابعنا على فيسبوك"
              >
                <span className="sr-only">فيسبوك</span>
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#" 
                className="bg-blue-800 hover:bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="تابعنا على إنستجرام" title="تابعنا على إنستجرام"
              >
                <span className="sr-only">إنستجرام</span>
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://wa.me/+201028576824" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="تواصل معنا عبر واتساب" title="تواصل معنا عبر واتساب"
              >
                <span className="sr-only">واتساب</span>
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white transition-colors duration-300">الرئيسية</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-blue-200 hover:text-white transition-colors duration-300">كيف تعمل الخدمة</a>
              </li>
              <li>
                <a href="#features" className="text-blue-200 hover:text-white transition-colors duration-300">المميزات</a>
              </li>
              <li>
                <a href="#pricing" className="text-blue-200 hover:text-white transition-colors duration-300">الأسعار</a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors duration-300">آراء العملاء</a>
              </li>
              <li>
                <a href="#faq" className="text-blue-200 hover:text-white transition-colors duration-300">الأسئلة الشائعة</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-200 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.596 0 0 .592 0 1.326v21.348C0 23.408.596 24 1.325 24h11.495v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.404 24 24 23.408 24 22.674V1.326C24 .592 23.404 0 22.675 0"/></svg>
                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white hover:underline" aria-label="تواصل معنا عبر فيس بوك" title="تواصل معنا عبر فيس بوك">تواصل معنا عبر فيس بوك</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-200 ml-2 flex-shrink-0" />
                <a href="tel:+201028576824" className="text-blue-100 hover:text-white hover:underline" aria-label="اتصل بنا مباشرة على 201028576824" title="اتصل بنا مباشرة على 201028576824">201028576824<span className="ml-1">+</span></a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-200 ml-2 flex-shrink-0" />
                <span className="text-blue-200">Sales@autocalls.net</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-200 ml-2 flex-shrink-0" />
                <span className="text-blue-200">القاهرة، مصر</span>
              </li>
              <li className="flex items-start">
                <MessageCircle className="h-5 w-5 text-blue-200 ml-2 flex-shrink-0" />
                <a href="https://wa.me/+201028576824" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white hover:underline" aria-label="تواصل معنا عبر واتساب" title="تواصل معنا عبر واتساب">تواصل معنا عبر واتساب</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">ساعات العمل</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-blue-200">السبت - الخميس:</span>
                <span>10 ص - 10 م (بتوقيت القاهرة)</span>
              </li>
              <li className="flex justify-between">
                <span className="text-blue-200">الجمعة:</span>
                <span>مغلق</span>
              </li>
            </ul>
            <div className="mt-6 text-right">
              <h4 className="text-lg font-bold mb-2">النشرة البريدية</h4>
              <div className="flex flex-row w-full" dir="rtl">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="flex-1 w-full bg-blue-800 text-white px-4 py-2 rounded-r-lg rounded-l-none placeholder-blue-300 border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 text-right"
                />
                <button className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-l-lg rounded-r-none transition-colors duration-300">
                  اشترك
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center text-blue-300" dir="ltr">
  <span>&copy; {currentYear} اوتو كول. جميع الحقوق محفوظة.</span>
  <span className="hidden md:inline">|</span>
  <button
    className="text-blue-200 hover:text-white underline transition-colors duration-200 focus:outline-none"
    onClick={() => setShowTerms(true)}
    type="button"
  >
    اتفاقية الاستخدام
  </button>
  <span className="hidden md:inline">|</span>
  <button
    className="text-blue-200 hover:text-white underline transition-colors duration-200 focus:outline-none"
    onClick={() => setShowPrivacy(true)}
    type="button"
  >
    سياسة الخصوصية
  </button>
</div>
<LegalPopup open={showTerms} onClose={() => setShowTerms(false)} title="اتفاقية الاستخدام">
  <pre className="whitespace-pre-wrap font-sans text-right">{termsText}</pre>
</LegalPopup>
<LegalPopup open={showPrivacy} onClose={() => setShowPrivacy(false)} title="سياسة الخصوصية">
  <pre className="whitespace-pre-wrap font-sans text-right">{privacyText}</pre>
</LegalPopup>
        </div>
      </div>
    </footer>
  );
};

export default Footer;