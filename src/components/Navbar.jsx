import React, { useState } from 'react';
import { HiSparkles } from 'react-icons/hi2';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (setActiveTab) setActiveTab('home');
    setIsMobileOpen(false);
    
    // Smooth scroll to target section on home page
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAF8]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-1 cursor-pointer"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          <div className="text-[#00D66C] text-2xl font-black">
            <HiSparkles />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-[#121812]">
            Standard<span className="text-[#001D0C]">5</span>
          </span>
        </div>

        {/* Floating Dark Nav Pill Container */}
        <div className="hidden md:flex items-center bg-[#1A1F1C] p-1.5 rounded-full shadow-lg gap-1">
          <nav className="flex items-center px-4 gap-6 text-xs font-semibold text-gray-300">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, 'features')}
              className="text-white transition-colors"
            >
              Features
            </a>
            <a 
              href="#updates" 
              onClick={(e) => handleNavClick(e, 'updates')}
              className="text-white transition-colors"
            >
              Updates
            </a>
          </nav>

          {/* Demo Button -> Directs to AI Assistant Page */}
          <button 
            onClick={() => setActiveTab && setActiveTab('ai-assistant')}
            className="px-5 py-2 rounded-full bg-[#2A322D] hover:bg-[#36403A] text-white text-xs font-bold transition-all cursor-pointer"
          >
            Demo
          </button>

          {/* Contact Sales Button */}
          <button 
            onClick={() => alert('Redirecting to Sales Team')}
            className="px-5 py-2 rounded-full bg-[#00D66C] hover:bg-[#00B85C] text-[#001D0C] text-xs font-bold transition-all cursor-pointer"
          >
            Contact Sales
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#121812] text-xl p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#1A1F1C] text-white mx-4 p-6 rounded-3xl space-y-4 shadow-2xl">
          <nav className="flex flex-col gap-3 text-sm font-semibold">
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
            <a href="#updates" onClick={(e) => handleNavClick(e, 'updates')}>Updates</a>
          </nav>
          <div className="pt-4 border-t border-gray-700 flex flex-col gap-2">
            <button 
              onClick={() => {
                setActiveTab && setActiveTab('ai-assistant');
                setIsMobileOpen(false);
              }}
              className="w-full py-2.5 rounded-full bg-[#2A322D] text-white text-xs font-bold"
            >
              Demo
            </button>
            <button 
              onClick={() => {
                alert('Redirecting to Sales Team');
                setIsMobileOpen(false);
              }}
              className="w-full py-2.5 rounded-full bg-[#00D66C] text-[#001D0C] text-xs font-bold"
            >
              Contact Sales
            </button>
          </div>
        </div>
      )}
    </header>
  );
}