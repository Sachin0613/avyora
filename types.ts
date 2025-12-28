
import React from 'react';

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtitle?: string;
  description: string[];
  color: string;
  isPopular?: boolean;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}