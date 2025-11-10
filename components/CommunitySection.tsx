import React, { useState, useEffect } from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role:string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => (
  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-gray-200 h-full flex flex-col">
    <p className="text-stone-600 flex-grow">"{quote}"</p>
    <div className="mt-4 pt-4 border-t border-gray-200">
      <p className="font-bold text-stone-800">{author}</p>
      <p className="text-sm text-[#e57373]">{role}</p>
    </div>
  </div>
);

const CommunitySection: React.FC = () => {
  const testimonials = [
    { quote: "An incredible fusion of process discipline and creative tech. I built a functional prototype in a day!", author: "Jane Doe", role: "LSS Black Belt, Tech Corp" },
    { quote: "The Vibe Coding concept is a game-changer. It's the perfect way to learn and apply generative AI practically.", author: "John Smith", role: "Innovation Manager, Startup Inc." },
    { quote: "I went from having a vague idea to a working AI tool. The mentorship was top-notch.", author: "Emily White", role: "Python Developer" },
    { quote: "The hands-on approach was fantastic. I never thought I could build an AI app so quickly.", author: "Alex Ray", role: "Project Manager" },
    { quote: "Vibe Coding bridges the gap between process theory and practical AI application. Highly recommended.", author: "Sarah Chen", role: "Operations Lead" },
    { quote: "A truly innovative workshop. The blend of TRIZ and Gemini opened up new ways of thinking for me.", author: "Mike Brown", role: "Engineering Director" },
    { quote: "The community aspect is amazing. It's great to connect with like-minded professionals.", author: "Jessica Lee", role: "UX Designer" },
    { quote: "I was a complete beginner, and the mentors made me feel comfortable and confident. I learned so much!", author: "David Kim", role: "Business Analyst" }
  ];

  const photos = [
    { src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop", alt: "Participants collaborating on a project during the workshop." },
    { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop", alt: "A group of workshop attendees smiling and learning together." },
    { src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop", alt: "A diverse team working on their mini-app." },
    { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop", alt: "A presenter showcasing a project on a laptop to an engaged audience." },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop", alt: "Facilitator mentoring a participant at their workstation." },
    { src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=2070&auto=format&fit=crop", alt: "A participant proudly presenting their mini-app." },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop", alt: "A workshop session in progress with many attendees." },
    { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1974&auto=format&fit=crop", alt: "Hands-on activity at the Vibe Coding Workshop." }
  ];

  // Helper component for the transitioning image block
  const TransitioningImageBlock: React.FC<{ images: typeof photos; currentIndex: number }> = ({ images, currentIndex }) => (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg bg-gray-200">
      {images.map((photo, index) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );

  // State for each block's current image index
  const [gallery1Index, setGallery1Index] = useState(0);
  const [gallery2Index, setGallery2Index] = useState(0);
  const [gallery3Index, setGallery3Index] = useState(0);
  
  // Group photos for each of the three blocks
  const gallery1Photos = photos.slice(0, 3);
  const gallery2Photos = photos.slice(3, 6);
  const gallery3Photos = [photos[6], photos[7], photos[0]]; // Use some from the start to fill it up

  useEffect(() => {
    const interval1 = setInterval(() => {
      setGallery1Index(prev => (prev + 1) % gallery1Photos.length);
    }, 3000);

    const interval2 = setInterval(() => {
      setGallery2Index(prev => (prev + 1) % gallery2Photos.length);
    }, 3500);

    const interval3 = setInterval(() => {
      setGallery3Index(prev => (prev + 1) % gallery3Photos.length);
    }, 4000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [gallery1Photos.length, gallery2Photos.length, gallery3Photos.length]);

  return (
    <section id="community" className="py-16 sm:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900">Community & Impact</h2>
          <p className="mt-4 text-lg text-stone-600">Moments from our vibrant workshops.</p>
        </div>
        
        <div className="relative px-6">
          {/* COMING SOON Overlay */}
          <div className="absolute inset-x-6 inset-y-0 bg-[#a0d8e4]/90 backdrop-blur-sm rounded-[2.5rem] flex items-center justify-center z-10">
            <h2
              className="text-6xl md:text-8xl lg:text-9xl font-black text-black uppercase tracking-wide"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Coming Soon
            </h2>
          </div>

          {/* Original content, now blurred and non-interactive */}
          <div className="blur-sm select-none pointer-events-none">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-16">
                <TransitioningImageBlock images={gallery1Photos} currentIndex={gallery1Index} />
                <TransitioningImageBlock images={gallery2Photos} currentIndex={gallery2Index} />
                <TransitioningImageBlock images={gallery3Photos} currentIndex={gallery3Index} />
            </div>

            <div className="text-center mb-12">
              <p className="text-lg text-stone-600">Success stories from past participants and partners.</p>
            </div>
            
            <div className="relative w-full overflow-hidden group [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
              <div className="flex animate-scroll">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-4">
                    <TestimonialCard {...t} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-stone-800">Our Partners & Collaborators</h3>
              <div className="flex justify-center items-center gap-8 mt-6 flex-wrap">
                <span className="text-stone-500 text-lg font-semibold">Tech University</span>
                <span className="text-stone-500 text-lg font-semibold">Innovate Hub</span>
                <span className="text-stone-500 text-lg font-semibold">Process Excellence Network</span>
                <span className="text-stone-500 text-lg font-semibold">AI for Good Foundation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;