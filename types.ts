import { LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  imageUrl: string;
}

export interface FeatureData {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  location: string;
}

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface TestimonialData {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface StatData {
  id: number;
  label: string;
  value: string;
  icon: LucideIcon;
}