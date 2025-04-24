import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const texts = [
    'اتصالات آلية ذكية لتسويق خدماتك',
    'حوّل المهتمين إلى عملاء بسهولة',
    'نظام تسويق حديث وفعّال',
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 55; // سرعة الكتابة (أسرع)
  const erasingSpeed = 30; // سرعة المسح
  const delayBetweenTexts = 1200; // وقت الانتظار بين النصوص

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentText = texts[currentTextIndex];

    if (typing) {
      if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), delayBetweenTexts);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, erasingSpeed);
      } else {
        setTyping(true);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, currentTextIndex, texts]);

  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className={`lg:w-1/2 text-center lg:text-right transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 w-full">
              <span className="relative inline-block min-h-[4.5em] md:min-h-[3.7em] lg:min-h-[4em] flex flex-col justify-center overflow-hidden" style={{minHeight: '110px'}}>
                {displayText}
                <span
                  className="absolute -left-2 top-1/2 -translate-y-1/2 bg-accent"
                  style={{
                    width: '0.18em',
                    height: '1.1em',
                    borderRadius: '2px',
                    animation: 'blink-cursor 0.45s steps(1) infinite',
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 w-full lg:mx-0 mx-auto">
<strong>اوتو كول</strong> منصة اتصالات ذكية تدير حملاتك تلقائياً، تستهدف العملاء المناسبين، وتحول المهتمين مباشرة لفريق المبيعات. عزز مبيعاتك ووفّر وقتك مع تقارير وتحليلات دقيقة وسهولة استخدام كاملة.
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#consultation" 
                className="uiverse-btn-main rtl-btn flex items-center w-full sm:w-auto px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 min-w-[220px]"
              >
                احجز استشارة مجانية
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </a>
              <a 
                href="#quote" 
                className="uiverse-btn-secondary rtl-btn flex items-center w-full sm:w-auto px-8 py-3 rounded-full text-base font-semibold transition-all duration-300 min-w-[220px]"
              >
                اطلب عرض سعر مخصص
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M9 8h.01M4 6a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" /></svg>
              </a>

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

.uiverse-btn-main {
  background: linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%);
  color: #fff;
  box-shadow: 0 8px 24px 0 rgba(30,58,138,0.18), 0 1.5px 3px 0 #2563eb44;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  font-weight: 700;
}
.uiverse-btn-main:hover, .uiverse-btn-main:focus {
  background: linear-gradient(90deg, #2563eb 0%, #1e3a8a 100%);
  box-shadow: 0 12px 32px 0 rgba(30,58,138,0.23), 0 2px 6px 0 #2563eb55;
  transform: translateY(-2px) scale(1.04);
}
.uiverse-btn-main:active {
  transform: scale(0.97);
}
.uiverse-btn-secondary {
  background: #fff;
  color: #1e3a8a;
  border: 2px solid #2563eb;
  box-shadow: 0 8px 24px 0 rgba(30,58,138,0.10), 0 1.5px 3px 0 #2563eb22;
  font-weight: 700;
  outline: none;
  position: relative;
  overflow: hidden;
}
.uiverse-btn-secondary:hover, .uiverse-btn-secondary:focus {
  background: #f0f6ff;
  color: #2563eb;
  border-color: #1e3a8a;
  box-shadow: 0 12px 32px 0 rgba(30,58,138,0.15), 0 2px 6px 0 #2563eb33;
  transform: translateY(-2px) scale(1.04);
}
.uiverse-btn-secondary:active {
  transform: scale(0.97);
}
`}</style>

            </div>
          </div>
          
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 floating">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8 text-blue-700" />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-700 rounded-full pulse-border"></div>
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mb-6">
                  <div className="h-10 bg-blue-50 rounded-lg flex items-center pr-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 ml-2"></span>
                    <span className="text-blue-800 text-sm">رسالة ترحيبية وعرض الخدمة</span>
                  </div>
                  <div className="h-10 bg-blue-50 rounded-lg flex items-center pr-4">
                    <span className="w-2 h-2 rounded-full bg-blue-500 ml-2"></span>
                    <span className="text-blue-800 text-sm">تحويل العميل لمندوب المبيعات</span>
                  </div>
                  <div className="h-10 bg-blue-50 rounded-lg flex items-center pr-4">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 ml-2"></span>
                    <span className="text-blue-800 text-sm">متابعة العميل وإتمام الصفقة</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="bg-green-500 text-white rounded-full py-3 px-6 shadow font-semibold transition hover:bg-green-600 transform hover:scale-105">
                    ابدأ المكالمة
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-200 rounded-lg transform rotate-12"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-accent opacity-20 rounded-full"></div>
              <div className="absolute top-1/2 -right-10 w-20 h-20 bg-blue-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;