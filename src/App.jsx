import React, { useState, useEffect, useMemo } from 'react';
import { Instagram, Facebook, Mail, Twitter, Youtube, Music } from 'lucide-react';

const lightTheme = {
  background: '#fdf2f8',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  text: '#1f2937',
  textSecondary: 'rgba(249, 79, 79, 0.9)',
  textMuted: '#4b5563',
  textSubtle: '#6b7280',
  border: 'rgba(0, 0, 0, 0.1)',
  buttonHover: 'rgba(220, 38, 38, 0.05)',
  shadow: 'rgba(0, 0, 0, 0.1)',
  lightShadow: 'rgba(0, 0, 0, 0.05)',
  glow1: 'rgba(171, 165, 252, 0.3)',
  glow2: 'rgba(66, 14, 188, 0.3)',
  innerGrad: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, transparent 50%, rgba(252, 165, 165, 0.1) 100%)',
  topGrad: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%, transparent 100%)'
};

const darkTheme = {
  background: 'rgb(17, 17, 17)',
  cardBg: 'rgb(17, 17, 17)',
  text: '#f1f5f9',
  textSecondary: 'rgba(249, 79, 79, 0.9)',
  textMuted: '#94a3b8',
  textSubtle: '#64748b',
  border: 'rgba(255, 255, 255, 0.1)',
  buttonHover: 'rgba(220, 38, 38, 0.1)',
  shadow: 'rgba(0, 0, 0, 0.3)',
  lightShadow: 'rgba(0, 0, 0, 0.2)',
  glow1: 'rgba(177, 165, 252, 0.3)',
  glow2: 'rgba(43, 0, 161, 0.3)',
  innerGrad: 'linear-gradient(135deg, rgba(16, 16, 16, 0.5) 0%, transparent 50%, rgba(23, 23, 23, 0.1) 100%)',
  topGrad: 'linear-gradient(135deg, rgba(51, 65, 85, 0.3) 0%, transparent 50%, transparent 100%)'
};

// Header Component
const Header = ({ isDark, onToggle, onMessengerClick, onShareClick, isMobile, theme }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [shineStates, setShineStates] = React.useState({
    share: false,
    chat: false,
    theme: false
  });

  const handleShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
    onShareClick();
  };

  // Trigger shine effect on mount and periodically
  React.useEffect(() => {
    const triggerShine = (buttonKey) => {
      setShineStates(prev => ({ ...prev, [buttonKey]: true }));
      setTimeout(() => {
        setShineStates(prev => ({ ...prev, [buttonKey]: false }));
      }, 600);
    };

    // Initial shine
    setTimeout(() => triggerShine('share'), 1000);
    setTimeout(() => triggerShine('chat'), 1800);
    setTimeout(() => triggerShine('theme'), 2600);

    // Periodic shine 
    const interval = setInterval(() => {
      const buttons = ['share', 'chat', 'theme'];
      buttons.forEach((button, index) => {
        setTimeout(() => triggerShine(button), index * 800);
      });
    }, isMobile ? 12000 : 8000); // Less frequent on mobile

    return () => clearInterval(interval);
  }, [isMobile]);

  const getShineStyle = (isActive) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
    transform: isActive ? 'translateX(100%)' : 'translateX(-100%)',
    transition: 'transform 0.6s ease-out',
    pointerEvents: 'none',
    zIndex: 1,
    willChange: 'transform'
  });

  return (
    <>
      <header style={{
        position: 'fixed',
        top: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '1000',
        background: isDark 
          ? '#121212' 
          : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: `1px solid ${isDark ? 'rgba(131, 133, 137, 0.55)' : 'rgba(203, 213, 225, 0.3)'}`,
        borderRadius: '14px',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        boxShadow: isDark 
          ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
          : '0 4px 20px rgba(0, 0, 0, 0.1)',
        transition: isMobile ? 'none' : 'all 0.3s ease'
      }}>

        {/* Share Link Button with Tooltip */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={handleShareClick}
            className={`glow-button ${isMobile ? 'mobile-no-transition' : ''}`}
            title="Share this page"
            style={{
              padding: '6px 12px',
              borderRadius: '10px',
              border: 'none',
              fontSize: '12px',
              fontWeight: '600',
              color: theme.text,
              textAlign: 'center',
              position: 'relative',
              cursor: 'pointer',
              fontFamily: 'inherit',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              whiteSpace: 'nowrap'
            }}
          >
            <div style={getShineStyle(shineStates.share)}></div>
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ position: 'relative', zIndex: 2 }}>
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
            </svg>
            <span style={{ position: 'relative', zIndex: 2 }}>Share Link</span>
            <span className="glow-button-border" />
          </button>

          {/* Tooltip */}
          {showTooltip && (
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: isDark ? '#1e293b' : '#374151',
              color: '#ffffff',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              zIndex: 1001,
              animation: isMobile ? 'none' : 'fadeIn 0.2s ease-out'
            }}>
              Link copied!
              <div style={{
                position: 'absolute',
                top: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                borderBottom: `4px solid ${isDark ? '#1e293b' : '#374151'}`
              }}></div>
            </div>
          )}
        </div>

        {/* Let's Chat Button */}
        <button
          onClick={onMessengerClick}
          className={`glow-button special-glow ${isMobile ? 'mobile-no-transition' : ''}`}
          title="Visit our Facebook page"
          style={{
            padding: '6px 12px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '12px',
            fontWeight: '600',
            color: '#ffffff',
            textAlign: 'center',
            position: 'relative',
            cursor: 'pointer',
            fontFamily: 'inherit',
            background: 'linear-gradient(135deg,rgb(206, 30, 77) 0%,rgb(204, 22, 107) 100%)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 12px rgba(220, 38, 38, 0.3)'
          }}
        >
          <div style={getShineStyle(shineStates.chat)}></div>
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ position: 'relative', zIndex: 2 }}>
            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <span style={{ position: 'relative', zIndex: 2 }}>Let's Chat</span>
          <span className="glow-button-border special-border" />
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={onToggle}
          className={`glow-button ${isMobile ? 'mobile-no-transition' : ''}`}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          style={{  
            padding: '6px 12px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '12px',
            fontWeight: '600',
            color: theme.text,
            textAlign: 'center',
            position: 'relative',
            cursor: 'pointer',
            fontFamily: 'inherit',
            background: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            whiteSpace: 'nowrap'
          }}
        >
          <div style={getShineStyle(shineStates.theme)}></div>
          {isDark ? (
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ position: 'relative', zIndex: 2 }}>
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
            </svg>
          ) : (
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ position: 'relative', zIndex: 2 }}>
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
            </svg>
          )}
          <span style={{ position: 'relative', zIndex: 2 }}>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
          <span className="glow-button-border" />
        </button>
      </header>
    </>
  );
};

// Social links data
const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/ust_tnk?igsh=bzgybGV2dGFydnNz&utm_source=qr',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/UST.TNK/',
  },
  {
    name: 'Gmail',
    icon: Mail,
    url: 'mailto:tnk.uso@ust.edu.ph',
  },
  {
    name: 'Twitter/X',
    icon: Twitter,
    url: 'https://x.com/UST_TNK',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com/@ust_tnk',
  },
  {
    name: 'TikTok',
    icon: Music,
    url: 'https://www.tiktok.com/@ust_tnk',
  }
];

// Static CSS styles - FIXED: Properly working social button hover effects
const StaticStyles = ({ isMobile, isDark }) => (
  <style>{`
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    /* Only disable hover/transform transitions on mobile for header buttons, not social buttons */
    ${isMobile ? `
      .mobile-no-transition {
        transition: none !important;
      }
      
      /* Keep backdrop filter disabled on mobile for performance */
      .glass-card {
        backdrop-filter: none !important;
        -webkit-backdrop-filter: none !important;
      }
      
      /* Enable social button animations on mobile */
      .social-button {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      }
    ` : `
      .glass-card {
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        transition: background-color 0.3s ease, border-color 0.3s ease;
      }
    `}

    /* Sakura animations - ALWAYS ENABLED */
    @keyframes sakuraFall {
      0% {
        transform: translateY(-20px) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(calc(100vh + 20px)) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes sakuraFloat {
      0%, 100% {
        transform: translateX(0) rotate(0deg);
      }
      25% {
        transform: translateX(-10px) rotate(90deg);
      }
      50% {
        transform: translateX(10px) rotate(180deg);
      }
      75% {
        transform: translateX(-5px) rotate(270deg);
      }
    }

    .sakura-petal {
      position: fixed;
      top: -20px;
      width: 6px;
      height: 6px;
      background: radial-gradient(ellipse at center, #ffb7c5 0%, #ff9fb5 40%, #ff8fa3 100%);
      border-radius: 50% 0 50% 0;
      animation: sakuraFall linear infinite;
      pointer-events: none;
      z-index: 1;
      /* Optimize for mobile performance */
      will-change: transform;
      transform: translateZ(0);
    }

    .sakura-petal:nth-child(odd) {
      animation: sakuraFall linear infinite, sakuraFloat ease-in-out infinite;
      animation-duration: ${isMobile ? '15s, 4s' : '12s, 3s'};
    }

    .sakura-petal:nth-child(even) {
      animation-duration: ${isMobile ? '18s' : '15s'};
    }

    .sakura-petal:nth-child(3n) {
      animation-duration: ${isMobile ? '12s' : '10s'};
      background: radial-gradient(ellipse at center, #ffc1cc 0%, #ffaab9 40%, #ff94a6 100%);
    }

    .sakura-petal:nth-child(4n) {
      animation-duration: ${isMobile ? '20s' : '18s'};
      background: radial-gradient(ellipse at center, #ffd1dc 0%, #ffbac5 40%, #ffa3ae 100%);
    }

    /* Tooltip animations */
    @keyframes tooltipSlideIn {
      0% {
        transform: translateY(-20px) scale(0.9);
        opacity: 0;
      }
      100% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }

    @keyframes tooltipSlideOut {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-20px) scale(0.9);
        opacity: 0;
      }
    }

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    .centered-tooltip.entering {
      animation: ${isMobile ? 'fadeIn 0.3s ease' : 'tooltipSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'};
    }

    .centered-tooltip.exiting {
      animation: ${isMobile ? 'fadeIn 0.2s ease reverse' : 'tooltipSlideOut 0.3s cubic-bezier(0.4, 0, 0.6, 1)'};
    }

    /* FIXED Glowing Button Styles - Enhanced for social buttons */
    .glow-button {
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    /* Base glow effect - always visible */
    .glow-button::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: ${isDark 
        ? 'linear-gradient(135deg, rgba(35, 35, 35, 0.6) 0%, rgba(22, 22, 22, 0.8) 100%)'
        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(243, 244, 246, 0.9) 100%)'};
      box-shadow: ${isDark
        ? '0 0 20px rgba(59, 130, 246, 0.1), inset 0 0 20px rgba(59, 130, 246, 0.1)'
        : '0 0 20px rgba(59, 130, 246, 0.05), inset 0 0 20px rgba(37, 37, 37, 0.05)'};
      z-index: -2;
      pointer-events: none;
    }

    /* FIXED: Enhanced hover glow effect with inner lighting */
    .glow-button::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: ${isDark
        ? 'linear-gradient(135deg,rgb(206, 30, 30) 0%,rgb(204, 77, 22) 100%)'
        : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.3) 50%, rgba(59, 130, 246, 0.2) 100%)'};
      box-shadow: ${isDark
        ? '0 0 30px linear-gradient(135deg,rgb(206, 30, 30) 0%,rgb(204, 77, 22) 100%))'
        : '0 0 25px rgba(59, 130, 246, 0.3), inset 0 0 25px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'};
      opacity: 0;
      z-index: -1;
      pointer-events: none;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    /* Special styling for chat button */
    .glow-button.special-glow::before {
      background: linear-gradient(135deg,rgb(220, 38, 56) 0%,rgb(153, 67, 27) 100%);
      box-shadow: 0 0 20px rgba(220, 38, 38, 0.3), inset 0 0 20px rgba(220, 38, 38, 0.1);
    }

    .glow-button.special-glow::after {
      background: linear-gradient(135deg, rgb(220, 38, 38) 0%,rgb(178, 131, 37) 100%);
      box-shadow: 0 0 40px rgba(220, 38, 38, 0.6), inset 0 0 30px rgba(220, 38, 38, 0.4);
    }

    /* FIXED: Proper hover effects - working for social buttons on all devices */
    @media (hover: hover) and (pointer: fine) {
      .glow-button:hover::after {
        opacity: 1;
        transform: scale(1.02);
      }
      
      .glow-button:hover {
        transform: translateY(-2px);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      /* Enhanced social button hover effects */
      .social-button:hover::after {
        opacity: 1;
        background: ${isDark
          ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(147, 197, 253, 0.5) 50%, rgba(59, 130, 246, 0.4) 100%)'
          : 'linear-gradient(135deg, rgba(8, 8, 8, 0.25) 0%, rgba(147, 197, 253, 0.4) 50%, rgba(59, 130, 246, 0.25) 100%)'};
      }
      
      .social-button:hover {
        transform: translateY(-3px) scale(1.02);
        filter: brightness(1.05);
      }
    }
    
    /* Touch device interactions */
    @media (hover: none) and (pointer: coarse) {
      .social-button:active::after {
        opacity: 0.8;
        background: ${isDark
          ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.4) 50%, rgba(59, 130, 246, 0.3) 100%)'
          : 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.3) 50%, rgba(59, 130, 246, 0.2) 100%)'};
      }
      
      .social-button:active {
        transform: translateY(-1px) scale(1.01);
        transition: transform 0.15s ease;
      }
    }

    /* Enhanced Border glow effects */
    .glow-button-border {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      z-index: -3;
      pointer-events: none;
    }

    .glow-button-border::before {
      content: "";
      position: absolute;
      inset: 0;
      padding: 1px;
      border-radius: inherit;
      background: ${isDark
        ? 'linear-gradient(45deg, rgb(68, 68, 68) 0%, rgb(72, 72, 72) 100%)'
        : 'linear-gradient(45deg, rgba(155, 155, 155, 0.37) 0%, rgba(157, 157, 157, 0.48) 100%)'};
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
    }

    .glow-button-border.special-border::before {
      background: linear-gradient(45deg, rgba(137, 137, 137, 0.6) 0%, rgba(252, 165, 165, 0.4) 50%, rgba(83, 83, 83, 0.6) 100%);
    }

    /* Theme transition optimization */
    .theme-transition {
      transform: translateZ(0);
      will-change: ${isMobile ? 'auto' : 'background-color, color, border-color'};
    }
    
    /* Responsive design */
    @media (min-width: 768px) {
      .resp-title { font-size: 30px; }
      .resp-subtitle { font-size: 14px; }
      .resp-desc { font-size: 14px; }
      .resp-action { font-size: 12px; padding: 6px 16px; }
      .resp-social { padding: 16px 24px; font-size: 18px; }
      .resp-avatar { width: 96px; height: 96px; font-size: 24px; }
      .resp-banner { height: 96px; }
      .resp-content { padding: 32px; }
    }
  `}</style>
);

// Sakura Petals Component - Optimized for mobile
const SakuraPetals = ({ isMobile }) => {
  const generatePetals = () => {
    const petals = [];
    const petalCount = isMobile ? 15 : 25; // Fewer petals on mobile for performance
    
    for (let i = 0; i < petalCount; i++) {
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 20;
      const randomDuration = 12 + Math.random() * 8;
      const randomSize = 4 + Math.random() * 4;
      
      petals.push(
        <div
          key={i}
          className="sakura-petal"
          style={{
            left: `${randomLeft}%`,
            animationDelay: `${randomDelay}s`,
            animationDuration: `${randomDuration}s`,
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      );
    }
    return petals;
  };

  return <>{generatePetals()}</>;
};

// Tooltip Component
// Tooltip Component
const Tooltip = ({ tooltip, onTooltipClick, isMobile }) => (
  <>
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '10001',
      opacity: tooltip.show ? 1 : 0,
      visibility: tooltip.show ? 'visible' : 'hidden',
      transition: isMobile ? 'opacity 0.3s ease, visibility 0.3s ease' : 'opacity 0.4s ease, visibility 0.4s ease',
      pointerEvents: tooltip.show ? 'auto' : 'none',
      padding: '20px'
    }}>
      <div 
        className={`centered-tooltip ${tooltip.show ? 'entering' : 'exiting'}`} 
        onClick={(e) => {
          // Only close if clicking the background, not the links
          if (e.target === e.currentTarget) {
            onTooltipClick();
          }
        }}
        style={{
          background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)',
          color: 'white',
          padding: '24px 32px',
          borderRadius: '16px',
          fontSize: '18px',
          fontWeight: '600',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(220, 38, 38, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: isMobile ? 'none' : 'blur(10px)',
          maxWidth: '420px',
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          transform: tooltip.show ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)',
          transition: isMobile ? 'transform 0.3s ease, opacity 0.3s ease' : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease'
        }}
      >
        <div style={{
          position: 'absolute',
          inset: '-2px',
          background: 'linear-gradient(45deg, #dc2626, #ef4444, #dc2626, #ef4444)',
          borderRadius: '18px',
          opacity: '0.7',
          filter: 'blur(6px)',
          zIndex: '-1'
        }} />
        
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '16px'
        }} />
        
        <div style={{ position: 'relative', zIndex: '1' }}>
          <div style={{
            fontSize: '14px',
            opacity: '0.8',
            fontWeight: '400',
            marginBottom: '8px',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            {tooltip.data?.buttonName}
          </div>
          
          <div style={{
            fontSize: '20px',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
            letterSpacing: '0.5px',
            marginBottom: '12px',
            lineHeight: '1.2'
          }}>
            {tooltip.data?.title}
          </div>
          
          <div style={{
            fontSize: '14px',
            opacity: '0.9',
            fontWeight: '400',
            lineHeight: '1.5',
            color: 'rgba(255, 255, 255, 0.95)',
            marginBottom: tooltip.data?.links ? '20px' : '16px'
          }}>
            {tooltip.data?.description}
          </div>

          {/* Display links if they exist */}
          {tooltip.data?.links && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '20px'
            }}>
              {tooltip.data.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '10px',
                    padding: '12px 20px',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>{link.label}</span>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          )}

          <div 
            onClick={onTooltipClick}
            style={{
              fontSize: '12px',
              opacity: '0.7',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.8)',
              fontStyle: 'italic',
              cursor: 'pointer'
            }}
          >
            Click to close
          </div>
        </div>
      </div>
    </div>

    <div 
      style={{
        position: 'fixed',
        inset: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: '10000',
        opacity: tooltip.show ? 1 : 0,
        visibility: tooltip.show ? 'visible' : 'hidden',
        transition: isMobile ? 'opacity 0.3s ease, visibility 0.3s ease' : 'opacity 0.4s ease, visibility 0.4s ease',
        backdropFilter: isMobile ? 'none' : 'blur(2px)'
      }}
      onClick={onTooltipClick}
    />
  </>
);

// Ambient Lighting Component
const AmbientLighting = ({ theme }) => (
  <>
    <div style={{
      position: 'absolute',
      top: '0',
      left: '25%',
      width: '384px',
      height: '384px',
      background: `radial-gradient(circle, ${theme.glow1} 0%, transparent 70%)`,
      borderRadius: '50%',
      filter: 'blur(80px)'
    }} />
    
    <div style={{
      position: 'absolute',
      bottom: '0',
      right: '25%',
      width: '320px',
      height: '320px',
      background: `radial-gradient(circle, ${theme.glow2} 0%, transparent 70%)`,
      borderRadius: '50%',
      filter: 'blur(80px)'
    }} />
  </>
);

// Banner Component
const Banner = () => {
  const bannerImg = '/banner.jpg';
  
  return (
    <div className="resp-banner" style={{
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      height: '80px',
      borderRadius: '24px 24px 0 0',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: '0.9'
      }} />
    </div>
  );
};

// Glowing Button Component
const GlowButton = ({ children, onClick, className, theme, isMobile, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`glow-button ${className || ''} ${isMobile ? 'mobile-no-transition' : ''}`}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        border: 'none',
        fontSize: '12px',
        fontWeight: '500',
        color: theme.text,
        textAlign: 'center',
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'inherit',
        background: 'transparent',
        ...props.style
      }}
      {...props}
    >
      {children}
      <span className="glow-button-border" />
    </button>
  );
};

// FIXED Social Button Component - Enhanced with proper hover effects
const SocialButton = ({ children, onClick, theme, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`glow-button social-button`}
      style={{
        width: '100%',
        padding: '1rem 1.25rem',
        borderRadius: '1rem',
        border: 'none',
        fontSize: '1rem',
        fontWeight: '600',
        color: theme.text,
        textAlign: 'left',
        position: 'relative',
        cursor: 'pointer',
        fontFamily: 'inherit',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 1,
        // Force hover capability detection
        WebkitTapHighlightColor: 'transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        ...props.style
      }}
      {...props}
    >
      {/* Content with proper z-index */}
      <div style={{position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', flex: 1}}>
        {children}
      </div>
      
      {/* Arrow positioned on the right with hover animation - separate from mobile-no-transition */}
      <div className="social-arrow" style={{position: 'relative', zIndex: 2}}>
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      {/* Border effect */}
      <span className="glow-button-border" style={{borderRadius: '1rem'}} />
    </button>
  );
};

// Profile Header Component
const ProfileHeader = ({ isVisible, onButtonClick, theme, isMobile }) => {
  const logoImg = '/logo.png';
  
  return (
    <div style={{
      textAlign: 'center',
      marginBottom: '32px',
      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-40px) scale(0.9)',
      opacity: isVisible ? '1' : '0',
      transition: isMobile ? 'all 800ms ease' : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{ position: 'relative', margin: '0 auto 24px auto' }}>
        <div className="resp-avatar" style={{
          width: '80px',
          height: '80px',
          backgroundColor: 'white',
          borderRadius: '50%',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.1)',
          border: '2px solid #e5e7eb',
          position: 'relative',
          zIndex: '10',
          fontSize: '20px',
          fontWeight: 'bold',
          color: 'white',
          backgroundImage: `url(${logoImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }} />
      </div>
      
      <h1 className="resp-title" style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: theme.text,
        marginBottom: '8px',
        letterSpacing: '0.025em',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
      }}>
        Thomasian Nihon Kyoukai
      </h1>
      
      <p className="resp-subtitle" style={{
        color: theme.textSecondary,
        fontSize: '12px',
        marginBottom: '12px',
        fontWeight: '500'
      }}>
        University of Santo Tomas
      </p>
      
      <p className="resp-desc" style={{
        color: theme.textMuted,
        fontSize: '14px',
        maxWidth: '360px',
        margin: '0 auto',
        lineHeight: '1.6',
        marginBottom: '16px'
      }}>
        The official student organization in UST that promotes traditional and modern Japanese culture.
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '8px',
        marginBottom: '8px'
      }}>
        <GlowButton 
          onClick={() => onButtonClick('Membership Application')}
          theme={theme}
          isMobile={isMobile}
          className="resp-action"
        >
          Membership Application
        </GlowButton>
        
        <GlowButton 
          onClick={() => onButtonClick('Partner & Sponsorship')}
          theme={theme}
          isMobile={isMobile}
          className="resp-action"
        >
          Partner & Sponsorship
        </GlowButton>
      </div>
    </div>
  );
};

// Social Links Component
const SocialLinks = ({ isVisible, onLinkClick, theme, isMobile }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    position: 'relative',
    zIndex: '10'
  }}>
    {socialLinks.map((link, index) => {
      const IconComponent = link.icon;
      return (
        <div
          key={link.name}
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            opacity: isVisible ? '1' : '0',
            transition: isMobile ? 'all 600ms ease' : 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: `${(index + 1) * 150}ms`
          }}
        >
          <SocialButton
            onClick={() => onLinkClick(link.url)}
            theme={theme}
            isMobile={isMobile}
            className="resp-social"
          >
            {/* Left side content */}
            <div style={{display: 'flex', alignItems: 'center'}}>
              <IconComponent size={20} style={{marginRight: '12px'}} />
              <span>{link.name}</span>
            </div>
          </SocialButton>
        </div>
      );
    })}
  </div>
);

// Current Events Component
const CurrentEvents = ({ isVisible, theme, isMobile }) => (
  <div style={{
    marginTop: '32px',
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    opacity: isVisible ? '1' : '0',
    transition: isMobile ? 'all 800ms ease' : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '800ms',
    position: 'relative',
    zIndex: '10'
  }}>
    <h2 style={{
      fontSize: '20px',
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: '16px',
      textAlign: 'center',
      letterSpacing: '0.025em',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
    }}>
      Current Events
    </h2>
    
    <div style={{
      backgroundColor: theme.cardBg,
      border: `1px solid ${theme.border}`,
      borderRadius: '16px',
      padding: '24px',
      textAlign: 'center',
      boxShadow: `0 4px 16px ${theme.lightShadow}`
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          background: '#dc2626',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: '0.7'
        }}>
          <svg width="24" height="24" style={{color: 'white'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        
        <p style={{color: theme.textMuted, fontSize: '14px', margin: '0'}}>
          No current events for now
        </p>
        
        <p style={{color: theme.textSubtle, fontSize: '12px', margin: '0'}}>
          Check back later for upcoming registrations
        </p>
      </div>
    </div>
  </div>
);

// Footer Component
const Footer = ({ isVisible, theme, isMobile }) => (
  <div style={{
    textAlign: 'center',
    marginTop: '32px',
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    opacity: isVisible ? '1' : '0',
    transition: isMobile ? 'all 800ms ease' : 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '1200ms',
    position: 'relative',
    zIndex: '10'
  }}>
    <div style={{
      borderTop: `1px solid ${theme.border}`,
      paddingTop: '16px',
      marginTop: '16px'
    }}>
      <p style={{color: theme.textSubtle, fontSize: '12px', lineHeight: '1.6', margin: '0 0 4px 0'}}>
        © 2025 Office of the Director of Communications
      </p>
      <p style={{color: theme.textSecondary, fontWeight: '500', fontSize: '12px', margin: '0'}}>
        Thomasian Nihon Kyoukai
      </p>
    </div>
  </div>
);

// Main App Component
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltip, setTooltip] = useState({ show: false, data: null });
  const [isDark, setIsDark] = useState(true);
  
  // Mobile detection 
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    // Detect mobile 
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
      console.log('Mobile detected:', mobile); // Debug log to verify detection
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Memoized theme selection
  const theme = useMemo(() => isDark ? darkTheme : lightTheme, [isDark]);

  // Instant theme toggle for mobile
  const toggleTheme = () => {
    if (isMobile) {
      // Force immediate update on mobile
      document.body.style.transition = 'none';
      setIsDark(!isDark);
      requestAnimationFrame(() => {
        document.body.style.transition = '';
      });
    } else {
      setIsDark(!isDark);
    }
  };

  const handleMessengerClick = () => {
    const facebookLink = socialLinks.find(link => link.name === 'Facebook')?.url || 'https://www.facebook.com/UST.TNK/';
    window.open(facebookLink, '_blank', 'noopener,noreferrer');
  };

  const handleShareClick = () => {
    const shareUrl = 'https://www.kizuna-tree.online/';
    
    if (navigator.share) {
      navigator.share({
        title: 'Thomasian Nihon Kyoukai - TNK',
        text: 'Check out the official student organization in UST that promotes traditional and modern Japanese culture.',
        url: shareUrl
      }).catch(console.error);
    } else {
      
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareUrl).then(() => {
        
        alert('Link copied to clipboard!');
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Link copied to clipboard!');
      });
    }
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
const handleButtonClick = (buttonType) => {
  let tooltipData;
  
  if (buttonType === 'Membership Application') {
    tooltipData = {
      buttonName: 'Membership Application',
      title: 'Applications are now open!',
      description: 'Choose your application type:',
      links: [
        {
          label: 'Apply for Membership',
          url: 'https://forms.gle/KSevfUop966rjCpQ7'
        },
        {
          label: 'Apply for Staff Position',
          url: 'https://forms.gle/JxeFRkTyF8YDiGpv7'
        }
      ]
    };
    } else {
      tooltipData = {
        buttonName: 'Partner and Sponsorship',
        title: 'Interest Check',
        description: 'For Sponsorship and Partnership interests, kindly reach on to us via Facebook messenger for discussions and applications.'
      };
    }
    
    setTooltip({
      show: true,
      data: tooltipData
    });

    setTimeout(() => {
      setTooltip(prev => ({ ...prev, show: false }));
    }, 6000);
  };

  const handleTooltipClick = () => {
    setTooltip(prev => ({ ...prev, show: false }));
  };

  return (
    <>
      <StaticStyles isMobile={isMobile} isDark={isDark} />
      
      <Header 
        isDark={isDark} 
        onToggle={toggleTheme} 
        onMessengerClick={handleMessengerClick}
        onShareClick={handleShareClick}
        isMobile={isMobile}
        theme={theme}
      />

      <div style={{
        minHeight: '100vh',
        background: theme.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        paddingTop: '60px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        transform: 'translateZ(0)',
        transition: isMobile ? 'none' : 'background-color 0.3s ease'
      }}>

        <SakuraPetals isMobile={isMobile} />
        <Tooltip tooltip={tooltip} onTooltipClick={handleTooltipClick} isMobile={isMobile} />
        <AmbientLighting theme={theme} />
          
        <div style={{
          width: '100%',
          maxWidth: '448px',
          margin: '0 auto',
          position: 'relative'
        }}>
          <div className="glass-card" style={{
            position: 'relative',
            background: theme.cardBg,
            borderRadius: '24px',
            border: `1px solid ${theme.border}`,
            boxShadow: `0 25px 50px -12px ${theme.shadow}`,
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: '0',
              borderRadius: '24px',
              background: theme.innerGrad
            }} />
            
            <div style={{
              position: 'absolute',
              inset: '0',
              borderRadius: '24px',
              background: theme.topGrad,
              opacity: '0.6'
            }} />
            
            <Banner />
            
            <div className="resp-content" style={{
              position: 'relative',
              zIndex: '10',
              padding: '24px'
            }}>
              <ProfileHeader isVisible={isVisible} onButtonClick={handleButtonClick} theme={theme} isMobile={isMobile} />
              <SocialLinks isVisible={isVisible} onLinkClick={handleLinkClick} theme={theme} isMobile={isMobile} />
              <CurrentEvents isVisible={isVisible} theme={theme} isMobile={isMobile} />
              <Footer isVisible={isVisible} theme={theme} isMobile={isMobile} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;