
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { PLANS } from '../constants';
import { PricingPlan } from '../types';

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({ plan, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group perspective-1000 min-h-[700px] flex"
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">
        {/* Front side */}
        <div className="absolute inset-0 backface-hidden">
          {/* Card Body with Overflow Hidden for internal effects */}
          <div className="relative w-full h-full flex flex-col bg-white rounded-[40px] p-10 shadow-2xl border border-neutral-100 overflow-hidden">
            {/* Corner Glow Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.12),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(37,99,235,0.12),transparent_40%)]" />

            <div className="mb-10 relative z-10">
              <h3 className="text-3xl font-black font-heading mb-3">{plan.name}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-black">{plan.price}</span>
                <span className="text-neutral-400 font-bold uppercase tracking-widest text-xs">{plan.subtitle}</span>
              </div>
            </div>

            <div className="space-y-4 mb-auto relative z-10">
              {plan.description.slice(0, 10).map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`mt-1 p-1 rounded-full bg-blue-50 text-blue-600 flex-shrink-0`}>
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-neutral-600 leading-tight">{feature}</span>
                </div>
              ))}
              {plan.description.length > 10 && (
                <div className="text-sm font-bold text-blue-600 pt-4 flex items-center gap-2">
                  <div className="w-8 h-px bg-blue-200" />
                  + {plan.description.length - 10} more premium features
                </div>
              )}
            </div>

            <div className="mt-10 pt-8 border-t border-neutral-50 flex items-center justify-between transition-opacity duration-300 group-hover:opacity-0 relative z-10">
              <span className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Flip for more</span>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white shadow-xl`}>
                <Check className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Floating Badge (Outside the overflow-hidden body) */}
          {plan.isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-2 shadow-2xl shadow-blue-500/40 z-30 whitespace-nowrap">
              <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" /> MOST POPULAR
            </div>
          )}
        </div>

        {/* Back side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-neutral-900 rounded-[40px] p-10 text-white flex flex-col shadow-2xl">
          <div className="mb-8">
            <h4 className="text-2xl font-black font-heading mb-6 text-blue-400">Full Service List</h4>
            <div className="max-h-[450px] overflow-y-auto space-y-4 pr-4 scrollbar-thin scrollbar-thumb-neutral-700">
              {plan.description.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 py-2 border-b border-white/5">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-lg border-2 border-blue-400/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm" />
                  </div>
                  <span className="text-sm font-medium text-neutral-300 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button className={`mt-auto w-full py-5 rounded-2xl bg-gradient-to-br ${plan.color} text-white font-black text-lg hover:brightness-110 transition-all shadow-2xl shadow-black/40 uppercase tracking-widest`}>
            Subscribe Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="plans" className="py-32 px-6 bg-neutral-50/50">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Subscription Plans</span>
          <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tight mb-8">Transparent Pricing. No Gaps.</h2>
          <p className="text-xl text-neutral-500 leading-relaxed">
            Strategic growth packages designed for dominance. Choose the plan that fits your brand's current stage and future ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PLANS.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
