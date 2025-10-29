
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => (
  <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 h-full flex flex-col">
    <p className="text-gray-300 flex-grow">"{quote}"</p>
    <div className="mt-4 pt-4 border-t border-slate-700">
      <p className="font-bold text-white">{author}</p>
      <p className="text-sm text-[#00c2ff]">{role}</p>
    </div>
  </div>
);

const CommunitySection: React.FC = () => {
  const testimonials = [
    { quote: "An incredible fusion of process discipline and creative tech. I built a functional prototype in a day!", author: "Jane Doe", role: "LSS Black Belt, Tech Corp" },
    { quote: "The Vibe Coding concept is a game-changer. It's the perfect way to learn and apply generative AI practically.", author: "John Smith", role: "Innovation Manager, Startup Inc." },
    { quote: "I went from having a vague idea to a working AI tool. The mentorship was top-notch.", author: "Emily White", role: "Python Developer" }
  ];

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-montserrat">Community & Impact</h2>
          <p className="mt-4 text-lg text-gray-400">Success stories from past participants and partners.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white">Our Partners & Collaborators</h3>
          <div className="flex justify-center items-center gap-8 mt-6 flex-wrap">
            <span className="text-gray-500 text-lg font-semibold">Tech University</span>
            <span className="text-gray-500 text-lg font-semibold">Innovate Hub</span>
            <span className="text-gray-500 text-lg font-semibold">Process Excellence Network</span>
            <span className="text-gray-500 text-lg font-semibold">AI for Good Foundation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
