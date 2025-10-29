import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-500 flex flex-col items-center gap-4">
        <Logo className="h-12 w-12" />
        <p>&copy; {new Date().getFullYear()} Vibe Coding Workshop. All Rights Reserved.</p>
        <p className="text-sm mt-2">A community-driven initiative to merge AI with Process Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;
