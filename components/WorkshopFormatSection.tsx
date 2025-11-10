
import React from 'react';

const WorkshopFormatSection: React.FC = () => {
  return (
    <section id="format" className="py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900">Workshop Format</h2>
          <p className="mt-4 text-lg text-stone-600">A one-day immersive experience from learning to building.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border-l-4 border-[#f7b733]">
            <h3 className="text-2xl font-bold text-stone-800">Morning Session</h3>
            <p className="text-lg text-[#f7b733] mt-2 font-semibold">Learn the Vibe</p>
            <p className="mt-4 text-stone-600">
              Dive into the fundamentals of prompt engineering and AI-augmented development within Google AI Studio. We cover the core principles of connecting process logic with generative AI.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg border-l-4 border-[#81c784]">
            <h3 className="text-2xl font-bold text-stone-800">Afternoon Session</h3>
            <p className="text-lg text-[#81c784] mt-2 font-semibold">Code the Vibe</p>
            <p className="mt-4 text-stone-600">
              Apply your new skills to build a mini AI-augmented demo app. Choose your track: Lean Six Sigma or TRIZ, and bring your project idea to life with hands-on support.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center text-stone-600">
          <p className="text-xl">
            Throughout the day, you'll have dedicated support from our AI mentors, Design Thinking specialists, and coding assistants.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkshopFormatSection;
