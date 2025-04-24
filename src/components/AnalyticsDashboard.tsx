import React from 'react';
import { BarChart, PieChart, TrendingUp, Users, PhoneCall, CheckCircle } from 'lucide-react';

const stats = [
  { label: 'عدد المكالمات', value: 1240, icon: <PhoneCall className="h-6 w-6 text-blue-700" /> },
  { label: 'معدل التحويل', value: '38%', icon: <TrendingUp className="h-6 w-6 text-green-600" /> },
  { label: 'العملاء الجدد', value: 184, icon: <Users className="h-6 w-6 text-purple-600" /> },
  { label: 'مكالمات ناجحة', value: 735, icon: <CheckCircle className="h-6 w-6 text-accent" /> },
];

const AnalyticsDashboard: React.FC = () => {
  return (
    <section id="analytics-dashboard" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">لوحة تحكم التحليلات المتقدمة</h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            احصل على رؤية متكاملة لأداء حملاتك عبر مؤشرات ورسوم بيانية احترافية تساعدك في اتخاذ القرار بثقة.
          </p>
        </div>
        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <div className="mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-900 mb-1">{stat.value}</div>
              <div className="text-md text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* رسم بياني شريطي */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 min-w-[250px]">
            <h4 className="text-xl font-bold text-blue-900 mb-4">توزيع المكالمات حسب الأيام</h4>
            {/* رسم بياني شريطي وهمي */}
            <div className="w-full h-40 flex items-end gap-2">
              {[80, 120, 100, 160, 90, 140, 110].map((val, i) => (
                <div key={i} className="bg-blue-600 rounded-t-lg" style={{ height: `${val}px`, width: '14%' }}></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              {['سبت','أحد','اثنين','ثلاثاء','أربعاء','خميس','جمعة'].map((d,i) => <span key={i}>{d}</span>)}
            </div>
          </div>
          {/* رسم بياني دائري وهمي */}
          <div className="flex-1 min-w-[250px] flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-900 mb-4">نسبة نجاح المكالمات</h4>
            <div className="relative w-32 h-32">
              <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#e0e7ef" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#16A34A" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset="60" strokeLinecap="round" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-green-700">76%</span>
            </div>
            <div className="text-md text-gray-600 mt-2">مكالمات ناجحة</div>
          </div>
        </div>
        {/* ملخص معلومات مهم وملهم */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mt-8 shadow">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* قائمة العناصر */}
            <div className="flex-1 text-right">
              <h4 className="text-xl font-bold text-blue-900 mb-6 text-right">لماذا التحليلات مهمة؟</h4>
              <ul className="max-w-2xl mx-auto text-right space-y-5">
                {[
                  'تحدد أفضل أوقات التواصل مع العملاء لتحقيق أعلى استجابة.',
                  'تساعدك في فهم سلوك واحتياجات العملاء الفعليين.',
                  'تمكنك من تحسين حملاتك التسويقية باستمرار بناءً على بيانات حقيقية.',
                  'تزيد من معدلات النجاح وتقلل من الهدر في الميزانية.',
                  'توفر لك تقارير فورية لاتخاذ قرارات سريعة وفعالة.',
                  'تعزز ثقة فريقك في النتائج وتدعم نمو أعمالك.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg md:text-xl text-right">
                    <span className="flex-shrink-0 mt-1">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </span>
                    <span className="text-blue-900 font-medium text-right">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* صورة توضيحية */}
            <div className="hidden md:block flex-shrink-0">
              <img src="/logo.svg" alt="تحليلات" className="w-52 h-52 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;
