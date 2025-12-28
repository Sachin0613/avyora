
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xvzoqyea", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Submission error", error);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-8 leading-tight">
              Let's Scale Your <br /> Brand Together.
            </h2>
            <p className="text-lg text-neutral-500 mb-10 leading-relaxed max-w-md">
              Whether you're looking for a complete digital transformation or tactical on-ground growth, our experts are ready to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Email Us</div>
                  <div className="text-lg font-bold text-neutral-900">officialavyora@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-purple-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Consulting</div>
                  <div className="text-lg font-bold text-neutral-900">Book a strategy call</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Shape */}
            <div className="absolute inset-0 bg-blue-50 rounded-[48px] -rotate-3 -z-10" />
            
            <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl border border-neutral-100 relative">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black font-heading mb-4">Message Sent!</h3>
                  <p className="text-neutral-500 mb-8">Thank you for reaching out. Our growth strategy team will contact you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-300" />
                      <input 
                        required
                        type="text" 
                        name="name" 
                        placeholder="John Doe"
                        className="w-full pl-12 pr-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-300" />
                      <input 
                        required
                        type="email" 
                        name="email" 
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Message</label>
                    <textarea 
                      required
                      name="message" 
                      rows={4}
                      placeholder="Tell us about your brand goals..."
                      className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-5 bg-black text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all shadow-xl hover:shadow-black/20 active:scale-[0.98]"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
