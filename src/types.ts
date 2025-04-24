export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingFeature {
  label: string;
  available: boolean;
}

export interface PricingPackage {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  comment: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}