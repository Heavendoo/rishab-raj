/* ===================================================
   LUXE ESTATES — Mock Property Data
   =================================================== */

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: string;
  priceValue: number;
  type: 'Apartment' | 'Villa' | 'Plot' | 'Commercial';
  badge: 'premium' | 'new' | 'hot' | null;
  bedrooms: number;
  bathrooms: number;
  area: string;
  parking: boolean;
  facing: string;
  floor: string;
  age: string;
  description: string;
  amenities: string[];
  images: string[];
}

export const properties: Property[] = [
  {
    id: 'skyline-penthouse',
    title: 'Skyline Penthouse',
    location: 'Palm Heights, Marine Drive',
    city: 'Mumbai',
    price: '₹2.85 Cr',
    priceValue: 28500000,
    type: 'Apartment',
    badge: 'premium',
    bedrooms: 4,
    bathrooms: 4,
    area: '3,200 sq.ft',
    parking: true,
    facing: 'Sea Facing',
    floor: '28th Floor',
    age: 'Under Construction',
    description: 'Experience the pinnacle of luxury living at Skyline Penthouse. This exquisite 4 BHK residence offers breathtaking panoramic views of the Arabian Sea, designer interiors with imported Italian marble flooring, a private terrace with infinity pool access, and world-class amenities. Located in the heart of Marine Drive, this property represents the finest in urban sophistication.',
    amenities: ['Swimming Pool', 'Gym', 'Concierge', 'Rooftop Garden', 'Smart Home', 'EV Charging', 'Private Elevator', 'Wine Cellar'],
    images: ['/images/property-1.webp', '/images/property-1-2.webp', '/images/property-1-3.webp']
  },
  {
    id: 'emerald-villa',
    title: 'Emerald Garden Villa',
    location: 'Whitefield Road, Prestige Enclave',
    city: 'Bangalore',
    price: '₹1.95 Cr',
    priceValue: 19500000,
    type: 'Villa',
    badge: 'new',
    bedrooms: 5,
    bathrooms: 5,
    area: '4,500 sq.ft',
    parking: true,
    facing: 'East Facing',
    floor: 'G+2',
    age: 'Ready to Move',
    description: 'Nestled in the prestigious Whitefield enclave, Emerald Garden Villa is a masterpiece of contemporary architecture. Featuring 5 spacious bedrooms, a lush private garden with landscaped pathways, a dedicated home office, modular kitchen with premium appliances, and a temperature-controlled wine room. Perfect for families seeking space, privacy, and luxury.',
    amenities: ['Private Garden', 'Home Theatre', 'Modular Kitchen', 'Solar Panels', 'Rainwater Harvest', 'Security', 'Clubhouse', 'Jogging Track'],
    images: ['/images/property-2.webp', '/images/property-2-2.webp', '/images/property-2-3.webp']
  },
  {
    id: 'royal-apartment',
    title: 'Royal Crest Apartment',
    location: 'Baner Road, Aundh',
    city: 'Pune',
    price: '₹85 Lakhs',
    priceValue: 8500000,
    type: 'Apartment',
    badge: 'hot',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,450 sq.ft',
    parking: true,
    facing: 'West Facing',
    floor: '12th Floor',
    age: 'Ready to Move',
    description: 'A stunning 3 BHK apartment in the bustling Baner locality, Royal Crest offers modern living with a touch of elegance. Features include vitrified flooring, modular kitchen, spacious balconies with city views, and access to a state-of-the-art clubhouse. RERA registered and Vastu compliant, this is the ideal investment for young professionals and growing families.',
    amenities: ['Swimming Pool', 'Gym', 'Children Play Area', 'Power Backup', 'CCTV Security', 'Intercom', 'Visitor Parking', 'Multipurpose Hall'],
    images: ['/images/property-3.webp', '/images/property-3-2.webp', '/images/property-3-3.webp']
  },
  {
    id: 'sunrise-plot',
    title: 'Sunrise Premium Plot',
    location: 'Hinjewadi Phase 3, IT Park Road',
    city: 'Pune',
    price: '₹45 Lakhs',
    priceValue: 4500000,
    type: 'Plot',
    badge: null,
    bedrooms: 0,
    bathrooms: 0,
    area: '2,400 sq.ft',
    parking: false,
    facing: 'North Facing',
    floor: 'NA',
    age: 'Ready',
    description: 'Invest in your dream with this premium NA plot in the rapidly developing Hinjewadi Phase 3. Located just 5 minutes from the IT hub, with clear title, approved layout, and all civic amenities. The plot offers excellent connectivity to Mumbai-Pune Expressway and upcoming metro line. Perfect for building your custom dream home or as a high-return investment.',
    amenities: ['Compound Wall', 'Water Connection', 'Electricity', 'Tar Road', 'Street Lights', 'Drainage', 'Garden Area', 'Security Gate'],
    images: ['/images/property-4.webp', '/images/property-4-2.webp', '/images/property-4-3.webp']
  },
  {
    id: 'metro-commercial',
    title: 'Metro Business Hub',
    location: 'SG Highway, Corporate Zone',
    city: 'Ahmedabad',
    price: '₹1.20 Cr',
    priceValue: 12000000,
    type: 'Commercial',
    badge: 'premium',
    bedrooms: 0,
    bathrooms: 2,
    area: '1,800 sq.ft',
    parking: true,
    facing: 'South Facing',
    floor: '5th Floor',
    age: 'Ready to Move',
    description: 'A premium commercial space in the thriving SG Highway business corridor. Metro Business Hub offers a fully furnished office space with modern interiors, high-speed elevator access, 24/7 security, ample visitor parking, and proximity to major business parks. Ideal for startups, consulting firms, and established enterprises looking for a prestigious address.',
    amenities: ['Central AC', 'High-Speed Elevator', 'Conference Room', 'Cafeteria', 'Visitor Parking', '24/7 Security', 'Power Backup', 'Fire Safety'],
    images: ['/images/property-5.webp', '/images/property-5-2.webp', '/images/property-5-3.webp']
  },
  {
    id: 'lakeside-villa',
    title: 'Lakeside Serenity Villa',
    location: 'Jubilee Hills, Lake View Colony',
    city: 'Hyderabad',
    price: '₹3.50 Cr',
    priceValue: 35000000,
    type: 'Villa',
    badge: 'premium',
    bedrooms: 6,
    bathrooms: 6,
    area: '6,800 sq.ft',
    parking: true,
    facing: 'Lake Facing',
    floor: 'G+2',
    age: 'Newly Built',
    description: 'An architectural marvel overlooking the serene Hussain Sagar Lake, Lakeside Serenity Villa redefines ultra-luxury living. This 6 BHK masterpiece features a private infinity pool, landscaped rooftop terrace, home automation system, imported fixtures throughout, a grand double-height living room, and a dedicated staff quarters. The epitome of exclusivity in Hyderabad\'s most prestigious neighborhood.',
    amenities: ['Infinity Pool', 'Home Automation', 'Rooftop Terrace', 'Staff Quarters', 'Wine Cellar', 'Home Theatre', 'Gym', 'Private Garden'],
    images: ['/images/property-6.webp', '/images/property-6-2.webp', '/images/property-6-3.webp']
  },
  {
    id: 'azure-heights',
    title: 'Azure Heights 2BHK',
    location: 'Koregaon Park, Lane 7',
    city: 'Pune',
    price: '₹65 Lakhs',
    priceValue: 6500000,
    type: 'Apartment',
    badge: 'new',
    bedrooms: 2,
    bathrooms: 2,
    area: '1,050 sq.ft',
    parking: true,
    facing: 'East Facing',
    floor: '8th Floor',
    age: 'Ready to Move',
    description: 'A thoughtfully designed 2 BHK apartment in the vibrant Koregaon Park neighborhood. Azure Heights combines modern aesthetics with practical living — featuring an open-plan kitchen, sun-drenched balcony overlooking the tree-lined street, premium vitrified flooring, and a resort-style clubhouse. Ideal for young couples and working professionals who value location and lifestyle.',
    amenities: ['Swimming Pool', 'Gym', 'Clubhouse', 'Power Backup', 'Intercom', 'CCTV Security', 'Jogging Track', 'Children Play Area'],
    images: ['/images/property-7.webp', '/images/property-7-2.webp', '/images/property-7-3.webp']
  },
  {
    id: 'grandeur-tower',
    title: 'Grandeur Tower Penthouse',
    location: 'Worli Sea Face, Lotus Colony',
    city: 'Mumbai',
    price: '₹4.20 Cr',
    priceValue: 42000000,
    type: 'Apartment',
    badge: 'premium',
    bedrooms: 5,
    bathrooms: 5,
    area: '4,100 sq.ft',
    parking: true,
    facing: 'Sea Facing',
    floor: '35th Floor',
    age: 'Under Construction',
    description: 'Perched atop the iconic Grandeur Tower, this 5 BHK penthouse offers unobstructed 270-degree views of the Arabian Sea and Mumbai skyline. Features include a private rooftop deck, imported Calacatta marble, Boffi kitchen, home automation by Crestron, and exclusive access to a sky lounge. A once-in-a-generation opportunity for those who demand nothing but the best.',
    amenities: ['Private Elevator', 'Rooftop Terrace', 'Smart Home', 'Concierge', 'Wine Cellar', 'Gym', 'Swimming Pool', 'EV Charging'],
    images: ['/images/property-8.webp', '/images/property-8-2.webp', '/images/property-8-3.webp']
  },
  {
    id: 'green-meadows-plot',
    title: 'Green Meadows Plot',
    location: 'Sarjapur Road, Brookfield',
    city: 'Bangalore',
    price: '₹38 Lakhs',
    priceValue: 3800000,
    type: 'Plot',
    badge: null,
    bedrooms: 0,
    bathrooms: 0,
    area: '1,800 sq.ft',
    parking: false,
    facing: 'South Facing',
    floor: 'NA',
    age: 'Ready',
    description: 'A premium residential plot in the rapidly appreciating Sarjapur Road corridor, minutes from top IT parks and international schools. Green Meadows offers BMRDA-approved layouts with wide 40-foot roads, underground electricity, rainwater harvesting, and lush green surroundings. An ideal canvas to build your dream villa or a smart investment for exceptional returns.',
    amenities: ['Compound Wall', 'Water Connection', 'Electricity', 'Tar Road', 'Street Lights', 'Drainage', 'Garden Area', 'Security Gate'],
    images: ['/images/property-9.webp', '/images/property-9-2.webp', '/images/property-9-3.webp']
  },
  {
    id: 'pearl-residency',
    title: 'Pearl Residency 3BHK',
    location: 'Gachibowli, Financial District',
    city: 'Hyderabad',
    price: '₹92 Lakhs',
    priceValue: 9200000,
    type: 'Apartment',
    badge: 'hot',
    bedrooms: 3,
    bathrooms: 3,
    area: '1,680 sq.ft',
    parking: true,
    facing: 'North Facing',
    floor: '15th Floor',
    age: 'Ready to Move',
    description: 'Located in Hyderabad\'s thriving Financial District, Pearl Residency offers spacious 3 BHK apartments with panoramic city views. The residence features Italian marble flooring, a modular kitchen with chimney and hob, large balconies on two sides, and access to a world-class sports arena. Walking distance to top MNCs and international schools — the perfect urban family home.',
    amenities: ['Swimming Pool', 'Gym', 'Multipurpose Hall', 'Children Play Area', 'Power Backup', 'CCTV Security', 'Visitor Parking', 'Jogging Track'],
    images: ['/images/property-10.webp', '/images/property-10-2.webp', '/images/property-10-3.webp']
  },
  {
    id: 'civic-square',
    title: 'Civic Square Showroom',
    location: 'CG Road, Navrangpura',
    city: 'Ahmedabad',
    price: '₹75 Lakhs',
    priceValue: 7500000,
    type: 'Commercial',
    badge: 'hot',
    bedrooms: 0,
    bathrooms: 1,
    area: '900 sq.ft',
    parking: true,
    facing: 'West Facing',
    floor: 'Ground Floor',
    age: 'Ready to Move',
    description: 'A prime ground-floor commercial showroom on the bustling CG Road — Ahmedabad\'s most prominent retail corridor. Civic Square offers 25-foot frontage, high visibility, dedicated parking, premium glass facade, and heavy footfall from surrounding offices and residential towers. Perfect for retail brands, showrooms, clinics, or banking outlets.',
    amenities: ['Central AC', 'High-Speed Elevator', 'Visitor Parking', '24/7 Security', 'Power Backup', 'Fire Safety', 'CCTV Security', 'Water Connection'],
    images: ['/images/property-11.webp', '/images/property-11-2.webp', '/images/property-11-3.webp']
  },
  {
    id: 'hillcrest-villa',
    title: 'Hillcrest Valley Villa',
    location: 'Khandala, Lonavala Road',
    city: 'Pune',
    price: '₹1.45 Cr',
    priceValue: 14500000,
    type: 'Villa',
    badge: 'new',
    bedrooms: 4,
    bathrooms: 4,
    area: '3,800 sq.ft',
    parking: true,
    facing: 'Valley Facing',
    floor: 'G+1',
    age: 'Newly Built',
    description: 'Escape to your private hill retreat at Hillcrest Valley Villa. Nestled in the lush Western Ghats near Lonavala, this 4 BHK villa features floor-to-ceiling windows with misty valley views, a wraparound wooden deck, heated plunge pool, fireplace lounge, and fully landscaped gardens. Ideal as a weekend getaway home or a permanent residence away from the city buzz.',
    amenities: ['Private Garden', 'Home Theatre', 'Modular Kitchen', 'Rainwater Harvest', 'Solar Panels', 'Security', 'Infinity Pool', 'Rooftop Terrace'],
    images: ['/images/property-12.webp', '/images/property-12-2.webp', '/images/property-12-3.webp']
  },
  {
    id: 'boulevard-apartment',
    title: 'The Boulevard 1BHK',
    location: 'Electronic City, Phase 1',
    city: 'Bangalore',
    price: '₹35 Lakhs',
    priceValue: 3500000,
    type: 'Apartment',
    badge: null,
    bedrooms: 1,
    bathrooms: 1,
    area: '650 sq.ft',
    parking: true,
    facing: 'West Facing',
    floor: '4th Floor',
    age: 'Ready to Move',
    description: 'An affordable yet stylish 1 BHK apartment in the heart of Electronic City. The Boulevard is perfect for IT professionals and first-time homebuyers — featuring a compact modular kitchen, spacious bedroom with wardrobe, covered balcony, and access to a fully-equipped gym and rooftop party area. Excellent rental potential with 4%+ yield.',
    amenities: ['Gym', 'Power Backup', 'CCTV Security', 'Intercom', 'Children Play Area', 'Visitor Parking', 'Clubhouse', 'Jogging Track'],
    images: ['/images/property-13.webp', '/images/property-13-2.webp', '/images/property-13-3.webp']
  },
  {
    id: 'marina-commercial',
    title: 'Marina Trade Center',
    location: 'Andheri East, MIDC',
    city: 'Mumbai',
    price: '₹2.10 Cr',
    priceValue: 21000000,
    type: 'Commercial',
    badge: 'premium',
    bedrooms: 0,
    bathrooms: 3,
    area: '2,500 sq.ft',
    parking: true,
    facing: 'North Facing',
    floor: '10th Floor',
    age: 'Ready to Move',
    description: 'A Grade-A commercial office space in Mumbai\'s thriving Andheri East business hub. Marina Trade Center offers a fully fitted floor plate with modular workstations for 40+ employees, 2 conference rooms, a pantry, server room, and panoramic views of the city. Direct metro connectivity and proximity to the international airport make it the ideal corporate headquarters.',
    amenities: ['Central AC', 'High-Speed Elevator', 'Conference Room', 'Cafeteria', 'Visitor Parking', '24/7 Security', 'Power Backup', 'Fire Safety'],
    images: ['/images/property-14.webp', '/images/property-14-2.webp', '/images/property-14-3.webp']
  }
];

/* ---------- Testimonials Data ---------- */
export interface Testimonial {
  id: number;
  name: string;
  property: string;
  rating: number;
  review: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh & Priya Sharma',
    property: 'Purchased 3 BHK in Baner',
    rating: 5,
    review: 'Luxe Estates made our dream home a reality. From the first consultation to the final handover, the experience was seamless. Their team guided us through every step — financing, legal checks, and registration. Truly world-class service!',
    image: '/images/client-1.webp'
  },
  {
    id: 2,
    name: 'Anita Deshmukh',
    property: 'Invested in Commercial Space',
    rating: 5,
    review: 'As a first-time investor, I was nervous about commercial real estate. The team at Luxe Estates provided expert guidance and helped me find a property with excellent ROI potential. Their market knowledge is unmatched.',
    image: '/images/client-2.webp'
  },
  {
    id: 3,
    name: 'Vikram & Sneha Patel',
    property: 'Purchased Villa in Whitefield',
    rating: 5,
    review: 'We searched for months before finding Luxe Estates. They understood exactly what we wanted and showed us properties that matched our vision perfectly. The villa we bought exceeded our expectations. Highly recommended!',
    image: '/images/client-3.webp'
  }
];

/* ---------- Stats Data ---------- */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Properties Sold' },
  { value: 12, suffix: '+', label: 'Years Experience' },
  { value: 200, suffix: '+', label: 'Happy Families' },
  { value: 500, suffix: 'Cr+', label: 'Worth Transacted' }
];

/* ---------- Why Choose Us Data ---------- */
export interface USP {
  icon: string;
  title: string;
  description: string;
}

export const usps: USP[] = [
  {
    icon: '🏆',
    title: 'Trusted by 500+ Families',
    description: 'Over a decade of building trust with homebuyers across India. Our track record speaks for itself.'
  },
  {
    icon: '📋',
    title: 'RERA Verified Properties',
    description: 'Every property we list is RERA registered and legally verified. Complete transparency, zero risk.'
  },
  {
    icon: '💰',
    title: 'Best Price Guarantee',
    description: 'We negotiate the best deals directly with builders. Get premium properties at unbeatable prices.'
  },
  {
    icon: '🤝',
    title: 'End-to-End Support',
    description: 'From property search to loan assistance, legal documentation, and registration — we handle everything.'
  }
];

/* ---------- Categories Data ---------- */
export interface Category {
  title: string;
  count: number;
  image: string;
  type: Property['type'];
}

export const categories: Category[] = [
  { title: 'Apartments', count: 120, image: '/images/cat-apartment.webp', type: 'Apartment' },
  { title: 'Villas & Houses', count: 85, image: '/images/cat-villa.webp', type: 'Villa' },
  { title: 'Plots & Land', count: 60, image: '/images/cat-plot.webp', type: 'Plot' },
  { title: 'Commercial', count: 45, image: '/images/cat-commercial.webp', type: 'Commercial' }
];
