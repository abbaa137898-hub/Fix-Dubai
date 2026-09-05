export type NavigationTab = 'home' | 'about' | 'services' | 'properties' | 'reviews' | 'contact';

export interface ServiceItem {
  id: string;
  route: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image?: string;
  features: string[];
  priceRangeAED: string;
  emergencyAvailable: boolean;
  beforeAfter?: {
    beforeImg: string;
    afterImg: string;
    beforeTitle: string;
    afterTitle: string;
    description: string;
  };
}

export interface ServicePageData {
  slug: string;
  aliases: string[];
  serviceId: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  h1Subtitle: string;
  heroImage: string;
  imageAlt: string;
  category: string;
  keywords?: string[];
  internalLinks?: {
    prefixText: string;
    route: string;
    anchorText: string;
    suffixText?: string;
  }[];
  priceStartingAED: string;
  responseTime: string;
  warranty: string;
  emergencyAvailable: boolean;
  overview: string[];
  detailedServicesList: {
    title: string;
    description: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  pricingTable: {
    item: string;
    price: string;
    notes: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  coverageAreas: string[];
  relatedSlugs: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  serviceUsed: string;
  reviewText: string;
  verified: boolean;
}

export interface PropertyTypeItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  keyServices: string[];
  amcAvailable: boolean;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  emirate: string;
  serviceNeeded: string;
  propertyType: string;
  urgency: 'Emergency (Within 45 mins)' | 'Today / Tomorrow' | 'Standard Appointment';
  message: string;
}
