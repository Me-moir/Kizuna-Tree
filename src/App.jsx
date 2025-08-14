import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Mail, Twitter, Youtube, Music } from 'lucide-react';
import bannerImg from '/banner.jpg';
import logoImg from '/logo.png';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltip, setTooltip] = useState({ show: false, data: null });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const links = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/ust_tnk?igsh=MXUxMXJ3ajBjNG51ag==',
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

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleButtonClick = (buttonType) => {
    let tooltipData;
    
    if (buttonType === 'Membership Application') {
      tooltipData = {
        buttonName: 'Membership Application',
        title: 'Applications are still closed.',
        description: 'Please stay tuned for University-wide Recruitment 101 in September. Official announcements will also follow.'
      };
    } else {
      tooltipData = {
        buttonName: 'Partner and Sponsorship',
        title: 'Processing',
        description: 'We are currently processing the necessary documents, please come back later.'
      };
    }
    
    setTooltip({
      show: true,
      data: tooltipData
    });

    setTimeout(() => {
      setTooltip(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleTooltipClick = () => {
    setTooltip(prev => ({ ...prev, show: false }));
  };

  // Light theme with peachy pink background and red highlights
  const theme = {
    background: '#fdf2f8', // peachy pink background
    cardBg: 'rgba(255, 255, 255, 0.9)',
    text: '#1f2937',
    textSecondary: '#dc2626', // plain red
    textMuted: '#4b5563',
    textSubtle: '#6b7280',
    border: 'rgba(0, 0, 0, 0.1)',
    buttonHover: 'rgba(220, 38, 38, 0.05)',
    shadow: 'rgba(0, 0, 0, 0.1)',
    lightShadow: 'rgba(0, 0, 0, 0.05)',
    glow1: 'rgba(252, 165, 165, 0.3)',
    glow2: 'rgba(254, 202, 202, 0.3)',
    shine: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
    innerGrad: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, transparent 50%, rgba(252, 165, 165, 0.1) 100%)',
    topGrad: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%, transparent 100%)'
  };

  // Static CSS for better performance
  const staticCSS = `
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    @keyframes shine {
      0% { transform: translateX(-100%) skewX(-12deg); }
      100% { transform: translateX(200%) skewX(-12deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

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

    .action-btn {
      transform: translateZ(0);
      will-change: transform;
      transition: transform 0.15s ease, background-color 0.15s ease;
    }

    .action-btn:hover {
      transform: scale(1.05) translateY(-2px);
    }

    .action-btn:active {
      transform: scale(0.95);
    }

    .social-btn {
      transform: translateZ(0);
      will-change: transform;
      transition: transform 0.15s ease, background-color 0.15s ease;
    }

    .social-btn:hover {
      transform: scale(1.02) translateY(-2px);
    }

    .social-btn:active {
      transform: scale(0.98);
    }

    .centered-tooltip.entering {
      animation: tooltipSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .centered-tooltip.exiting {
      animation: tooltipSlideOut 0.3s cubic-bezier(0.4, 0, 0.6, 1);
    }

    /* Remove backdrop-filter for better mobile performance */
    .glass-card {
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }

    @media (min-width: 768px) {
      .resp-title { font-size: 30px; }
      .resp-subtitle { font-size: 18px; }
      .resp-desc { font-size: 14px; }
      .resp-action { font-size: 14px; padding: 8px 24px; }
      .resp-social { padding: 16px 24px; font-size: 18px; }
      .resp-avatar { width: 96px; height: 96px; font-size: 24px; }
      .resp-banner { height: 96px; }
      .resp-content { padding: 32px; }
      
      /* Enable backdrop-filter only on desktop */
      .glass-card {
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }
    }
  `;

  return (
    <>
      <style>{staticCSS}</style>
      <div style={{
        minHeight: '100vh',
        background: theme.background,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        transform: 'translateZ(0)'
      }}>
        {/* Centered Tooltip */}
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: '1001',
          opacity: tooltip.show ? 1 : 0,
          visibility: tooltip.show ? 'visible' : 'hidden',
          transition: 'opacity 0.4s ease, visibility 0.4s ease',
          pointerEvents: tooltip.show ? 'auto' : 'none',
          padding: '20px'
        }}>
          <div 
            className={`centered-tooltip ${tooltip.show ? 'entering' : 'exiting'}`} 
            onClick={handleTooltipClick}
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
              backdropFilter: 'blur(10px)',
              maxWidth: '400px',
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transform: tooltip.show ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.9)',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease'
            }}
          >
            {/* Glowing border effect */}
            <div style={{
              position: 'absolute',
              inset: '-2px',
              background: 'linear-gradient(45deg, #dc2626, #ef4444, #dc2626, #ef4444)',
              borderRadius: '18px',
              opacity: '0.7',
              filter: 'blur(6px)',
              zIndex: '-1'
            }} />
            
            {/* Inner glow */}
            <div style={{
              position: 'absolute',
              inset: '0',
              background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
              borderRadius: '16px'
            }} />
            
            {/* Content */}
            <div style={{ position: 'relative', zIndex: '1' }}>
              {/* Button Name (smaller text at top) */}
              <div style={{
                fontSize: '14px',
                opacity: '0.8',
                fontWeight: '400',
                marginBottom: '8px',
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                {tooltip.data?.buttonName}
              </div>
              
              {/* Main Title */}
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
              
              {/* Description */}
              <div style={{
                fontSize: '14px',
                opacity: '0.9',
                fontWeight: '400',
                lineHeight: '1.5',
                color: 'rgba(255, 255, 255, 0.95)',
                marginBottom: '16px'
              }}>
                {tooltip.data?.description}
              </div>

              {/* Click to close hint */}
              <div style={{
                fontSize: '12px',
                opacity: '0.7',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.8)',
                fontStyle: 'italic'
              }}>
                Click to close
              </div>
            </div>
          </div>
        </div>

        {/* Overlay when tooltip is shown */}
        <div 
          style={{
            position: 'fixed',
            inset: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: '1000',
            opacity: tooltip.show ? 1 : 0,
            visibility: tooltip.show ? 'visible' : 'hidden',
            transition: 'opacity 0.4s ease, visibility 0.4s ease',
            backdropFilter: 'blur(2px)'
          }}
          onClick={handleTooltipClick}
        />

        {/* Ambient lighting effects */}
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
        
        <div style={{
          width: '100%',
          maxWidth: '448px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Main Container */}
          <div className="glass-card" style={{
            position: 'relative',
            background: theme.cardBg,
            borderRadius: '24px',
            border: `1px solid ${theme.border}`,
            boxShadow: `0 25px 50px -12px ${theme.shadow}`,
            overflow: 'hidden'
          }}>
            {/* Shine animation */}
            <div style={{
              position: 'absolute',
              inset: '0',
              opacity: '0.5',
              pointerEvents: 'none',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                inset: '0',
                background: theme.shine,
                transform: 'skewX(-12deg)',
                width: '100%',
                height: '100%',
                animation: 'shine 3s infinite'
              }} />
            </div>
            
            {/* Inner effects */}
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
            
            {/* Banner */}
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
            
            {/* Content Container */}
            <div className="resp-content" style={{
              position: 'relative',
              zIndex: '10',
              padding: '24px'
            }}>
              {/* Header Section */}
              <div style={{
                textAlign: 'center',
                marginBottom: '32px',
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(-40px) scale(0.9)',
                opacity: isVisible ? '1' : '0',
                transition: 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}>
                {/* Avatar */}
                <div style={{
                  position: 'relative',
                  margin: '0 auto 24px auto'
                }}>
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
                  fontSize: '16px',
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

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '8px'
                }}>
                  <button 
                    onClick={(e) => handleButtonClick('Membership Application', e)}
                    className="action-btn resp-action"
                    style={{
                      backgroundColor: theme.cardBg,
                      border: `1px solid ${theme.border}`,
                      color: theme.text,
                      fontSize: '12px',
                      fontWeight: '500',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = theme.buttonHover}
                    onMouseLeave={(e) => e.target.style.backgroundColor = theme.cardBg}
                  >
                    Membership Application
                  </button>
                  
                  <button 
                    onClick={(e) => handleButtonClick('Partner & Sponsorship', e)}
                    className="action-btn resp-action"
                    style={{
                      backgroundColor: theme.cardBg,
                      border: `1px solid ${theme.border}`,
                      color: theme.text,
                      fontSize: '12px',
                      fontWeight: '500',
                      padding: '8px 16px',
                      borderRadius: '12px',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = theme.buttonHover}
                    onMouseLeave={(e) => e.target.style.backgroundColor = theme.cardBg}
                  >
                    Partner & Sponsorship
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                position: 'relative',
                zIndex: '10'
              }}>
                {links.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <div
                      key={link.name}
                      style={{
                        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                        opacity: isVisible ? '1' : '0',
                        transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDelay: `${(index + 1) * 150}ms`
                      }}
                    >
                      <button
                        onClick={() => handleLinkClick(link.url)}
                        className="social-btn resp-social"
                        style={{
                          width: '100%',
                          backgroundColor: theme.cardBg,
                          border: `1px solid ${theme.border}`,
                          color: theme.text,
                          fontWeight: '600',
                          fontSize: '16px',
                          padding: '12px 16px',
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          position: 'relative',
                          overflow: 'hidden',
                          boxShadow: `0 4px 16px 0 ${theme.lightShadow}`,
                          cursor: 'pointer',
                          fontFamily: 'inherit'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = theme.buttonHover;
                          e.target.style.color = theme.textSecondary;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = theme.cardBg;
                          e.target.style.color = theme.text;
                        }}
                      >
                        <div style={{display: 'flex', alignItems: 'center', position: 'relative', zIndex: '10'}}>
                          <IconComponent size={20} style={{marginRight: '12px'}} />
                          <span>{link.name}</span>
                        </div>
                        
                        <div style={{position: 'relative', zIndex: '10'}}>
                          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Current Events Section */}
              <div style={{
                marginTop: '32px',
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                opacity: isVisible ? '1' : '0',
                transition: 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
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

              {/* Footer */}
              <div style={{
                textAlign: 'center',
                marginTop: '32px',
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                opacity: isVisible ? '1' : '0',
                transition: 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)',
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;