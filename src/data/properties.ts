export interface Property {
  name: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Plot' | 'Villa';
  price: string;
  status: 'Ready to Move' | 'Under Construction' | 'New Launch';
  description: string;
  image: string;
}

export const properties: Property[] = [
  {
    name: 'Skyline Tower',
    location: 'Dubai',
    category: 'Residential',
    price: '₹2.5 Cr',
    status: 'Ready to Move',
    description: 'Luxury apartments with skyline views.',
    image: '/images/project_villa.jpg',
  },
  {
    name: 'Future Corporate Hub',
    location: 'Singapore',
    category: 'Commercial',
    price: '₹5 Cr',
    status: 'Under Construction',
    description: 'Next-gen workspace ecosystem.',
    image: '/images/project_apartment.jpg',
  },
  {
    name: 'Emerald Gardens',
    location: 'London',
    category: 'Residential',
    price: '₹3.2 Cr',
    status: 'New Launch',
    description: 'Sustainable premium living.',
    image: '/images/project_commercial.jpg',
  },
];
