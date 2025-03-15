import { Event, Sponsor, ContactInfo, FooterData } from '@/types';

export const events: Event[] = [
  {
    id: 'code-colosseum',
    title: 'Code Colosseum',
    description: 'A battle of algorithms and logic where gladiators solve complex problems against the clock.',
    date: 'May 15, 2025',
    time: '10:00 AM - 5:00 PM',
    detailedDescription: 'Compete in timed coding challenges that test your problem-solving skills, algorithm design, and efficiency. Three rounds of increasing difficulty will determine who deserves the laurel wreath.',
    prizePool: '₹50,000',
    teamSize: 'Individual',
    difficulty: 3,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hack-spartacus',
    title: 'Hack Spartacus',
    description: 'A 24-hour hackathon where teams build innovative solutions to real-world challenges.',
    date: 'May 16-17, 2025',
    time: 'Starts 10:00 AM',
    detailedDescription: 'Form a cohort of warriors and face the ultimate challenge. Create innovative solutions to industry-specific problems in this day-long battle of creativity and technical expertise.',
    prizePool: '₹100,000',
    teamSize: '2-4 Members',
    difficulty: 4,
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'design-duel',
    title: 'Design Duel',
    description: 'Showcase your UI/UX prowess by creating elegant, intuitive, and stunning interfaces.',
    date: 'May 15, 2025',
    time: '2:00 PM - 8:00 PM',
    detailedDescription: 'Demonstrate your artistic vision and user-centric thinking by designing interfaces that captivate and engage. Present your work to a panel of industry veterans who will crown the design champion.',
    prizePool: '₹30,000',
    teamSize: 'Individual or Pair',
    difficulty: 2,
    image: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cyber-gladiators',
    title: 'Cyber Gladiators',
    description: 'Test your defensive and offensive cybersecurity skills in this intense CTF competition.',
    date: 'May 17, 2025',
    time: '9:00 AM - 6:00 PM',
    detailedDescription: 'Breach defenses, capture flags, and secure your systems in this thrilling battle of cyber warriors. Navigate through increasingly difficult challenges that will test your hacking and defense capabilities.',
    prizePool: '₹80,000',
    teamSize: '2-3 Members',
    difficulty: 5,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ai-arena',
    title: 'AI Arena',
    description: 'Develop intelligent algorithms that can learn, adapt, and outwit opponents in various challenges.',
    date: 'May 16, 2025',
    time: '11:00 AM - 7:00 PM',
    detailedDescription: 'Create machine learning models to solve specific problems or compete in head-to-head AI competitions. Your creations will face off in strategy games, prediction challenges, and optimization tasks.',
    prizePool: '₹60,000',
    teamSize: '1-2 Members',
    difficulty: 4,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'robotic-warfare',
    title: 'Robotic Warfare',
    description: 'Design, build, and program robots to navigate obstacles and complete missions.',
    date: 'May 15-17, 2025',
    time: 'Daily Events',
    detailedDescription: 'Bring your mechanical gladiators to compete in arena battles, obstacle courses, and precision challenges. Your creation must demonstrate speed, agility, and tactical prowess.',
    prizePool: '₹120,000',
    teamSize: '3-5 Members',
    difficulty: 5,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const sponsors: Sponsor[] = [
  // Platinum Sponsors
  {
    id: 'acme',
    name: 'ACME Technologies',
    abbreviation: 'ACME',
    tier: 'platinum',
    website: 'https://example.com/acme'
  },
  {
    id: 'apex',
    name: 'Apex Digital',
    abbreviation: 'APEX',
    tier: 'platinum',
    website: 'https://example.com/apex'
  },
  {
    id: 'nova',
    name: 'Nova Systems',
    abbreviation: 'NOVA',
    tier: 'platinum',
    website: 'https://example.com/nova'
  },

  // Gold Sponsors
  {
    id: 'techlabs',
    name: 'Tech Labs',
    abbreviation: 'TL',
    tier: 'gold',
    website: 'https://example.com/techlabs'
  },
  {
    id: 'datasphere',
    name: 'Data Sphere',
    abbreviation: 'DS',
    tier: 'gold',
    website: 'https://example.com/datasphere'
  },
  {
    id: 'codex',
    name: 'CodeX',
    abbreviation: 'CX',
    tier: 'gold',
    website: 'https://example.com/codex'
  },
  {
    id: 'quantum',
    name: 'Quantum',
    abbreviation: 'QM',
    tier: 'gold',
    website: 'https://example.com/quantum'
  },

  // Silver Sponsors
  {
    id: 'alphaone',
    name: 'Alpha One',
    abbreviation: 'A1',
    tier: 'silver',
    website: 'https://example.com/alphaone'
  },
  {
    id: 'bytetech',
    name: 'ByteTech',
    abbreviation: 'BT',
    tier: 'silver',
    website: 'https://example.com/bytetech'
  },
  {
    id: 'pixelate',
    name: 'Pixelate',
    abbreviation: 'PX',
    tier: 'silver',
    website: 'https://example.com/pixelate'
  },
  {
    id: 'nexus',
    name: 'Nexus',
    abbreviation: 'NX',
    tier: 'silver',
    website: 'https://example.com/nexus'
  },
  {
    id: 'vortextech',
    name: 'VortexTech',
    abbreviation: 'VT',
    tier: 'silver',
    website: 'https://example.com/vortextech'
  },
  {
    id: 'stellarlabs',
    name: 'StellarLabs',
    abbreviation: 'SL',
    tier: 'silver',
    website: 'https://example.com/stellarlabs'
  }
];

export const contactInfo: ContactInfo = {
  email: 'contact@techurja2025.com',
  phone: '+91 9876543210',
  venue: {
    name: 'Agnel Technical Educational Complex',
    address: 'Assagao',
    city: 'Goa, India',
    postalCode: '403507'
  },
  social: {
    twitter: 'https://twitter.com/techurja2025',
    facebook: 'https://facebook.com/techurja2025',
    instagram: 'https://instagram.com/techurja2025',
    linkedin: 'https://linkedin.com/company/techurja2025'
  }
};

export const footerData: FooterData = {
  location: {
    name: 'Agnel Technical Educational Complex',
    address: 'Assagao',
    city: 'Goa, India',
    postalCode: '403507',
    mapUrl: 'https://maps.google.com/?q=Agnel+Technical+Educational+Complex+Assagao+Goa+403507'
  },
  sections: [
    {
      title: 'Events',
      links: [
        { title: 'Code Colosseum', url: '/events/code-colosseum' },
        { title: 'Hack Spartacus', url: '/events/hack-spartacus' },
        { title: 'Design Duel', url: '/events/design-duel' },
        { title: 'Cyber Gladiators', url: '/events/cyber-gladiators' },
        { title: 'AI Arena', url: '/events/ai-arena' },
        { title: 'Robotic Warfare', url: '/events/robotic-warfare' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { title: 'Event Guidelines', url: '/resources/guidelines' },
        { title: 'FAQs', url: '/resources/faqs' }
      ]
    }
  ],
  legalLinks: [
    { title: 'Terms & Conditions', url: '/legal/terms' }
  ],
  copyright: '© 2025 TECHURJA. All rights reserved.'
};
