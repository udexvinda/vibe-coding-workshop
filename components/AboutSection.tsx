
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden">
       <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#f7b733]/30 rounded-full filter blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900">What is <span className="text-[#e57373]">Vibe Coding</span>?</h2>
          <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
            A unique fusion of process intelligence, AI orchestration, and rapid experimentation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
          <div className="bg-[#f7b733]/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl md:text-2xl text-stone-800">Process Intelligence</h3>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-stone-600">
              Leveraging proven methodologies like Lean Six Sigma and TRIZ to build structured, impactful AI solutions that solve real-world problems efficiently.
            </p>
          </div>
          <div className="bg-[#81c784]/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl md:text-2xl text-stone-800">AI Orchestration</h3>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-stone-600">
              Mastering Google AI Studio and Gemini models to design, prompt, and deploy intelligent agents that augment human capabilities, not just automate tasks.
            </p>
          </div>
          <div className="bg-[#e57373]/40 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl md:text-2xl text-stone-800">Rapid Experimentation</h3>
            <p className="mt-3 md:mt-4 text-sm md:text-base text-stone-600">
              Adopting a Design Thinking mindset to quickly prototype, test, and iterate on AI applications, turning ideas into functional demos in a single day.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-3xl text-stone-900">Meet the Facilitators</h3>
          <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
            Our workshops are led by a diverse team of certified Lean Six Sigma Black Belts, seasoned Design Thinking experts, and professional Python mentors dedicated to your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;