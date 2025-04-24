import React, { useState } from 'react';
import { AlertCircle, X } from 'lucide-react';

const BetaBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-2.5 px-4 text-center fixed bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-center relative">
        <button
          onClick={() => setVisible(false)}
          aria-label="إغلاق الشريط التجريبي"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-green-700 rounded transition"
          style={{direction: 'ltr'}}
        >
          <X className="h-5 w-5" />
        </button>
        <AlertCircle className="h-5 w-5 ml-2" />
        <span className="text-base font-semibold">
          تشغيل التجريبي - نرحب بملاحظاتكم واقتراحاتكم
        </span>
      </div>
    </div>
  );
};

export default BetaBanner;