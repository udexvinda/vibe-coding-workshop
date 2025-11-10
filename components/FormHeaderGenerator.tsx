import React, { useRef } from 'react';

const FormHeaderGenerator: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const handleDownload = () => {
    if (!svgRef.current) return;

    const svgElement = svgRef.current;
    const svgString = new XMLSerializer().serializeToString(svgElement);
    
    // Use a blob to handle SVG with external fonts or styles more reliably
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-t' });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      // Google Forms header image standard size
      canvas.width = 1600;
      canvas.height = 400;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Ensure the background is filled in case of transparency
        ctx.fillStyle = '#fdfaf6';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const pngUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = pngUrl;
        link.download = 'vibe-coding-workshop-header.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      console.error("Failed to load SVG image for conversion.");
      URL.revokeObjectURL(url);
    };
    img.src = url;
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-300">
      <h4 className="text-xl font-bold text-stone-700 text-center mb-4">Brand Assets</h4>
      <p className="text-center text-stone-600 mb-6">Need a header for your Google Form? Download this one.</p>
      
      <div className="w-full max-w-4xl mx-auto border-2 rounded-lg overflow-hidden shadow-md bg-[#fdfaf6]">
        <svg ref={svgRef} viewBox="0 0 1600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="2"/>
            </pattern>
            <style>
              {`@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');`}
            </style>
          </defs>

          <rect width="1600" height="400" fill="#fdfaf6" />
          <rect width="1600" height="400" fill="url(#grid)" />

          {/* Organic shapes based on poster */}
          <path d="M-10,0 C150,20 380,150 350,250 C320,350 100,300 -10,200 Z" fill="#f7b733" opacity="0.6" transform="translate(-40, -30) scale(1.2)" />
          <path d="M 1610 50 C 1500 80, 1300 250, 1400 350 C 1500 450, 1610 300, 1610 50 Z" fill="#e57373" opacity="0.6" transform="translate(80, -20) scale(1.1)" />
          <path d="M 950 410 C 1050 320, 1350 300, 1610 350 L 1610 410 Z" fill="#81c784" opacity="0.6" />
          
          {/* Geometric Accent over 'ING' */}
          <g transform="translate(890 200) rotate(-10)" stroke="#f7b733" strokeWidth="6" fill="none" opacity="0.8">
            <rect x="-40" y="-40" width="80" height="80" rx="8" transform="rotate(15)" />
            <rect x="-10" y="-10" width="80" height="80" rx="8" transform="rotate(40)" />
          </g>

          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#212121"
            fontSize="120"
            fontFamily="'Anton', sans-serif"
            letterSpacing="-2"
          >
            VIBE CODING WORKSHOP
          </text>
          
          <text
            x="50%"
            y="68%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#212121"
            fontSize="50"
            fontFamily="'Anton', sans-serif"
            letterSpacing="-1"
            opacity="0.8"
          >
            LEAN SIX SIGMA + AI
          </text>
        </svg>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="px-8 py-3 bg-stone-900 text-white font-bold rounded-md text-lg hover:bg-stone-700 transition-all duration-300 transform hover:scale-105"
        >
          Download Header Image
        </button>
      </div>
    </div>
  );
};

export default FormHeaderGenerator;