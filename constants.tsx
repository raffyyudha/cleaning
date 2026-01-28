import { Sparkles, Home, Clock, Star, ShieldCheck, Smile, MapPin, CheckCircle, Users, Trophy, Building2, Droplets } from 'lucide-react';
import { ServiceData, FeatureData, ContactInfo, ProjectData, TestimonialData, StatData } from './types';

export const COMPANY_NAME = "TMC Cleaning Services";
export const TAGLINE = "House Cleaning Service • Open 24 Hours";

export const CONTACT_DETAILS: ContactInfo = {
  address: "678 N Ranch Rd, Fair Grove, MO 65648, United States",
  location: "Fair Grove & Surrounding Areas",
  phone: "+1 417-403-6731",
  email: "theresa.cox@tmccleaning.com"
};

export const WHATSAPP_NUMBERS = [
  { number: "14174036731", label: "Book Now" },
  { number: "14174036731", label: "24/7 Support" }
];

// STABLE IMAGE: Bright Kitchen Interior (Tested)
export const BEFORE_AFTER_IMAGE = "/images/kitchen-fresh.png";

export const SERVICES: ServiceData[] = [
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    description: 'Comprehensive residential cleaning to keep your home spotless, sanitary, and welcoming every day.',
    icon: Home,
    // STABLE IMAGE: Beige Living Room
    imageUrl: "/images/living-room-shelves.png",
    features: [
      'Routine Housekeeping',
      'Dusting & Vacuuming',
      'Kitchen & Bathroom Sanitation',
      'Bedroom Organization'
    ]
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    description: 'Intensive cleaning services that reach the hidden dirt and grime standard cleaning misses.',
    icon: Sparkles,
    // STABLE IMAGE: Modern Kitchen
    imageUrl: "/images/modern-sofa.png",
    features: [
      'Baseboards & Door Frames',
      'Behind Appliances',
      'Deep Grout Scrubbing',
      'Interior Window Washing'
    ]
  },
  {
    id: '24-hour',
    title: '24-Hour Service',
    description: 'We work around your schedule. Day or night, we are available to ensure your space is pristine.',
    icon: Clock,
    // STABLE IMAGE: Evening Interior / Cozy
    imageUrl: "/images/kitchen-fresh.png",
    features: [
      'Emergency Cleanup',
      'Late Night Availability',
      'Flexible Scheduling',
      'Holiday Service'
    ]
  },
  {
    id: 'move-in-out',
    title: 'Move-In / Move-Out',
    description: 'Ensure you get your deposit back or step into a fresh new home with our transition cleaning.',
    icon: Building2,
    // STABLE IMAGE: Bright Open Living Space
    imageUrl: "/images/empty-room.png",
    features: [
      'Empty Home Cleaning',
      'Cabinet & Drawer Cleaning',
      'Full Appliance Cleaning',
      'Trash Removal'
    ]
  }
];

export const WHY_CHOOSE_US: FeatureData[] = [
  {
    title: "Open 24 Hours",
    description: "We are one of the few services available around the clock to fit your busy lifestyle.",
    icon: Clock
  },
  {
    title: "Detail Oriented",
    description: "We don't cut corners, we clean them. Every surface is treated with care and precision.",
    icon: Sparkles
  },
  {
    title: "Trusted Professional",
    description: "Owned and operated by Theresa Cox. Reliable, honest, and dedicated to excellence.",
    icon: ShieldCheck
  },
  {
    title: "Satisfaction Guaranteed",
    description: "Your happiness is our priority. We ensure your home is left sparkling clean.",
    icon: Smile
  }
];

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    title: "Modern Living Room",
    category: "House Cleaning",
    // STABLE: Living Room
    imageUrl: "/images/living-room-shelves.png"
  },
  {
    id: 2,
    title: "Sparkling Kitchen",
    category: "Deep Cleaning",
    // STABLE: White Kitchen
    imageUrl: "/images/kitchen-fresh.png"
  },
  {
    id: 3,
    title: "Luxury Bathroom",
    category: "Deep Cleaning",
    // STABLE: Modern Bathroom
    imageUrl: "/images/modern-sofa.png"
  },
  {
    id: 4,
    title: "Move-Out Revival",
    category: "Move-In / Out",
    // STABLE: Clean Room / Chair
    imageUrl: "/images/empty-room.png"
  },
  {
    id: 5,
    title: "Bedroom Organization",
    category: "House Cleaning",
    // STABLE: Bedroom
    imageUrl: "/images/living-room-shelves.png"
  },
  {
    id: 6,
    title: "Window Cleaning",
    category: "Deep Cleaning",
    // STABLE: Window View
    imageUrl: "/images/kitchen-fresh.png"
  }
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: 1,
    name: "Emily R.",
    role: "Fair Grove Resident",
    content: "Theresa is amazing! I needed a last-minute clean before my in-laws arrived, and she accommodated my schedule perfectly. My house has never looked this good.",
    rating: 5
  },
  {
    id: 2,
    name: "Mark D.",
    role: "Homeowner",
    content: "The 24-hour availability is a game changer. I work odd shifts, and having TMC come in when it suits me is invaluable. Highly recommended.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah L.",
    role: "Local Business Owner",
    content: "Professional, thorough, and trustworthy. I've used several cleaning services in Missouri, but TMC is by far the best.",
    rating: 5
  }
];

export const STATS: StatData[] = [
  { id: 1, label: "Homes Cleaned", value: "1000+", icon: Home },
  { id: 2, label: "Hours Available", value: "24/7", icon: Clock },
  { id: 3, label: "Happy Clients", value: "500+", icon: Users },
  { id: 4, label: "Years Experience", value: "15+", icon: Trophy },
];

export const HERO_IMAGES = [
  "/images/kitchen-fresh.png",
  "/images/modern-sofa.png",
  "/images/living-room-shelves.png",
];