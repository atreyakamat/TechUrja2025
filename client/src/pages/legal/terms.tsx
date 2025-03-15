import { Separator } from "@/components/ui/separator";

const TermsPage = () => {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-cinzel text-4xl md:text-5xl text-[#C0A080] mb-8 tracking-wider">Terms & Conditions</h1>
        <Separator className="bg-[#C0A080]/20 mb-8" />
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-white/70 mb-6">
            Welcome to TECHURJA 2025. These Terms and Conditions govern your participation in the event. 
            By registering for TECHURJA 2025, you agree to abide by these terms.
          </p>
          
          <h2 className="font-cinzel text-2xl text-[#C0A080] mt-10 mb-4">1. Eligibility</h2>
          <p className="text-white/70 mb-4">
            Participation in TECHURJA 2025 is open to all students with a valid college/university ID. 
            Certain events may have specific eligibility criteria, which will be mentioned in their respective guidelines.
          </p>
          
          <h2 className="font-cinzel text-2xl text-[#C0A080] mt-10 mb-4">2. Registration and Fees</h2>
          <p className="text-white/70 mb-4">
            Registration for TECHURJA 2025 is mandatory through the official website or on-site registration desks. 
            Registration fees, if applicable, are non-refundable. Different events may have separate registration processes and fees.
          </p>
          
          <h2 className="font-cinzel text-2xl text-[#C0A080] mt-10 mb-4">3. Code of Conduct</h2>
          <p className="text-white/70 mb-4">
            All participants are expected to maintain a professional and respectful demeanor throughout the event. 
            Any behavior that violates the code of conduct may result in disqualification and removal from the event without a refund.
          </p>
          
          <h2 className="font-cinzel text-2xl text-[#C0A080] mt-10 mb-4">4. Intellectual Property</h2>
          <p className="text-white/70 mb-4">
            All submissions must be original work. TECHURJA reserves the right to use, reproduce, and showcase submitted work 
            for promotional purposes, with appropriate credit to the creators.
          </p>
          
          <h2 className="font-cinzel text-2xl text-[#C0A080] mt-10 mb-4">5. Photos and Videos</h2>
          <p className="text-white/70 mb-4">
            By participating in TECHURJA 2025, you grant permission for photographs and videos taken during the event 
            to be used for promotional purposes.
          </p>
          
          <h2 className="font-cinzel text-2xl text-[#C0A080] mt-10 mb-4">6. Liability</h2>
          <p className="text-white/70 mb-4">
            TECHURJA and its organizers will not be responsible for any loss, damage, injury, or claim that may occur 
            during the event. Participants are responsible for their personal belongings.
          </p>
          
          <h2 className="font-cinzel text-2xl text-[#C0A080] mt-10 mb-4">7. Changes and Cancellations</h2>
          <p className="text-white/70 mb-4">
            TECHURJA reserves the right to make changes to the event schedule, venue, or cancel events if necessary. 
            In case of cancellation, registered participants will be notified as early as possible.
          </p>
          
          <h2 className="font-cinzel text-2xl text-[#C0A080] mt-10 mb-4">8. Governing Law</h2>
          <p className="text-white/70 mb-4">
            These terms and conditions are governed by the laws of India. Any disputes arising from these terms will 
            be subject to the exclusive jurisdiction of the courts in Goa, India.
          </p>
          
          <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#C0A080]/20 mt-8">
            <h3 className="font-cinzel text-xl text-[#C0A080] mb-4">Contact Information</h3>
            <p className="text-white/70 mb-4">
              If you have any questions or concerns regarding these terms and conditions, please contact us at:
            </p>
            <a 
              href="mailto:contact@techurja2025.com" 
              className="text-[#C0A080] hover:underline"
            >
              contact@techurja2025.com
            </a>
          </div>
          
          <p className="text-white/50 italic mt-10 text-sm">
            Last updated: March 15, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;