export interface Property {
  name: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Plot' | 'Villa';
  price: string;
  area: string;
  possession: string;
  status: 'Ready to Move' | 'Under Construction' | 'Upcoming';
  description: string;
  image: string;
  amenities: string[];
  highlights: string[];
}

export const properties: Property[] = [
  {
    name: 'Skyline Tower',
    location: 'Mumbai, BKC',
    category: 'Residential',
    price: '₹2.5 Cr',
    area: '2500 sq.ft.',
    possession: 'Dec 2026',
    status: 'Ready to Move',
    description: 'Luxury apartments with skyline views designed for modern living.',
    image: '/images/project_villa.jpg',
    amenities: ['Swimming Pool', 'Fitness Center', '24×7 Security'],
    highlights: ['Prime Location', 'High Appreciation', 'Modern Architecture'],
  },
  {
    name: 'Future Corporate Hub',
    location: 'Gurgaon, DLF',
    category: 'Commercial',
    price: '₹5 Cr',
    area: '5000 sq.ft.',
    possession: 'Jun 2027',
    status: 'Under Construction',
    description: 'Next-gen workspace ecosystem for global brands.',
    image: '/images/project_apartment.jpg',
    amenities: ['High Speed Elevators', 'EV Charging', 'Smart Security'],
    highlights: ['Future Infrastructure', 'Excellent Connectivity', 'Quality Construction'],
  },
  {
    name: 'Emerald Gardens',
    location: 'Bangalore, Whitefield',
    category: 'Residential',
    price: '₹3.2 Cr',
    area: '3000 sq.ft.',
    possession: 'Mar 2028',
    status: 'Upcoming',
    description: 'Sustainable premium living in the heart of nature.',
    image: '/images/project_commercial.jpg',
    amenities: ['Landscape Garden', 'Club House', 'Children Play Area'],
    highlights: ['Prime Location', 'Sustainable Design', 'Excellent Connectivity'],
  },
];
