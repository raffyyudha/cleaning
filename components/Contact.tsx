import React from 'react';
import { CONTACT_DETAILS, WHATSAPP_NUMBERS } from '../constants';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-900/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <h2 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">Let's Build<br />Something <span className="text-accent-500">Great.</span></h2>
            <p className="text-slate-400 text-lg mb-12">
              Ready to upgrade your space? We are just a message away. Reach out for a consultation or emergency repair.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-accent-500">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-white font-bold">Call or WhatsApp</div>
                  <div className="flex gap-4 text-slate-400 text-sm mt-1">
                    {WHATSAPP_NUMBERS.map((n, i) => (
                      <a key={i} href={`https://wa.me/${n.number}`} className="hover:text-white transition-colors">+{n.number}</a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-accent-500">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-white font-bold">Email Us</div>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-slate-400 text-sm mt-1 hover:text-white transition-colors">{CONTACT_DETAILS.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-accent-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-white font-bold">Visit Us</div>
                  <div className="text-slate-400 text-sm mt-1">{CONTACT_DETAILS.address}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold text-accent-500 uppercase tracking-wider mb-2">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-500 outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="group">
                  <label className="block text-xs font-bold text-accent-500 uppercase tracking-wider mb-2">Phone</label>
                  <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-500 outline-none transition-colors" placeholder="+27..." />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-accent-500 uppercase tracking-wider mb-2">Service</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-500 outline-none transition-colors appearance-none">
                  <option className="bg-slate-900">House Cleaning</option>
                  <option className="bg-slate-900">Deep Cleaning</option>
                  <option className="bg-slate-900">Move-In / Move-Out</option>
                  <option className="bg-slate-900">24-Hour Service</option>
                </select>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-accent-500 uppercase tracking-wider mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-accent-500 outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-accent-500 transition-colors uppercase tracking-widest text-sm">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;