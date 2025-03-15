import { Separator } from "@/components/ui/separator";

const GuidelinesPage = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-cinzel text-4xl md:text-5xl text-[#C0A080] mb-8 tracking-wider">Event Guidelines</h1>
        <Separator className="bg-[#C0A080]/20 mb-8" />
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-white/70 mb-6">
            Welcome to TECHURJA 2025! To ensure a fair and enjoyable experience for all participants, 
            please review the following guidelines for all events.
          </p>
          
          <h2 className="font-cinzel text-3xl text-[#C0A080] mt-10 mb-4">General Rules</h2>
          <ul className="space-y-3 text-white/70">
            <li>All participants must register before the deadline specified for each event.</li>
            <li>Valid college/university ID is required for participation.</li>
            <li>Decisions made by the judges are final and cannot be contested.</li>
            <li>Participants found engaging in any form of malpractice will be immediately disqualified.</li>
            <li>All submissions must be original work. Plagiarism will result in disqualification.</li>
            <li>Participants must adhere to the theme announced for each event.</li>
            <li>Participants must respect the venue and equipment provided.</li>
          </ul>
          
          <h2 className="font-cinzel text-3xl text-[#C0A080] mt-10 mb-4">Code of Conduct</h2>
          <p className="text-white/70 mb-4">
            All participants are expected to maintain a professional and respectful demeanor throughout the event.
          </p>
          <ul className="space-y-3 text-white/70">
            <li>Treat all participants, organizers, and volunteers with respect and courtesy.</li>
            <li>Avoid any form of harassment, discrimination, or offensive behavior.</li>
            <li>Respect the intellectual property of others.</li>
            <li>Collaborate and network positively with fellow participants.</li>
            <li>Follow all safety protocols and instructions provided by the organizers.</li>
          </ul>
          
          <h2 className="font-cinzel text-3xl text-[#C0A080] mt-10 mb-4">Event-Specific Guidelines</h2>
          <p className="text-white/70 mb-4">
            Each event has its own specific rules and regulations. Please refer to the respective event pages 
            for detailed guidelines.
          </p>
          
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#C0A080]/20 mt-8">
            <h3 className="font-cinzel text-xl text-[#C0A080] mb-4">Need Further Clarification?</h3>
            <p className="text-white/70 mb-4">
              If you have any questions or need further clarification regarding the event guidelines, 
              please don't hesitate to contact us.
            </p>
            <a 
              href="mailto:contact@techurja2025.com" 
              className="inline-flex items-center bg-[#8B0000] hover:bg-[#9C1A1A] text-white py-2 px-4 rounded transition-colors duration-300"
            >
              Contact the Organizers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesPage;