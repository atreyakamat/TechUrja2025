import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQsPage = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-cinzel text-4xl md:text-5xl text-[#C0A080] mb-8 tracking-wider">Frequently Asked Questions</h1>
        <Separator className="bg-[#C0A080]/20 mb-8" />
        
        <div className="prose prose-invert prose-lg max-w-none mb-12">
          <p className="text-white/70 mb-6">
            Find answers to the most common questions about TECHURJA 2025. If you can't find the answer you're looking for, feel free to contact us.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              What is TECHURJA?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              TECHURJA is an annual technical festival that combines the spirit of ancient gladiatorial contests with modern technology challenges. It features coding competitions, hackathons, design challenges, cybersecurity contests, AI battles, and robotic warfare events.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              Who can participate in TECHURJA?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              TECHURJA is open to all college and university students. Some events may have specific eligibility criteria based on skill level or academic background, which will be specified in the event details.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              How do I register for TECHURJA events?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              Registration for TECHURJA events can be done through our website. Navigate to the specific event you're interested in and follow the registration instructions. Make sure to register before the deadline as late registrations are not accepted.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              Is there a registration fee?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              Registration fees vary for different events. Some events may be free to participate, while others may have a nominal fee. All registration fees are non-refundable. Check the specific event details for fee information.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              What should I bring to the event?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              For all events, you must bring a valid college/university ID. For technical events, bring your own laptop with necessary software pre-installed. For hardware-based events like Robotic Warfare, bring the specified components. Detailed requirements will be provided after registration.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              Where is TECHURJA held?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              TECHURJA 2025 will be held at the Agnel Technical Educational Complex, Assagao, Goa, India. The venue is easily accessible by public transport and has ample parking space.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              Are accommodations provided for participants?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              TECHURJA does not provide accommodations directly, but we have partnered with nearby hotels and hostels that offer discounted rates for participants. Information on accommodation options will be shared with registered participants.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-8" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              What are the prizes for winning events?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              Each event has its own prize pool as mentioned in the event details. Prizes may include cash awards, tech gadgets, internship opportunities, and more. Certificates of participation will be provided to all participants.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-9" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              How can I contact the organizers?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              You can contact the TECHURJA organizing team via email at contact@techurja2025.com or by phone at +91 9876543210. Our team is available to answer your queries from 9:00 AM to 6:00 PM IST.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-10" className="border-[#C0A080]/20 px-6 py-2 rounded-md bg-[#1A1A1A]">
            <AccordionTrigger className="text-white font-medium text-lg hover:text-[#C0A080] py-4">
              Can I volunteer for TECHURJA?
            </AccordionTrigger>
            <AccordionContent className="text-white/70 pt-2 pb-4">
              Yes, we welcome volunteers to help make TECHURJA a success. If you're interested in volunteering, please fill out the volunteer form on our website or contact us directly at volunteers@techurja2025.com.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#C0A080]/20 mt-12">
          <h3 className="font-cinzel text-xl text-[#C0A080] mb-4">Still have questions?</h3>
          <p className="text-white/70 mb-4">
            If you couldn't find the answer to your question, feel free to contact us directly.
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
  );
};

export default FAQsPage;