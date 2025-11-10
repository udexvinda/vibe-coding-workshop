
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-6 text-center text-stone-500">
        <p>&copy; {new Date().getFullYear()} Vibe Coding Workshop. All Rights Reserved.</p>
        <p className="text-sm mt-2">A community-driven initiative to merge AI with Process Excellence.</p>
      </div>
    </footer>
  );
};

export default Footer;