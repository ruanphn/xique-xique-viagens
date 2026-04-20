import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on link click
  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  const navLinks = [
    { href: '#inicio', label: 'Início', id: 'inicio' },
    { href: '#pacotes', label: 'Pacotes', id: 'pacotes' },
    { href: '#carne', label: 'Como Funciona', id: 'carne' },
    { href: '#depoimentos', label: 'Depoimentos', id: 'depoimentos' },
  ];

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '10px 0' : '18px 0',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: scrolled
          ? 'rgba(13, 17, 21, 0.92)'
          : 'linear-gradient(to bottom, rgba(13,17,21,0.95), rgba(13,17,21,0))',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(42,188,182,0.15), 0 4px 20px rgba(0,0,0,0.4)' : 'none',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo */}
          <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none' }}>
            <div style={{ position: 'relative' }}>
              <img
                src="/logo.png"
                alt="Xique Xique Viagens"
                style={{
                  width: scrolled ? '38px' : '44px',
                  height: scrolled ? '38px' : '44px',
                  objectFit: 'contain',
                  transition: 'all 0.4s ease',
                  filter: 'drop-shadow(0 0 8px rgba(42,188,182,0.4))'
                }}
              />
            </div>
            <div style={{ lineHeight: 1 }}>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 800,
                fontSize: scrolled ? '1.1rem' : '1.25rem',
                letterSpacing: '-0.5px',
                color: '#fff',
                transition: 'all 0.4s ease'
              }}>
                <div style={{ color: 'var(--orange)' }}>
                  X<span style={{ color: 'var(--teal-light)' }}>IQUE</span>
                </div>
                <div style={{ color: 'var(--teal-light)', marginTop: '-8px', paddingLeft: '9px' }}>
                  X<span style={{ color: 'var(--orange)' }}>IQUE</span>
                </div>
              </div>
              <div style={{
                fontSize: '0.65rem',
                letterSpacing: '3px',
                color: '#fff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                marginTop: '2px'
              }}>
                VIAGENS e TURISMO
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {navLinks.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                onClick={() => handleNavClick(id)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '100px',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  color: activeSection === id ? 'var(--teal-light)' : 'var(--text-secondary)',
                  backgroundColor: activeSection === id ? 'rgba(42,188,182,0.1)' : 'transparent',
                  border: activeSection === id ? '1px solid rgba(42,188,182,0.2)' : '1px solid transparent',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  if (activeSection !== id) {
                    e.target.style.color = 'var(--text-primary)';
                    e.target.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeSection !== id) {
                    e.target.style.color = 'var(--text-secondary)';
                    e.target.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="https://wa.me/5585999999999"
              className="btn btn-secondary"
              style={{ marginLeft: '12px', padding: '10px 22px', fontSize: '0.88rem' }}
            >
              <Phone size={15} /> Reservar Agora
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'none',
              background: 'rgba(42,188,182,0.1)',
              border: '1px solid rgba(42,188,182,0.25)',
              borderRadius: '10px',
              padding: '8px',
              cursor: 'pointer',
              color: 'var(--teal-light)',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Nav */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(13,17,21,0.97)',
          backdropFilter: 'blur(24px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          animation: 'fadeInUp 0.3s ease both',
        }}>
          {/* Decorative blob */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(42,188,182,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <img src="/logo.png" alt="Logo" style={{ width: '70px', opacity: 0.9 }} />

          {navLinks.map(({ href, label, id }) => (
            <a
              key={id}
              href={href}
              onClick={() => handleNavClick(id)}
              style={{
                fontSize: '1.8rem',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                color: activeSection === id ? 'var(--teal-light)' : 'var(--text-secondary)',
                letterSpacing: '-0.5px',
                transition: 'all 0.2s ease',
              }}
            >
              {label}
            </a>
          ))}

          <a href="https://wa.me/5585999999999" className="btn btn-secondary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
            <Phone size={18} /> Fale pelo WhatsApp
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
