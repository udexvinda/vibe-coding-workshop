
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#00c2ff]/20 via-transparent to-[#ffdd00]/20 animate-gradient-xy"></div>
      </div>
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(0, 194, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 194, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes gradient-xy {
          0%, 100% {
            background-size: 400% 400%;
            background-position: 0% 50%;
          }
          50% {
            background-size: 200% 200%;
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
        }
      `}</style>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-wider font-montserrat leading-tight">
          Vibe Coding Workshop
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          Where AI meets Lean Six Sigma and TRIZ Thinking.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-[#00c2ff] text-slate-900 font-bold rounded-full text-lg hover:bg-white hover:glow-blue transition-all duration-300 transform hover:scale-105"
          >
            Join the Next Workshop
          </a>
          <a
            href="https://lsspro.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-[#ffdd00] text-[#ffdd00] font-bold rounded-full text-lg hover:bg-[#ffdd00] hover:text-slate-900 hover:glow-yellow transition-all duration-300 transform hover:scale-105"
          >
            Explore LSS Pro
          </a>
          <a
            href="https://trizpro.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-gray-400 text-gray-400 font-bold rounded-full text-lg hover:bg-gray-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
          >
            Explore TRIZ Pro
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
