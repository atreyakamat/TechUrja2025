import { useEffect, useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';
import { contactInfo } from '@/data';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(rgba(18, 18, 18, 0.75), rgba(18, 18, 18, 0.95)), url('https://images.unsplash.com/photo-1599719500956-d158a26ab3ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div data-aos="fade-right">
            <div className="inline-block mb-4 py-1 px-3 border border-[#C0A080]/40 rounded-sm">
              <span className="text-[#C0A080] font-cinzel tracking-widest text-sm">JOIN THE BATTLE</span>
            </div>
            
            <h2 className="font-cinzel text-4xl font-bold mb-6 tracking-wide">
              <span className="text-white">Contact </span>
              <span className="text-[#C0A080]">Us</span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-[#8B0000] to-[#C0A080] mb-8"></div>
            
            <p className="text-white/80 mb-6 font-opensans leading-relaxed">
              Have questions about the events or want to become a sponsor? Our team of battle coordinators is ready to assist you.
            </p>
            
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C0A080]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-[#C0A080]" />
                </div>
                <div>
                  <h3 className="text-[#C0A080] font-cinzel mb-1">Email</h3>
                  <p className="text-white/80">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C0A080]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#C0A080]" />
                </div>
                <div>
                  <h3 className="text-[#C0A080] font-cinzel mb-1">Phone</h3>
                  <p className="text-white/80">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C0A080]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#C0A080]" />
                </div>
                <div>
                  <h3 className="text-[#C0A080] font-cinzel mb-1">Venue</h3>
                  <p className="text-white/80">
                    {contactInfo.venue.name}<br />
                    {contactInfo.venue.city} - {contactInfo.venue.postalCode}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#C0A080]/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-[#C0A080]" />
                </div>
                <div>
                  <h3 className="text-[#C0A080] font-cinzel mb-1">Social Media</h3>
                  <div className="flex gap-4 mt-2">
                    <a 
                      href={contactInfo.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#8B0000]/30 flex items-center justify-center hover:bg-[#8B0000]/50 transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a 
                      href={contactInfo.social.facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#8B0000]/30 flex items-center justify-center hover:bg-[#8B0000]/50 transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a 
                      href={contactInfo.social.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#8B0000]/30 flex items-center justify-center hover:bg-[#8B0000]/50 transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href={contactInfo.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#8B0000]/30 flex items-center justify-center hover:bg-[#8B0000]/50 transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <form 
              onSubmit={handleSubmit}
              className="bg-[#121212]/50 p-8 border border-[#C0A080]/30 rounded-sm"
            >
              <h3 className="font-cinzel text-2xl text-[#C0A080] mb-6">Send a Message</h3>
              
              {submitMessage && (
                <div className="mb-6 py-3 px-4 bg-[#C0A080]/10 text-[#C0A080] border border-[#C0A080]/30 rounded-sm">
                  {submitMessage}
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#121212] border border-[#C0A080]/30 p-3 text-white focus:border-[#C0A080] focus:outline-none transition-colors duration-300 rounded-sm" 
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#121212] border border-[#C0A080]/30 p-3 text-white focus:border-[#C0A080] focus:outline-none transition-colors duration-300 rounded-sm" 
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-white/80 mb-2 text-sm">Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-[#121212] border border-[#C0A080]/30 p-3 text-white focus:border-[#C0A080] focus:outline-none transition-colors duration-300 rounded-sm"
                  required
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="registration">Event Registration</option>
                  <option value="sponsorship">Sponsorship Opportunities</option>
                  <option value="volunteer">Volunteer Application</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5} 
                  className="w-full bg-[#121212] border border-[#C0A080]/30 p-3 text-white focus:border-[#C0A080] focus:outline-none transition-colors duration-300 rounded-sm" 
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[#8B0000] hover:bg-[#8B0000]/90 text-white font-cinzel tracking-wider py-3 rounded-sm border border-[#8B0000]/50 transition-all duration-300 shadow-lg shadow-[#8B0000]/20 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
