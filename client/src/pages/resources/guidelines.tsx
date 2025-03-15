import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const GuidelinesPage = () => {
  const guidelines = [
    {
      id: 'general',
      title: 'General Participation Guidelines',
      items: [
        'All participants must register through the official TECHURJA website before the deadline.',
        'Participants must carry a valid college/university ID at all times during the event.',
        'The decisions of judges and organizers are final and binding in all cases.',
        'Any form of malpractice or unfair means will result in immediate disqualification.',
        'Participants are responsible for bringing their own laptops, chargers, and any other required equipment unless specified otherwise.',
        'Teams must adhere to the specified team size limits for each event.',
        'Submission deadlines are strict; late submissions will not be accepted.',
        'TECHURJA reserves the right to modify event rules and guidelines if necessary.'
      ]
    },
    {
      id: 'code-colosseum',
      title: 'Code Colosseum Guidelines',
      items: [
        'Individual competition with three rounds of increasing difficulty.',
        'Participants must solve algorithmic problems within the time limit.',
        'Solutions must be submitted in one of the supported languages: C++, Java, Python, or JavaScript.',
        'Internet access will be restricted during the competition.',
        'Use of any external libraries not provided in the competition environment is prohibited.',
        'Participants will be ranked based on the number of problems solved and the time taken.',
        'In case of a tie, the participant who solved the problems faster will be ranked higher.'
      ]
    },
    {
      id: 'hack-spartacus',
      title: 'Hack Spartacus Guidelines',
      items: [
        'Teams of 2-4 members must work together to build a working prototype within 24 hours.',
        'Themes and problem statements will be announced at the start of the hackathon.',
        'Pre-built templates or frameworks are allowed, but all code used must be written during the event period.',
        'Regular updates and commits to the provided repository are required.',
        'Teams must demonstrate a working prototype at the end of the hackathon.',
        'Evaluation criteria include innovation, technical complexity, user experience, and presentation.',
        'Teams are responsible for their own hardware; power outlets and internet will be provided.'
      ]
    },
    {
      id: 'design-duel',
      title: 'Design Duel Guidelines',
      items: [
        'Participants can compete individually or in pairs.',
        'Design challenges will focus on UI/UX for web or mobile interfaces.',
        'Designs must be created using standard design tools such as Figma, Adobe XD, or Sketch.',
        'Participants must present their designs and explain their design decisions to the judges.',
        'Designs will be evaluated on aesthetics, usability, accessibility, and adherence to design principles.',
        'All designs submitted must be original work; use of templates is prohibited.',
        'Participants must bring their own design tools and licenses.'
      ]
    },
    {
      id: 'cyber-gladiators',
      title: 'Cyber Gladiators Guidelines',
      items: [
        'Teams of 2-3 members will compete in a Capture The Flag (CTF) format.',
        'Challenges will cover various cybersecurity domains including web security, cryptography, reverse engineering, and forensics.',
        'Teams must document their approach for each challenge solved.',
        'Attacking the competition infrastructure or other teams is strictly prohibited and will result in disqualification.',
        'Use of automated tools must be cleared with the organizers before use.',
        'Teams will be ranked based on the number of flags captured and the time taken.',
        'Virtual machines and necessary tools will be provided; teams may bring additional tools with prior approval.'
      ]
    },
    {
      id: 'ai-arena',
      title: 'AI Arena Guidelines',
      items: [
        'Participants can compete individually or in pairs.',
        'Competitions will involve developing machine learning models for specific tasks.',
        'Participants must use the provided datasets for training and testing.',
        'Models will be evaluated on accuracy, efficiency, and innovation.',
        'Use of pre-trained models is allowed, but must be disclosed and properly attributed.',
        'Participants must document their approach, including data preprocessing, model architecture, and optimization techniques.',
        'Final models must be submitted in the specified format for evaluation.'
      ]
    },
    {
      id: 'robotic-warfare',
      title: 'Robotic Warfare Guidelines',
      items: [
        'Teams of 3-5 members must design, build, and program robots to compete in various challenges.',
        'Robots must comply with size, weight, and power limitations as specified in the detailed rules.',
        'All robots must be built and programmed during the event; pre-built robots are not allowed.',
        'Basic components and tools will be provided; teams may bring additional components with prior approval.',
        'Robots will be evaluated on design, functionality, innovation, and performance in challenges.',
        'Safety is paramount; robots deemed unsafe will be disqualified.',
        'Technical documentation and presentations are required as part of the submission.'
      ]
    }
  ];

  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-cinzel text-4xl md:text-5xl text-[#C0A080] mb-8 tracking-wider">Event Guidelines</h1>
        <Separator className="bg-[#C0A080]/20 mb-8" />
        
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="text-white/70">
            Welcome to TECHURJA 2025. To ensure a fair and enjoyable experience for all participants, please adhere to the following guidelines for each event. These rules are designed to maintain the integrity of the competition and provide a level playing field for all contestants.
          </p>
        </div>
        
        <div className="space-y-10">
          {guidelines.map((section) => (
            <Card key={section.id} className="bg-[#1A1A1A] border border-[#C0A080]/20 p-6 rounded-lg shadow-[0_0_20px_rgba(192,160,128,0.05)]">
              <h2 className="font-cinzel text-2xl text-[#C0A080] mb-4">{section.title}</h2>
              <Separator className="bg-[#C0A080]/20 mb-4" />
              <ul className="list-disc list-inside space-y-2">
                {section.items.map((item, index) => (
                  <li key={index} className="text-white/70">{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        
        <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#C0A080]/20 mt-12">
          <h3 className="font-cinzel text-xl text-[#C0A080] mb-4">Additional Information</h3>
          <p className="text-white/70 mb-4">
            For any specific queries related to event guidelines, please contact the respective event coordinators or reach out to us at <a href="mailto:guidelines@techurja2025.com" className="text-[#C0A080]">guidelines@techurja2025.com</a>.
          </p>
          <p className="text-white/70">
            All participants are also expected to adhere to the <a href="/legal/code-of-conduct" className="text-[#C0A080]">TECHURJA Code of Conduct</a> throughout the duration of the event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPage;