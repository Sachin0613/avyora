
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Trust from './components/Trust';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingShapes from './components/FloatingShapes';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <FloatingShapes />
      <Navbar />
      
      <main>
        {/* Step 2: Hero */}
        <Hero />
        
        {/* Step 3: About */}
        <About />

        {/* Step 4: Services */}
        <Features />

        {/* Step 5: Pricing */}
        <Pricing />

        {/* Step 6: Process */}
        <Process />

        {/* Step 7: Trust */}
        <Trust />

        {/* Added Contact Section */}
        <Contact />

        {/* Step 8: Call To Action */}
        <section className="py-32 px-6 bg-white overflow-hidden">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden bg-black rounded-[64px] p-16 md:p-32 text-center text-white shadow-2xl"
            >
              {/* Decorative Glows */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-7xl font-black font-heading tracking-tight mb-10 leading-tight">
                  Ready to Grow Your Brand with AvyoraOfficial?
                </h2>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-black px-12 py-6 rounded-full font-bold text-2xl hover:bg-neutral-100 transition-all shadow-xl hover:shadow-white/10"
                >
                  Start Your Subscription Today
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Step 9: Footer */}
      <Footer />
    </div>
  );
};

export default App;
