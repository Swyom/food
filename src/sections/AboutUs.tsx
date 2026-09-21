import React from 'react';
import restaurantInteriorImg from '../assets/images/restaurant_interior_1781958580832.jpg';
import { AnimatedSection } from '../components/AnimatedSection';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900 border-t border-b border-neutral-800 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptive Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatedSection animation="fade-up" delay={0.1}>
              {/* Little Section Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-amber-500" />
                <span className="font-sans text-xs tracking-[0.3em] text-amber-500 font-semibold uppercase">
                  ABOUT US
                </span>
                <span className="w-6 h-[1px] bg-amber-500" />
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide mb-6 leading-tight">
                Welcome to <span className="font-serif italic text-amber-500">Ayusman's Kitchen</span>
              </h2>

              {/* Multi-staged prose paragraphs */}
              <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                At Ayusman’s Kitchen, we believe dining is about more than great food — it’s about the experience. From the inviting atmosphere to the warm hospitality, every detail is designed to make you feel comfortable and welcomed. Our carefully prepared dishes, relaxed setting, and vibrant vibe come together to create a dining experience worth remembering.
              </p>
              
              <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8 font-light">
               We bring together quality food, thoughtful service, and a beautiful environment where every moment feels special. Whether you’re enjoying a meal with family, spending time with friends, or simply taking a break, Ayusman’s Kitchen is a place where exceptional taste, good conversations, and memorable experiences come together.
              </p>

            </AnimatedSection>
          </div>

          {/* Right Column: Restaurant Interior Visual Panel */}
          <div className="lg:col-span-7 relative">
            <AnimatedSection animation="scale-in" duration={1} delay={0.2}>
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 border border-amber-500/10 rounded-2xl pointer-events-none transform rotate-1 hidden sm:block" />
              
              {/* Main Image Frame */}
              <div className="relative z-10 p-2.5 bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden aspect-video transform-gpu hover:scale-[1.01] transition-transform duration-500">
                <img
                  src={restaurantInteriorImg}
                  alt="Cozy Ambient Bistro Dining Room"
                  className="w-full h-full object-cover rounded-xl brightness-90 saturate-[1.05]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded luxury stats banner */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-neutral-950/90 backdrop-blur-md border border-neutral-800/80 rounded-lg flex justify-around items-center gap-4 shadow-xl">
                  <div className="text-center">
                    <span className="block text-xl font-bold text-amber-500 font-serif">15+</span>
                    <span className="block text-[8px] tracking-wider text-neutral-400 uppercase font-sans">YEARS ACTIVE</span>
                  </div>
                  <div className="h-8 w-[1px] bg-neutral-800" />
                  <div className="text-center">
                    <span className="block text-xl font-bold text-amber-500 font-serif">28</span>
                    <span className="block text-[8px] tracking-wider text-neutral-400 uppercase font-sans">MICHELIN MENTIONS</span>
                  </div>
                  <div className="h-8 w-[1px] bg-neutral-800" />
                  <div className="text-center">
                    <span className="block text-xl font-bold text-amber-500 font-serif">100%</span>
                    <span className="block text-[8px] tracking-wider text-neutral-400 uppercase font-sans">ORGANIC FARMED</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>

    </section>
  );
};
