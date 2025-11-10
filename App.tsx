
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WorkshopFormatSection from './components/WorkshopFormatSection';
import ProjectsSection from './components/ProjectsSection';
import CommunitySection from './components/CommunitySection';
import ContactSection from './components/ContactSection';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-inter antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkshopFormatSection />
        <ProjectsSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;