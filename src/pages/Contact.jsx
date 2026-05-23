import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { COMPANY_EMAIL, COMPANY_PHONE, WHATSAPP_NUMBER } from '../data/tourData';
import imgContact from '../assets/images/skarduvalley.jpg';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    
    let waMessage = `*New Contact Inquiry*\n\n`;
    waMessage += `*Name:* ${name}\n`;
    waMessage += `*Email:* ${email}\n`;
    if (subject) waMessage += `*Subject:* ${subject}\n`;
    waMessage += `*Message:* ${message}`;
    
    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-warm-50 pt-20">
      <div className="bg-navy-950 py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={imgContact} 
            alt="Mountains" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/70">Have questions about our tours? We're here to help plan your perfect trip.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">Get in Touch</h2>
              <p className="text-warm-600 mb-8">Reach out to us for customized packages, corporate tours, or general inquiries. Our team responds within 24 hours.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-warm-200 flex items-start gap-4 group hover:border-accent-300 transition-colors">
              <div className="w-12 h-12 bg-forest-50 rounded-full flex items-center justify-center text-forest-600 group-hover:bg-forest-600 group-hover:text-white transition-colors flex-shrink-0">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Phone</h4>
                <p className="text-warm-600 text-sm">{COMPANY_PHONE}</p>
                <p className="text-warm-400 text-xs mt-1">Mon-Sat 9am - 9pm</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-warm-200 flex items-start gap-4 group hover:border-accent-300 transition-colors">
              <div className="w-12 h-12 bg-accent-50 rounded-full flex items-center justify-center text-accent-600 group-hover:bg-accent-600 group-hover:text-white transition-colors flex-shrink-0">
                <FaWhatsapp size={24} />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">WhatsApp</h4>
                <p className="text-warm-600 text-sm">+{WHATSAPP_NUMBER}</p>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-accent-600 text-xs font-bold mt-1 inline-block hover:underline">Chat with us →</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-warm-200 flex items-start gap-4 group hover:border-accent-300 transition-colors">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-bold text-navy-900 mb-1">Email</h4>
                <p className="text-warm-600 text-sm">{COMPANY_EMAIL}</p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-blue-600 text-xs font-bold mt-1 inline-block hover:underline">Send an email →</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-navy-900/5 border border-warm-200 h-full">
              <h3 className="text-2xl font-heading font-bold text-navy-900 mb-6">Send an Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input bg-warm-50" 
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input bg-warm-50" 
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Subject (Optional)</label>
                  <input 
                    type="text" 
                    className="form-input bg-warm-50" 
                    placeholder="e.g. Custom Family Tour"
                    value={form.subject}
                    onChange={(e) => setForm({...form, subject: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-navy-900 mb-2">Your Message</label>
                  <textarea 
                    required 
                    rows="5" 
                    className="form-input bg-warm-50 resize-none" 
                    placeholder="Tell us about your travel plans..."
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full justify-center py-4 text-base shadow-lg shadow-accent-500/20">
                  <FaWhatsapp className="text-xl" /> Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl overflow-hidden shadow-md h-[400px] border border-warm-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108814.73033501708!2d74.25875200236087!3d31.53592233215286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
