export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  detailedDescription: string;
  prizePool: string;
  teamSize: string;
  difficulty: number;
  image: string;
}

export interface Sponsor {
  id: string;
  name: string;
  abbreviation: string;
  tier: 'platinum' | 'gold' | 'silver';
  website: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  venue: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
  };
  social: {
    twitter: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}
