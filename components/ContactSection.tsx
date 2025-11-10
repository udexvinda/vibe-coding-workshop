
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-black/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900">Join Us</h2>
          <p className="mt-4 text-lg text-stone-600">Register for the next workshop or partner with us.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-center text-stone-800">Early Registration & Collaboration</h3>
          <p className="text-center mt-2 text-stone-600">
            Fill out the form to get notified about the next workshop date or to discuss partnership opportunities.
          </p>
          <div className="mt-8 bg-gray-100 p-6 rounded-md border border-dashed border-gray-300 text-center">
            <p className="text-stone-600">An embedded Google Form for registration will be displayed here.</p>
            <a 
              href="https://forms.gle/ugmaX3tDBoqrHJxy6" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-2 bg-stone-900 text-white font-bold rounded-md hover:bg-stone-700 transition-colors duration-300"
            >
              Open Registration Form
            </a>
          </div>
          
          <div className="mt-12 text-center flex flex-col items-center">
            <p className="text-stone-600">For direct inquiries, you can reach us at:</p>
            <a href="mailto:contact@vibecodingworkshop.app" className="text-lg text-[#e57373] font-semibold hover:underline">
              contact@vibecodingworkshop.app
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
