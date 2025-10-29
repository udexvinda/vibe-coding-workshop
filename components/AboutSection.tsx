
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-montserrat">What is <span className="text-[#00c2ff]">Vibe Coding</span>?</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            A unique fusion of process intelligence, AI orchestration, and rapid experimentation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-[#00c2ff] transition-colors duration-300">
            <h3 className="text-2xl font-bold text-[#00c2ff]">Process Intelligence</h3>
            <p className="mt-4 text-gray-300">
              Leveraging proven methodologies like Lean Six Sigma and TRIZ to build structured, impactful AI solutions that solve real-world problems efficiently.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-[#00c2ff] transition-colors duration-300">
            <h3 className="text-2xl font-bold text-[#00c2ff]">AI Orchestration</h3>
            <p className="mt-4 text-gray-300">
              Mastering Google AI Studio and Gemini models to design, prompt, and deploy intelligent agents that augment human capabilities, not just automate tasks.
            </p>
          </div>
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-[#00c2ff] transition-colors duration-300">
            <h3 className="text-2xl font-bold text-[#00c2ff]">Rapid Experimentation</h3>
            <p className="mt-4 text-gray-300">
              Adopting a Design Thinking mindset to quickly prototype, test, and iterate on AI applications, turning ideas into functional demos in a single day.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white font-montserrat">Meet the Facilitators</h3>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Our workshops are led by a diverse team of certified Lean Six Sigma Black Belts, seasoned Design Thinking experts, and professional Python mentors dedicated to your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
