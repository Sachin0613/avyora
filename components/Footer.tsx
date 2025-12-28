
import React from 'react';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-50 pt-32 pb-16 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col items-start gap-4 mb-8 cursor-pointer group" onClick={() => scrollTo('hero')}>
              <Logo className="h-20 md:h-24 w-auto transition-transform group-hover:scale-105 duration-500" />
              <span className="text-2xl font-bold font-heading tracking-tight">AvyoraOfficial</span>
            </div>
            <p className="text-neutral-500 font-medium leading-relaxed mb-8 pr-4">
              Your Complete Growth Partner. Specialized in digital excellence and tactical ground-level brand scaling.
            </p>
          </div>

          <div>
            <h4 className="font-bold font-heading text-black uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="space-y-4 text-neutral-500 font-medium">
              <li><button onClick={() => scrollTo('features')} className="hover:text-black transition-colors text-left">Digital Growth</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-black transition-colors text-left">Social Media</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-black transition-colors text-left">Website Building</button></li>
              <li><button onClick={() => scrollTo('features')} className="hover:text-black transition-colors text-left">Ground Management</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-heading text-black uppercase tracking-widest text-sm mb-8">Subscription</h4>
            <ul className="space-y-4 text-neutral-500 font-medium">
              <li><button onClick={() => scrollTo('plans')} className="hover:text-black transition-colors text-left">Complete Digital</button></li>
              <li><button onClick={() => scrollTo('plans')} className="hover:text-black transition-colors text-left">Social Management</button></li>
              <li><button onClick={() => scrollTo('plans')} className="hover:text-black transition-colors text-left">Website Only</button></li>
              <li><button onClick={() => scrollTo('plans')} className="hover:text-black transition-colors text-left">Ground Strategy</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold font-heading text-black uppercase tracking-widest text-sm mb-8">Connect</h4>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-blue-600 hover:border-blue-200 transition-all hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-blue-600 hover:border-blue-200 transition-all hover:scale-110 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-blue-600 hover:border-blue-200 transition-all hover:scale-110 shadow-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <button 
                onClick={() => scrollTo('contact')} 
                className="group flex items-center gap-2 text-sm font-bold text-neutral-600 hover:text-black transition-colors"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-8 text-neutral-400 text-sm font-medium">
          <p>© 2025 AvyoraOfficial. All Rights Reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
