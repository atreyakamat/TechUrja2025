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

export interface EventType {
  event_name: string;
  desc: string;
  prize_pool: {
    position: string;
    amount: number;
  }[];
  link: string;
  image_src:string;
  rulebook:string;
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

export interface FooterLink {
  title: string;
  url: string;
  isExternal?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  location: {
    name: string;
    address: string;
    city: string;
    postalCode: string;
    mapUrl?: string;
  };
  sections: FooterSection[];
  legalLinks: FooterLink[];
  copyright: string;
}
