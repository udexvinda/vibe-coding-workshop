
import React from 'react';

const WorkshopFormatSection: React.FC = () => {
  return (
    <section id="format" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-montserrat">Workshop Format</h2>
          <p className="mt-4 text-lg text-gray-400">A one-day immersive experience from learning to building.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/50 p-8 rounded-lg border-l-4 border-[#00c2ff]">
            <h3 className="text-2xl font-bold text-white font-montserrat">Morning Session</h3>
            <p className="text-lg text-[#00c2ff] mt-2">Learn Vibe Coding</p>
            <p className="mt-4 text-gray-300">
              Dive into the fundamentals of prompt engineering and AI-augmented development within Google AI Studio. We cover the core principles of connecting process logic with generative AI.
            </p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-lg border-l-4 border-[#ffdd00]">
            <h3 className="text-2xl font-bold text-white font-montserrat">Afternoon Session</h3>
            <p className="text-lg text-[#ffdd00] mt-2">Build Your AI App</p>
            <p className="mt-4 text-gray-300">
              Apply your new skills to build a mini AI-augmented demo app. Choose your track: Lean Six Sigma or TRIZ, and bring your project idea to life with hands-on support.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-300">
          <p className="text-xl">
            Throughout the day, you'll have dedicated support from our AI mentors, Design Thinking specialists, and coding assistants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkshopFormatSection;
