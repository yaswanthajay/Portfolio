import React, { useState, useEffect } from 'react';
import Scene from './components/Scene';
import Overlay from './components/Overlay';
import WelcomeScreen from './components/WelcomeScreen';
import { RESUME_DATA } from './constants';
import { SectionType } from './types';
import { Scan } from 'lucide-react';

const App: React.FC = () => {
  // State for the initial standard view vs the high-end 3D view
  const [hasLaunched, setHasLaunched] = useState(false);
  
  const [activeSection, setActiveSection] = useState<SectionType>(null);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    // Only start the boot sequence AFTER the user has launched the experience
    if (hasLaunched) {
        const timer = setTimeout(() => setBooted(true), 2000); // 2 second boot sequence for effect
        return () => clearTimeout(timer);
    }
  }, [hasLaunched]);

  const handleSectionSelect = (section: SectionType) => {
    setActiveSection(section);
  };

  const handleCloseOverlay = () => {
    setActiveSection(null);
  };

  const handleLaunch = () => {
    setHasLaunched(true);
  };

  // If user hasn't clicked launch yet, show the basic resume page
  if (!hasLaunched) {
      return <WelcomeScreen onEnter={handleLaunch} />;
  }

  // Once launched, show the full 3D Cyberpunk experience
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden cursor-none select-none">
      {/* Scanline Effect Overlay */}
      <div className="scanline"></div>
      
      {/* 3D Background & Interaction Layer */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${booted ? 'opacity-100' : 'opacity-0'}`}>
        <Scene onSectionSelect={handleSectionSelect} activeSection={activeSection} />
      </div>

      {/* Main Overlay Content */}
      <Overlay 
        activeSection={activeSection} 
        onClose={handleCloseOverlay} 
        data={RESUME_DATA} 
      />

      {/* HUD Elements (Always visible after boot) */}
      <div className={`absolute top-8 left-8 z-10 pointer-events-none mix-blend-screen transition-opacity duration-1000 ${booted ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl font-cyber font-black text-white tracking-widest drop-shadow-[0_0_15px_rgba(0,240,255,1)]">
          AJAY<span className="text-cyber-cyan">.OS</span>
        </h1>
        <div className="flex items-center gap-2 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-cyber-cyan/80 font-tech text-sm tracking-[0.2em] border-l-2 border-cyber-cyan pl-2">
                NEURAL LINK ESTABLISHED
            </p>
        </div>
      </div>

      {/* Interactive Instructions - Center Screen Bottom */}
      {!activeSection && booted && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-cyber-cyan animate-pulse flex flex-col items-center gap-2 pointer-events-none">
            <Scan size={32} className="text-cyber-pink spin-slow" />
            <span className="font-cyber tracking-[0.3em] text-xs uppercase bg-black/50 px-4 py-1 border border-cyber-cyan/30 backdrop-blur-sm rounded">
                Target & Engage Nodes
            </span>
        </div>
      )}
      
      {/* Decorative Visor Corners */}
      <div className={`absolute inset-0 pointer-events-none z-20 transition-opacity duration-1000 ${booted ? 'opacity-100' : 'opacity-0'}`}>
        {/* Top Left */}
        <svg className="absolute top-4 left-4 w-32 h-32 text-cyber-cyan/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M0 20 V0 H20 M0 100" />
        </svg>
        {/* Top Right */}
        <svg className="absolute top-4 right-4 w-32 h-32 text-cyber-pink/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M100 20 V0 H80" />
        </svg>
        {/* Bottom Left */}
        <svg className="absolute bottom-4 left-4 w-32 h-32 text-cyber-pink/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M0 80 V100 H20" />
        </svg>
        {/* Bottom Right */}
        <svg className="absolute bottom-4 right-4 w-32 h-32 text-cyber-cyan/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M100 80 V100 H80" />
        </svg>

        {/* Center Crosshair Static */}
        <div className="absolute top-1/2 left-1/2 w-[2px] h-[2px] bg-white/50 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Loading Curtain - Shows immediately after Launch */}
      <div className={`absolute inset-0 bg-black z-50 flex flex-col items-center justify-center transition-opacity duration-1000 pointer-events-none ${booted ? 'opacity-0' : 'opacity-100'}`}>
         <div className="text-cyber-cyan font-cyber tracking-widest text-2xl animate-pulse mb-4">INITIALIZING SYSTEM...</div>
         <div className="w-64 h-1 bg-gray-800 rounded overflow-hidden">
            <div className="h-full bg-cyber-pink animate-[width_2s_ease-in-out_forwards] w-0"></div>
         </div>
         <div className="mt-2 font-mono text-xs text-gray-500">LOADING ASSETS // CONNECTING TO NEURAL NET</div>
      </div>

    </div>
  );
};

export default App;
