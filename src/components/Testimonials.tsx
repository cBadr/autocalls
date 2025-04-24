import React, { useRef, useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft, Star } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const testimonials: Testimonial[] = [
    {
      name: "أحمد محمد",
      position: "مدير التسويق",
      company: "شركة تكنولوجيا المستقبل",
      comment: "اوتو كول ساعدتنا في زيادة مبيعاتنا بنسبة 40% خلال الشهر الأول من استخدامها. فريق الدعم محترف ويستجيب بسرعة لجميع استفساراتنا.",
      image: "https://i.pinimg.com/474x/4e/d1/3d/4ed13daf4a0be38bbe1b2361671d0cc7.jpg"
    },
    {
      name: "سارة أحمد",
      position: "مديرة المبيعات",
      company: "مؤسسة الريادة للتسويق",
      comment: "نظام تحويل المكالمات لفريق المبيعات ساعدنا في التركيز على العملاء المهتمين فعلياً، مما وفر لنا الكثير من الوقت والجهد. أنصح بشدة بهذه اوتو كول.",
      image: "https://t4.ftcdn.net/jpg/08/23/95/89/360_F_823958944_1c9covIC7Tl7eyJtWoTiXc0L4vP6f43q.jpg"
    },
    {
      name: "محمود خالد",
      position: "مدير عام",
      company: "شركة النجاح للاستشارات",
      comment: "اوتو كول احترافية جداً ونتائجها ملموسة. استطعنا الوصول لشريحة كبيرة من العملاء المحتملين بتكلفة معقولة جداً مقارنة بوسائل التسويق الأخرى.",
      image: "https://Sales@autocalls.net/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white opacity-0 translate-y-10 transition-all duration-1000"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">آراء عملائنا</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            اطلع على تجارب عملائنا الناجحة مع اوتو كول
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-10 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl text-center text-gray-800 mb-8">
              "{testimonials[currentIndex].comment}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="text-center">
                <span className="font-bold text-lg text-blue-900">{testimonials[currentIndex].name}</span>
                <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                <p className="text-gray-500">{testimonials[currentIndex].company}</p>
              </div>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-4 md:-translate-x-12">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-800 hover:bg-blue-50 transition-colors duration-300 focus:outline-none"
                aria-label="عرض الرأي السابق"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-4 md:translate-x-12">
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-800 hover:bg-blue-50 transition-colors duration-300 focus:outline-none"
                aria-label="عرض الرأي التالي"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? 'bg-blue-700' : 'bg-blue-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;