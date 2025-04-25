import React, { useState, useEffect } from 'react';
// يمكنك استخدام أيقونة واتساب SVG مباشرة أو من lucide-react إذا كانت متوفرة
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#25D366"/>
    <path d="M23.4 18.9c-.3-.2-1.7-.8-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.1c-.2.1-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.3-.8-.7-1.3-1.6-1.5-1.8-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.5s.1-.3.2-.5c.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.5-.6-.5-.8-.5h-.6c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.9 4.4 3.9.6.2 1 .3 1.4.4.6.1 1.2.1 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.2-.2-.2-.5-.4z" fill="#fff"/>
  </svg>
);

const ScrollToTop: React.FC = () => {
  // زر واتساب عائم متطور يظهر فقط على الشاشات الصغيرة (الموبايل)
  return (
    <>
      <a
        href="https://wa.me/+201028576824"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 group md:hidden flex items-center justify-center z-50"
        aria-label="تواصل مباشر عبر واتساب"
        title="تواصل مباشر عبر واتساب"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {/* تأثير إضاءة نابض حول الزر */}
        <span className="absolute animate-wa-glow pointer-events-none" />
        {/* الزر نفسه */}
        <span
          className="relative bg-[#25D366] hover:bg-[#1ebe57] rounded-full shadow-wa transition-all duration-300 w-16 h-16 flex items-center justify-center group-hover:animate-wa-shake"
          style={{ boxShadow: '0 0 0 0 #25d36655, 0 4px 24px 0 #25d36666' }}
        >
          <WhatsAppIcon className="w-9 h-9 drop-shadow-lg" />
          <span className="sr-only">تواصل مباشر عبر واتساب</span>
        </span>
      </a>
      {/* ستايلات المؤثرات */}
      <style>{`
        @keyframes wa-glow {
          0% { box-shadow: 0 0 0 0 #25d36655, 0 4px 24px 0 #25d36666; }
          70% { box-shadow: 0 0 0 16px #25d36622, 0 4px 24px 0 #25d36666; }
          100% { box-shadow: 0 0 0 0 #25d36600, 0 4px 24px 0 #25d36666; }
        }
        .animate-wa-glow {
          width: 4.5rem;
          height: 4.5rem;
          border-radius: 9999px;
          background: transparent;
          box-shadow: 0 0 0 0 #25d36655, 0 4px 24px 0 #25d36666;
          position: absolute;
          z-index: -1;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          animation: wa-glow 1.6s infinite cubic-bezier(.4,0,.6,1);
        }
        @keyframes wa-shake {
          0%, 100% { transform: translateX(0); }
          15% { transform: translateX(-2px) rotate(-3deg); }
          30% { transform: translateX(3px) rotate(3deg); }
          45% { transform: translateX(-2px) rotate(-2deg); }
          60% { transform: translateX(2px) rotate(2deg); }
          75% { transform: translateX(-1px) rotate(-1deg); }
        }
        .group:hover .group-hover\:animate-wa-shake {
          animation: wa-shake 0.5s 1;
        }
        .shadow-wa {
          box-shadow: 0 4px 24px 0 #25d36666, 0 0 0 2px #25d36622;
        }
      `}</style>
    </>
  );
};

export default ScrollToTop;