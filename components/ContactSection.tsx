
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white font-montserrat">Join Us</h2>
          <p className="mt-4 text-lg text-gray-400">Register for the next workshop or partner with us.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-slate-800 rounded-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-center text-[#ffdd00]">Early Registration & Collaboration</h3>
          <p className="text-center mt-2 text-gray-300">
            Fill out the form to get notified about the next workshop date or to discuss partnership opportunities.
          </p>
          <div className="mt-8 bg-slate-900 p-6 rounded-md border border-dashed border-slate-600 text-center">
            <p className="text-gray-400">An embedded Google Form for registration will be displayed here.</p>
            <a 
              href="#" 
              className="mt-4 inline-block px-6 py-2 bg-[#00c2ff] text-slate-900 font-bold rounded-full hover:bg-white transition-colors duration-300"
            >
              Open Registration Form
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">For direct inquiries, you can reach us at:</p>
            <a href="mailto:contact@vibecodingworkshop.app" className="text-lg text-[#00c2ff] font-semibold hover:underline">
              contact@vibecodingworkshop.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
