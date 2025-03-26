import { Event, Sponsor, ContactInfo, FooterData, EventType } from '@/types';

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

export const eventsData: EventType[] = [
  {
    "event_name": "Robowars",
    "desc": "Robowars is the ultimate clash of innovation and power, where custom-built robots battle it out in an electrifying arena. Watch as metal giants collide, sparks fly, and only the strongest bot survives. Gear up for adrenaline-pumping action and cutting-edge engineering at its fiercest!",
    "prize_pool": [
      { "position": "3 lbs - 1st Place", "amount": 18000 },
      { "position": "3 lbs - 2nd Place", "amount": 12000 },
      { "position": "8 kg - 1st Place", "amount": 40000 },
      { "position": "8 kg - 2nd Place", "amount": 30000 },
      { "position": "15 kg - 1st Place", "amount": 60000 },
      { "position": "15 kg - 2nd Place", "amount": 40000 }
    ],
    "link": "https://forms.gle/pguTfmf2JsjrdZqo8",
    "image_src": "/images/robowars.webp"
  },
  {
    "event_name": "Robo Sumo (ROBO GLADIUS)",
    "desc": "ROBO GLADIUS is a point-based robotic battle with two 1-minute rounds. Teams strategically maneuver their bots to score points, and a 30-second tie-breaker decides tied matches.",
    "prize_pool": [
      { "position": "1st Place", "amount": 20000 },
      { "position": "2nd Place", "amount": 10000 }
    ],
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSfYdkxLMwL-jiW6SLlgxY3tlSDUsKtgVIUAKy09CtXUWZu8ew/viewform?usp=header",
    "image_src": "/images/robosumo.webp"
  },
  {
    "event_name": "Cyber Spartacus - Robosoccer",
    "desc": "Enter the battlefield of Cyber Spartacus, where robotic gladiators clash in an intense game of Robo Soccer. Assemble your team, strategize and compete for glory in this ultimate test of skill, speed, and precision.",
    "prize_pool": [
      { "position": "1st Place", "amount": 10000 },
      { "position": "2nd Place", "amount": 6000 }
    ],
    "link": "https://tally.so/r/nG5N7z",
    "image_src": "/images/robosoccer.webp"
  },
  {
    "event_name": "ROBORACE 2025 - QUADRIGA Track Awaits!",
    "desc": "Step into the chariot, grip the reins, and race not just against men, but against Bots!⚡ Join us for an electrifying Gladiator-Themed Robo Event, where bots clash, speed fails, and only the fastest maneuvering survives!",
    "prize_pool": [
      { "position": "1st Place", "amount": 10000 },
      { "position": "2nd Place", "amount": 5000 }
    ],
    "link": "https://forms.gle/sviYkF7YVcv7tMwLA",
    "image_src": "/images/roborace.webp"
  },
  {
    "event_name": "Gladiator's Trail (LFR)",
    "desc": "Gladiator’s Trail (LFR) is a Line Follower Robot competition where bots race through a challenging track, testing speed, precision, and control.",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://forms.gle/XsvG9phGSzTphdwC7",
    "image_src": "/images/lfr.webp"
  },
  {
    "event_name": "ROBOMAZE 2025 - LABYRINTH Awaits!",
    "desc": "Ancient chambers and passages await you! 🤖 Make your way through them in an electrifying Gladiator-Themed Robo Event, where bots are triggered, paths remain unsolved, and only the fastest make it!",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://forms.gle/e7dmTscHtbeuUYjk9",
    "image_src": "/images/robomaze.webp"
  },
  {
    "event_name": "Techyothon - Techurja’s 24-Hour Hackathon",
    "desc": "Step into the Colosseum of Code and battle it out in an electrifying 24-hour coding marathon! No sleep, pure adrenaline, and ultimate tech glory await you.",
    "prize_pool": [
      { "position": "1st Place", "amount": 10000 },
      { "position": "2nd Place", "amount": 7000 },
      { "position": "3rd Place", "amount": 3000 }
    ],
    "link": "https://lu.ma/dfhu86dm",
    "image_src": "/images/techyothon.webp"
  },
  {
    "event_name": "Codus Maximus - Coding Challenge",
    "desc": "Step into the arena where your code becomes your weapon, and your victory is all about wit and resilience. This high-stakes coding competition challenges your problem-solving skills, speed, and creativity in a series of intense programming duels. Whether you're here to showcase your expertise or just have some fun pushing your boundaries, this is your chance to prove you're the champion coder. Wield your programming skills like a gladiator's sword, conquer the code, vanquish the challenge and don the laurel of triumph.",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://tally.so/r/mev1PQ",
    "image_src": "/images/coding.webp"
  },
  {
    "event_name": "Arena of Aegis - CTF Challenge",
    "desc": "Step into the Arena of Aegis—a thrilling CTF challenge where your hacking skills are put to the ultimate test. Tackle a series of digital puzzles across cryptography, web exploitation, reverse engineering, and forensics. Compete against top teams in a fast-paced, 3-hour showdown that demands sharp problem-solving, technical expertise, and quick thinking. Uncover hidden flags and claim your place at the top!",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://tally.so/r/mDMrEl",
    "image_src": "/images/ctf.webp"
  },
  {
    "event_name": "Battle of Centurions (Valorant)",
    "desc": "The 'Battle of Centurions' is a Valorant esports tournament featuring competitive teams showcasing their skills. It involves multiple stages, including qualifiers, playoffs, and a grand finale. The event is a platform for emerging and professional players to compete at a high level, gaining recognition in the gaming community.",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSdBih2ixx2NZqXKw3sl-V_1PLz_QvLZbqBWubaEPu_u8caheA/viewform?usp=sf_link",
    "image_src": "/images/valorant.webp"
  },
  {
    "event_name": "CAD (Arena of Innovation)",
    "desc": "Participants are required to create an accurate, well-structured 3D model in SolidWorks based on a problem statement provided by the organizers. After completing the model, each participant must present their design approach and explain the features used to the judging panel.",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSdlzVkU8hVanBpo6nbs0I44R2bNTyaFWnsSZxcDgYFf7IAzqQ/viewform?usp=header",
    "image_src": "/images/cad.webp"
  },
  {
    "event_name": "Bridge Construction Competition (Pillar of Valor)",
    "desc": "Participants must design and construct a bridge using the given materials, aiming for maximum strength, efficiency, and stability while adhering to the design constraints. The bridge will be tested under load conditions.",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSfrG4SqCDaXM54raixfw6v0w5QNcBgNfpkhqTvlLgA1oGvKDw/viewform?usp=header",
    "image_src": "/images/bridge.webp"
  },
  {
    "event_name": "FIFA (The Gladiator Cup)",
    "desc": "Prepare for an electrifying showdown in our knockout-style FIFA tournament, exclusively on PS4! Two players will battle for ultimate glory and a chance to claim a share of the ₹10,000 prize pool.",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSfDUoEHpnD0whCC8qKcRQCuWszu3x3cpcWUuDxrIcDidMyevA/viewform?usp=header",
    "image_src": "/images/fifa.webp"
  },
  {
    "event_name": "PITCH GLADIATOR (Virtual Cricket)",
    "desc": "Experience the thrill of cricket in a virtual showdown! Compete in a single-player knockout format with 5-over matches and stand a chance to win exciting prizes. Show off your cricketing skills and claim the title of champion!",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSdXVkcvqhotDl7Dya2jT5DfbEkvjcY4rzlcSKO36_AK183SKw/viewform?usp=dialog",
    "image_src": "/images/cricket.webp"
  },
  {
    "event_name": "INVENTOR'S GAUNTLET (Project Exhibition)",
    "desc": "A project exhibition where young minds gather to showcase their imagination, innovation, and brilliance by providing solutions to our daily life problems.",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://forms.gle/3j7h4cT5HamZDgms9",
    "image_src": "/images/projectexpo.webp"
  },
  {
    "event_name": "CIRCUIT COLOSSEUM (Circuit Debugging)",
    "desc": "A 3-round competition testing circuit design and problem-solving skills. Participants will face a Kahoot quiz, digital circuit challenges, and a live circuit-building round. Teams are judged on accuracy, creativity, and technical expertise.",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSeAz48dvWdFrk4IGi20_OcRt6R8PcVQS1uBTazkXobA-54mYw/viewform?usp=dialog",
    "image_src": "/images/circuit.webp"
  },
  {
    "event_name": "BATTLE OF TITANS (BGMI)",
    "desc": "Join the ultimate BGMI Tournament! Battle for glory, showcase skills, and win big in action-packed matches. 🏆",
    "prize_pool": [
      { "position": "1st Place", "amount": 8000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://forms.gle/w3hPJbxRsHjahYPS9",
    "image_src": "/images/bgmi.webp"
  },
  {
    "event_name": "STRATOVATE: Business Buzz",
    "desc": "Get ready to enter the arena and prove your mettle in the ultimate battle of wits! 'Gladiator's Quest' is a thrilling competition that puts your cognitive skills to the test. The challenge begins with a quiz that separates the champions from the contenders. Next, contestants must unleash their creativity in a logo-solving round, where they'll decipher the hidden meanings behind iconic brand logos. But that's not all - our gladiators must also demonstrate their industry expertise by binding two seemingly disparate industries together, showcasing their innovative thinking and problem-solving prowess. Finally, the last warriors standing will face off in a case presentation showdown, where they'll present their solutions to a real-world business challenge. Will you emerge victorious and claim the title of ultimate Gladiator?",
    "prize_pool": [
      { "position": "1st Place", "amount": 6000 },
      { "position": "2nd Place", "amount": 4000 }
    ],
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSf18jRNYVax1Ns93aBko8OhdlFZCLm58Z7s4U9hcrmav5pdGQ/viewform?usp=sharing",
    "image_src": "/images/bizbuzz.webp"
  },
  {
    "event_name": "TechLegion - Lead Like a Warrior, Conquer Like a Gladiator!",
    "desc": "In the grand arena of intellect and strategy, where only the strongest rise, TechLegion stands as the ultimate test of resilience, wit, and leadership. Across two intense days, contenders will battle through multiple rounds, each designed to challenge their decision-making, innovation, and ability to lead in the ever-evolving world of technology. Like gladiators in the Colosseum, participants must outthink, outmaneuver, and outlast their rivals to prove themselves the true champion. In this clash of minds, only the best of the rest will claim victory and emerge as the undisputed TechLegionnaire. Are you ready for the ultimate test of leadership?",
    "prize_pool": [
      { "position": "Winners", "amount": 5000 },
      { "position": "Runners-up", "amount": 3000 }
    ],
    "link": "https://surveyheart.com/form/67de568881919c2dfeaa967a",
    "image_src": "/images/techlegion.webp"
  }
]




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
    twitter: 'https://x.com/AitdGoa',
    facebook: 'https://www.facebook.com/AITDGOA/',
    instagram: 'https://www.instagram.com/studentscouncil.aitd/',
    linkedin: 'https://www.linkedin.com/school/aitdgoa/',
    youtube: 'https://www.youtube.com/channel/UCuH3I8Qyq6zgXvJ7y0g6yJw'
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

