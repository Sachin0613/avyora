
import React from 'react';
import { 
  Rocket, 
  Globe, 
  Instagram, 
  Zap, 
  Layers, 
  Camera, 
  Users, 
  Target,
  BarChart,
  ShieldCheck,
  ZapIcon,
  Search,
  PenTool,
  PlayCircle,
  HeartHandshake,
  TrendingUp
} from 'lucide-react';
import { PricingPlan, ServiceFeature } from './types';

export const PLANS: PricingPlan[] = [
  {
    id: 'plan-1',
    name: 'Complete Digital Growth',
    price: '₹49,000',
    subtitle: '/ Month',
    color: 'from-blue-600 to-indigo-700',
    description: [
      'Domain & Hosting (1 year)',
      'Professional Website building',
      '4 Video shoots & 4 Photo shoots',
      'Instagram, Snapchat, LinkedIn management',
      'Influencer collaborations',
      'Menu redesign ×1',
      'Offer making ×1',
      'Sandwich board designing ×1',
      'Logo enhancement ×1',
      'Seasonal campaigns',
      'Customer engagement & Feedback analysis',
      'Fun loyalty programs'
    ],
    isPopular: true
  },
  {
    id: 'plan-2',
    name: 'Digital Social Media Management',
    price: '₹24,999',
    subtitle: '/ Month',
    color: 'from-purple-600 to-pink-700',
    description: [
      '4 Video shoots & 4 Photo shoots',
      'Instagram Management (Posting & Stories)',
      'Facebook Management',
      'LinkedIn Management',
      '1 Influencer collaboration'
    ]
  },
  {
    id: 'plan-3',
    name: 'Website Management',
    price: '₹24,999',
    subtitle: 'Offer Price',
    color: 'from-emerald-600 to-teal-700',
    description: [
      'Professional Website Building',
      'Domain rights (1 year)',
      'Hosting rights (1 year)',
      'Professional photo shoot for website'
    ]
  },
  {
    id: 'plan-4',
    name: 'Ground Management',
    price: '₹24,999',
    subtitle: '/ Month',
    color: 'from-orange-600 to-red-700',
    description: [
      'Menu redesign ×1',
      'Offer making ×1',
      'Sandwich board ×1',
      'Logo enhancement (Free)',
      'Unique activity management',
      'Seasonal campaigns',
      'Customer interaction & Feedback analysis',
      'Fun loyalty programs',
      'Happy hours planning'
    ]
  }
];

export const FEATURES: ServiceFeature[] = [
  {
    title: 'Website Building',
    description: 'High-performance, premium websites designed to convert visitors into loyal customers.',
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: 'Domain & Hosting',
    description: 'Secure, reliable infrastructure to keep your digital storefront running 24/7.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Social Media Management',
    description: 'Strategic content creation and management across all major platforms.',
    icon: <Instagram className="w-6 h-6" />
  },
  {
    title: 'Video & Photo Shoots',
    description: 'Professional visual storytelling that captures the essence of your business.',
    icon: <Camera className="w-6 h-6" />
  },
  {
    title: 'Influencer Marketing',
    description: 'Connecting your brand with the right creators to amplify your reach.',
    icon: <Users className="w-6 h-6" />
  },
  {
    title: 'Menu & Branding Design',
    description: 'Refreshing your visual identity and menu to drive higher order values.',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    title: 'Seasonal Campaigns',
    description: 'Timed marketing activities that capitalize on trends and holidays.',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: 'Customer Engagement',
    description: 'Building deep loyalty through interactions and specialized programs.',
    icon: <HeartHandshake className="w-6 h-6" />
  }
];

export const PROCESS_STEPS = [
  {
    title: 'Research & Planning',
    description: 'We dive deep into your brand and market landscape.',
    icon: <Search className="w-8 h-8" />
  },
  {
    title: 'Strategy Creation',
    description: 'Crafting a bespoke growth roadmap for your business.',
    icon: <ZapIcon className="w-8 h-8" />
  },
  {
    title: 'Digital & Ground Execution',
    description: 'Parallel deployment across online and physical channels.',
    icon: <PlayCircle className="w-8 h-8" />
  },
  {
    title: 'Customer Engagement',
    description: 'Active management of loyalty and interaction.',
    icon: <Users className="w-8 h-8" />
  },
  {
    title: 'Continuous Growth',
    description: 'Data-driven refinement for sustained scaling.',
    icon: <TrendingUp className="w-8 h-8" />
  }
];

export const TRUST_POINTS = [
  {
    title: 'Transparent Pricing',
    description: 'Clear, upfront subscription costs with no hidden fees.',
    icon: <BarChart className="w-10 h-10" />
  },
  {
    title: 'Affordable Plans',
    description: 'High-end agency services at competitive market rates.',
    icon: <Zap className="w-10 h-10" />
  },
  {
    title: 'Online + On-Ground',
    description: 'The only growth partner offering true hybrid management.',
    icon: <Layers className="w-10 h-10" />
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored strategies that respect your unique business DNA.',
    icon: <Target className="w-10 h-10" />
  }
];
