import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Mail, Twitter, Youtube, Music } from 'lucide-react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const links = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/yourusername',
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/yourusername',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800'
    },
    {
      name: 'Gmail',
      icon: Mail,
      url: 'mailto:your.email@gmail.com',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700'
    },
    {
      name: 'Twitter/X',
      icon: Twitter,
      url: 'https://twitter.com/yourusername',
      color: 'from-gray-700 to-black',
      hoverColor: 'hover:from-gray-800 hover:to-gray-900'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/yourusername',
      color: 'from-red-600 to-red-700',
      hoverColor: 'hover:from-red-700 hover:to-red-800'
    },
    {
      name: 'TikTok',
      icon: Music,
      url: 'https://tiktok.com/@yourusername',
      color: 'from-black to-gray-800',
      hoverColor: 'hover:from-gray-900 hover:to-black'
    }
  ];

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-black to-stone-800 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-800/10 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-md mx-auto relative">
        
        {/* Main Glass Container */}
        <div className="relative bg-black/20 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Shine Animation */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 w-full h-full animate-shine"></div>
          </div>
          
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-red-900/5"></div>
          
          {/* Glass reflection effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-30"></div>
          
          {/* Banner Cover Photo */}
          <div className="absolute top-0 left-0 right-0 h-20 md:h-24 rounded-t-3xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-red-800 via-stone-900 to-black opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-20 pattern-overlay"></div>
          </div>
          
          {/* Content Container */}
          <div className="relative z-10 p-6 md:p-8">
            
            {/* Header Section */}
            <div className={`text-center mb-8 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}>
              
              {/* Avatar with red-onyx glow */}
              <div className="relative mx-auto mb-4 md:mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-red-600 via-stone-800 to-red-900 rounded-full mx-auto flex items-center justify-center shadow-2xl border border-red-600/30 relative z-10">
                  <span className="text-lg md:text-2xl font-bold text-white drop-shadow-lg">TNK</span>
                </div>
                <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-red-600 to-red-800 rounded-full mx-auto animate-pulse opacity-20 blur-sm"></div>
                <div className="absolute -inset-1 w-24 h-24 md:w-28 md:h-28 bg-gradient-to-r from-red-600/20 to-stone-800/20 rounded-full mx-auto blur-lg"></div>
              </div>
              
              {/* Name with glow effect */}
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
                Thomasian Nihon Kyoukai
              </h1>
              
              {/* Subtitle with red accent */}
              <p className="text-red-300 text-base md:text-lg mb-3 font-medium">
                University of Santo Tomas
              </p>
              
              {/* Description with subtle glow */}
              <p className="text-stone-300 text-xs md:text-sm max-w-xs mx-auto leading-relaxed mb-4">
                The official student organization in UST that promotes traditional and modern Japanese culture.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                <button 
                  onClick={() => console.log('About Us clicked')}
                  className="action-button"
                >
                  About Us
                </button>
                
                <button 
                  onClick={() => console.log('Apply clicked')}
                  className="action-button"
                >
                  Apply
                </button>
                
                <button 
                  onClick={() => console.log('Partners clicked')}
                  className="action-button"
                >
                  Partners
                </button>
              </div>
            </div>

            {/* Links with glass morphism */}
            <div className="space-y-3 md:space-y-4 relative z-10">
              {links.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <div
                    key={link.name}
                    className={`transform transition-all duration-700 ${
                      isVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-10 opacity-0'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  >
                    <button
                      onClick={() => handleLinkClick(link.url)}
                      className="social-link-button"
                    >
                      {/* Gradient border overlay on hover */}
                      <div className="gradient-border-overlay"></div>
                      
                      {/* Glass reflection */}
                      <div className="glass-reflection"></div>
                      
                      {/* Colored accent line */}
                      <div className={`accent-line bg-gradient-to-b ${link.color}`}></div>
                      
                      {/* Content */}
                      <div className="flex items-center relative z-10">
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 transition-all duration-300 group-hover:rotate-12 group-hover:text-red-300" />
                        <span className="text-base md:text-lg group-hover:text-red-100 transition-colors duration-300">{link.name}</span>
                      </div>
                      
                      {/* Futuristic arrow */}
                      <div className="relative z-10">
                        <svg 
                          className="w-4 h-4 md:w-5 md:h-5 transform transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Current Events Section */}
            <div className={`mt-8 transform transition-all duration-1000 relative z-10 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              
              {/* Section Title */}
              <h2 className="text-xl font-bold text-white mb-4 text-center tracking-wide drop-shadow-lg">
                Current Events
              </h2>
              
              {/* No Current Events Placeholder */}
              <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-lg">
                <div className="flex flex-col items-center space-y-3">
                  {/* Calendar Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-stone-800 rounded-full flex items-center justify-center opacity-50">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <p className="text-stone-300 text-sm">
                    No current events for now
                  </p>
                  
                  <p className="text-stone-400 text-xs">
                    Check back later for upcoming registrations
                  </p>
                </div>
              </div>
            </div>

            {/* Footer with copyright */}
            <div className={`text-center mt-8 transform transition-all duration-1000 relative z-10 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '1200ms' }}>
              <div className="border-t border-white/10 pt-4 mt-4">
                <p className="text-stone-400 text-xs leading-relaxed mb-1">
                  © 2025 Office of the Director of Communications
                </p>
                <p className="text-red-300 font-medium text-xs">
                  Thomasian Nihon Kyoukai
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400/30 rounded-full animate-pulse floating-element-1"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-stone-400/20 rounded-full animate-pulse floating-element-2"></div>
      </div>
    </div>
  );
};

export default App;