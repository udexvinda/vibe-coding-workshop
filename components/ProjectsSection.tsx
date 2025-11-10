import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  status?: 'SOON' | 'LIVE';
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon, accentColor, status = 'SOON', link }) => {
  const Tag = link ? 'a' : 'div';
  const props = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {};
  
  const getStatusBackgroundColor = () => {
    // Custom styles for LSSPro.app projects (orange theme)
    if (accentColor === '#f7b733') {
      if (status === 'LIVE') {
        return '#d97706'; // Darker, standout orange for LIVE
      }
      // For SOON, the user wants a faded ribbon. Using the accent color with opacity.
      return 'rgba(247, 183, 51, 0.7)'; 
    }

    // Default styles for other projects (e.g., TRIZPro.app) which should remain the same.
    if (status === 'LIVE') {
      return '#10b981'; // Existing vibrant emerald green for TRIZPro LIVE
    }
    return accentColor; // Default accent color for TRIZPro SOON
  };

  return (
    <Tag
      {...props}
      style={{ '--accent-color': accentColor } as React.CSSProperties}
      className={`bg-white p-6 rounded-lg border-2 border-gray-200 transition-all duration-300 hover:scale-105 relative overflow-hidden hover:border-[var(--accent-color)] block`}
    >
      <div className="flex items-start gap-4">
        <div style={{ color: accentColor }} className="text-3xl pt-1">{icon}</div>
        <div>
          <h4 className="text-xl font-bold text-stone-800">{title}</h4>
          <p className="mt-2 text-stone-600">{description}</p>
        </div>
      </div>
      {status && (
        <div style={{ backgroundColor: getStatusBackgroundColor() }} className="absolute top-2 right-[-35px] text-white text-xs font-bold px-10 py-1 transform rotate-45">
          {status}
        </div>
      )}
    </Tag>
  );
};


const LssProIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);

const TrizProIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

const ExternalLinkIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);


const ProjectsSection: React.FC = () => {
  const lssProjects = [
    { title: 'SWOT to Charter', description: 'AI-driven Project Charter', status: 'LIVE' as const, link: 'https://swot2charter.streamlit.app/' },
    { title: 'SIPOC Mapper', description: 'Instantly map out your processes.', status: 'SOON' as const },
    { title: 'Problem Statement AI', description: 'Craft perfect problem statements.', status: 'SOON' as const },
  ];

  const trizProjects = [
    { title: 'Contradiction Resolver', description: 'Find inventive solutions to technical conflicts.', status: 'LIVE' as const, link: 'https://trizgpt.streamlit.app/' },
    { title: 'Principle Recommender', description: 'Get TRIZ principles for your problem.', status: 'SOON' as const },
    { title: 'Standard Solution Mapper', description: 'Map problems to standard solutions.', status: 'SOON' as const },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-black/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900">Upcoming Projects</h2>
          <p className="mt-4 text-lg text-stone-600 max-w-3xl mx-auto">
            Workshop projects become seed apps for our growing ecosystem of AI Process Tools.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-montserrat text-center mb-8">
              <a href="https://lsspro.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#f7b733] hover:underline group">
                LSSPro.app
                <ExternalLinkIcon />
              </a>
            </h3>
            <div className="space-y-4">
              {lssProjects.map(p => (
                <ProjectCard key={p.title} {...p} icon={<LssProIcon />} accentColor="#f7b733" />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-montserrat text-center mb-8">
              <a href="https://trizpro.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#81c784] hover:underline group">
                TRIZPro.app
                <ExternalLinkIcon />
              </a>
            </h3>
            <div className="space-y-4">
              {trizProjects.map(p => (
                <ProjectCard key={p.title} {...p} icon={<TrizProIcon />} accentColor="#81c784" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;