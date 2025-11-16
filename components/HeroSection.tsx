
import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const methodologies = ['Lean Six Sigma', 'TRIZ'];
  const [methodologyIndex, setMethodologyIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setMethodologyIndex(prevIndex => (prevIndex + 1) % methodologies.length);
        setIsFading(false);
      }, 500); // Duration of the fade-out animation
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-24">
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-10vh] left-[-15vw] w-[40vw] h-[40vw] min-w-[200px] min-h-[200px] max-w-[400px] max-h-[400px] bg-[#f7b733] opacity-50" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
         <div className="absolute bottom-[-10vh] right-[-10vw] w-[35vw] h-[35vw] min-w-[200px] min-h-[200px] max-w-[350px] max-h-[350px] bg-[#81c784] opacity-50" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}></div>
         <div className="absolute bottom-[20vh] left-[5vw] w-[25vw] h-[25vw] min-w-[150px] min-h-[150px] max-w-[250px] max-h-[250px] bg-[#e57373] opacity-50" style={{ borderRadius: '50% 50% 30% 70% / 60% 40% 60% 40%' }}></div>
      </div>
      
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-stone-900">
          Vibe Coding Workshop
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-stone-700 max-w-3xl mx-auto font-medium h-8">
          <span className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
            {methodologies[methodologyIndex]}
          </span> + AI
        </p>
        <p className="mt-8 text-lg text-stone-600">
          No coding experience needed—just vibe with AI.
        </p>
        
        <div className="mt-8 w-full max-w-2xl mx-auto bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm text-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-600 mb-2">Next Workshop</h3>
          <p className="text-2xl font-bold text-stone-800 mb-4">Lean Six Sigma + AI</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2 text-stone-700 font-medium">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>December 13, 2025 (Saturday)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Sunway Geo Avenue, PJ</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-stone-900 text-white font-bold rounded-md text-lg hover:bg-stone-700 transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
