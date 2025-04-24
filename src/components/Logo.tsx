import React from 'react';
import { Phone, MessageCircle, BarChart } from 'lucide-react';

interface LogoProps {
  className?: string;
  footer?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', footer = false }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        <div className="relative">
          <div className={`bg-gradient-to-r from-blue-700 to-blue-900 w-12 h-12 rounded-2xl flex items-center justify-center transform rotate-12 shadow-lg ${!footer ? 'animate-spin-slow shadow-glow' : ''}`}>
            <Phone className="text-white h-6 w-6 transform -rotate-12" />
          </div>
          <div className={`absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center ${!footer ? 'animate-pulse' : ''}`}>
            <MessageCircle className="text-white h-2.5 w-2.5" />
          </div>
          <div className={`absolute -bottom-1 -left-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center ${!footer ? 'animate-pulse' : ''}`}>
            <BarChart className="text-white h-2.5 w-2.5" />
          </div>
        </div>
        <span
  className={
    `text-2xl font-bold mr-3 whitespace-nowrap ` +
    (footer
      ? 'text-blue-200 drop-shadow-sm'
      : 'bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent animate-text-flash')
  }
>
  اوتو كول
</span>
      </div>
    </div>
  );
};

export default Logo;