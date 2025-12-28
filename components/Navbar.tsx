
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'features' },
    { label: 'Pricing', id: 'plans' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass px-4 py-2 rounded-full flex items-center justify-between border border-white/20 shadow-lg ${scrolled ? 'shadow-black/5' : ''}`}>
          <div className="flex items-center gap-2 cursor-pointer pl-2 group" onClick={(e) => handleNavClick(e as any, 'hero')}>
            <Logo className="h-10 md:h-12 w-auto transition-transform group-hover:scale-110 duration-500" />
            <span className="text-lg font-bold font-heading tracking-tight text-black hidden sm:block">AvyoraOfficial</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={(e) => handleNavClick(e as any, 'contact')}
              className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all hover:shadow-xl active:scale-95"
            >
              Contact Sales
            </button>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors mr-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <motion.div 
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="flex flex-col gap-4 p-8 text-center">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-xl font-bold font-heading"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e as any, 'contact')}
            className="bg-black text-white px-8 py-4 rounded-full font-bold mt-4"
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
