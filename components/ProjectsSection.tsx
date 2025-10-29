import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  // Fix: Changed JSX.Element to React.ReactNode to resolve the type error.
  icon: React.ReactNode;
  borderColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, borderColor }) => (
  <div className={`bg-slate-800 p-6 rounded-lg border-2 border-slate-700 transition-all duration-300 hover:border${borderColor} hover:scale-105 relative overflow-hidden`}>
    <div className="flex items-start gap-4">
      <div className={`text${borderColor} text-3xl`}>{icon}</div>
      <div>
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </div>
    <div className={`absolute top-2 right-[-35px] bg${borderColor} text-slate-900 text-xs font-bold px-10 py-1 transform rotate-45`}>
      SOON
    </div>
  </div>
);

const LssProIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);

const TrizProIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);


const ProjectsSection: React.FC = () => {
  const lssProjects = [
    { title: 'SWOT Builder', description: 'AI-driven SWOT analysis generator.' },
    { title: 'SIPOC Mapper', description: 'Instantly map out your processes.' },
    { title: 'Problem Statement AI', description: 'Craft perfect problem statements.' },
    { title: 'Project Charter AI', description: 'Generate comprehensive project charters.' },
  ];

  const trizProjects = [
    { title: 'Contradiction Resolver', description: 'Find inventive solutions to technical conflicts.' },
    { title: 'Principle Recommender', description: 'Get TRIZ principles for your problem.' },
    { title: 'Standard Solution Mapper', description: 'Map problems to standard solutions.' },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-montserrat">Upcoming Projects</h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            Workshop projects become seed apps for our growing ecosystem of AI Process Tools.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold font-montserrat text-center mb-8"><span className="text-[#ffdd00]">LSSPro.app</span></h3>
            <div className="space-y-4">
              {lssProjects.map(p => (
                <ProjectCard key={p.title} title={p.title} description={p.description} icon={<LssProIcon />} borderColor="[#ffdd00]" />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold font-montserrat text-center mb-8"><span className="text-[#00c2ff]">TRIZPro.app</span></h3>
            <div className="space-y-4">
              {trizProjects.map(p => (
                <ProjectCard key={p.title} title={p.title} description={p.description} icon={<TrizProIcon />} borderColor="[#00c2ff]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;