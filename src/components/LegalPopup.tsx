import React from 'react';

interface LegalPopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const LegalPopup: React.FC<LegalPopupProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 left-3 text-blue-900 hover:text-red-600 text-2xl font-bold focus:outline-none"
          aria-label="إغلاق"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-blue-900 text-center">{title}</h2>
        <div className="text-blue-900 text-sm max-h-[60vh] overflow-y-auto pr-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalPopup;
