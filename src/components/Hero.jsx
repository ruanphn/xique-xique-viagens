import React from 'react';
import { ArrowDown, Star, Users, MapPin } from 'lucide-react';

/* ──────────────────────────────────────────────────────────────
   HERO — Full-bleed Nordeste
   Layout: split 55/45 — copy esquerda | imagem colagem direita
   Bg: foto panorâmica de praia nordestina com overlay escuro
   ────────────────────────────────────────────────────────────── */

/* Thumbnail de destino flutuando à direita */
const DestinationThumb = ({ src, label, price, style }) => (
  <div
    style={{
      position: 'absolute',
      borderRadius: '18px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.7)',
      border: '1px solid rgba(255,255,255,0.12)',
      animation: 'float 5s ease-in-out infinite',
      ...style,
    }}
  >
    <img
      src={src}
      alt={label}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
    {/* Label glass pill at bottom */}
    <div style={{
      position: 'absolute',
      bottom: 0, left: 0, right: 0,
      background: 'linear-gradient(to top, rgba(13,17,19,0.95), transparent)',
      padding: '20px 14px 12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
          <MapPin size={10} style={{ color: 'var(--orange)' }} />
          <span style={{ fontSize: '0.7rem', color: '#ffffff', letterSpacing: '0.5px' }}>
            {label}
          </span>
        </div>
        <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>
          {price}
        </div>
      </div>
      <div style={{
        background: 'var(--teal)',
        borderRadius: '100px',
        padding: '3px 10px',
        fontSize: '0.65rem',
        fontWeight: 700,
        color: '#fff',
        letterSpacing: '0.5px',
      }}>
        NO CARNÊ
      </div>
    </div>
  </div>
);

/* Stat badge flutuante */
const FloatBadge = ({ value, label, style }) => (
  <div
    style={{
      position: 'absolute',
      background: 'rgba(13,17,21,0.75)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(42,188,182,0.3)',
      borderRadius: '14px',
      padding: '12px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
      animation: 'float 4s ease-in-out infinite',
      zIndex: 5,
      ...style,
    }}
  >
    <div style={{
      width: '36px', height: '36px', borderRadius: '10px',
      background: 'linear-gradient(135deg, rgba(42,188,182,0.3), rgba(42,188,182,0.1))',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--teal-light)', fontSize: '1rem', fontWeight: 800,
      flexShrink: 0,
    }}>
      {value}
    </div>
    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
      {label}
    </span>
  </div>
);

const Hero = () => (
  <section
    id="inicio"
    style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: '#090D11',
    }}
  >
    {/* ── BACKGROUND: Imagem Real e Ensolarada do Nordeste ── */}
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://imgmd.net/images/v1/guia/1698589/nordeste-6-cat.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.55,
        zIndex: 0,
      }}
    />

    {/* Camadas de overlay - Suavizadas para dar vida à imagem de fundo */}
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to right, rgba(9,13,17,0.96) 0%, rgba(9,13,17,0.7) 45%, rgba(9,13,17,0.1) 100%)',
      zIndex: 1,
    }} />
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(to top, rgba(9,13,17,1) 0%, transparent 40%)',
      zIndex: 1,
    }} />

    {/* ── CONTENT GRID ── */}
    <div
      className="container"
      style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        paddingTop: '140px',
        paddingBottom: '100px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}
    >
      {/* ── LEFT COL: Copy ── */}
      <div>
        {/* Badge */}
        <div className="badge animate-fadein-up" style={{ marginBottom: '24px' }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: 'var(--teal)', display: 'inline-block',
            boxShadow: '0 0 10px var(--teal)',
          }} />
          TURISMO REAL E ACESSÍVEL
        </div>

        {/* Headline */}
        <h1
          className="animate-fadein-up animate-delay-1"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(3rem, 5vw, 4.8rem)',
            lineHeight: 0.95,
            letterSpacing: '-3px',
            marginBottom: '22px',
            color: '#fff',
            textShadow: '0 10px 40px rgba(0,0,0,0.9)',
          }}
        >
          Você merece{' '}<br />
          <span style={{
            background: 'linear-gradient(90deg, var(--teal-light), #fff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            realizar seus sonhos.
          </span>
        </h1>

        {/* Sub headline */}
        <p
          className="animate-fadein-up animate-delay-2"
          style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.92)',
            marginBottom: '40px',
            maxWidth: '520px',
            lineHeight: 1.7,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}
        >
          Do mar cristalino à paz da serra. Realize suas viagens parceladas no carnê, com o respeito que você merece e sem burocracia.{' '}
          <strong style={{ color: 'var(--teal-light)', fontWeight: 700 }}>
            Sem cartão de crédito.
          </strong>
        </p>

        {/* CTAs */}
        <div
          className="animate-fadein-up animate-delay-3"
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}
        >
          <a href="#pacotes" className="btn btn-secondary" style={{ padding: '20px 42px', fontSize: '1.1rem', fontWeight: 700 }}>
            Ver Destinos Reais
          </a>
          <a href="#carne" className="btn btn-ghost" style={{ padding: '20px 42px', fontSize: '1.1rem', backdropFilter: 'blur(10px)' }}>
            Como funciona?
          </a>
        </div>

        {/* Social Proof */}
        <div className="animate-fadein-up animate-delay-4" style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/80?u=user${i + 20}`} alt="Cliente" style={{ width: '42px', height: '42px', borderRadius: '50%', border: '3px solid #090D11', marginLeft: i === 1 ? 0 : '-15px', zIndex: 5 - i }} />
            ))}
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--teal)', border: '3px solid #090D11', marginLeft: '-15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 800, zIndex: 0 }}>+12k</div>
          </div>
          <div>
            <div style={{ display: 'flex', gap: '2px', color: 'var(--orange)', marginBottom: '4px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--orange)" />)}
            </div>
            <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>A agência de viagens mais amada do Nordeste</div>
          </div>
        </div>
      </div>

      {/* ── RIGHT COL: Destination Cards ── */}
      <div
        className="hero-right"
        style={{
          position: 'relative',
          height: '560px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Card 1 — Jericoacoara */}
        <DestinationThumb
          src="https://pousadaangelica.com.br/wp-content/webp-express/webp-images/uploads/2023/06/pousadaangelica-pedra-furada.jpg.webp"
          label="Jericoacoara, CE"
          price="12x R$ 89,90"
          style={{
            width: '320px', height: '420px',
            top: '-20px', left: '-10px',
            animationDuration: '6s',
            zIndex: 3,
          }}
        />

        {/* Card 2 — Pipa */}
        <DestinationThumb
          src="https://www.viajaquepassa.com.br/wp-content/uploads/2021/02/Baia_dos_golfinhos_pipa-895x470.png"
          label="Pipa, RN"
          price="10x R$ 39,90"
          style={{
            width: '260px', height: '320px',
            bottom: '-50px', right: '-30px',
            animationDuration: '7s',
            animationDelay: '1s',
            zIndex: 4,
          }}
        />

        {/* Card 3 — Serra */}
        <DestinationThumb
          src="https://gastronomiasocial.org.br/wp-content/uploads/2024/07/Guaramiranga-2.webp"
          label="Guaramiranga, CE"
          price="8x R$ 45,00"
          style={{
            width: '200px', height: '240px',
            top: '40px', right: '40px',
            animationDuration: '8s',
            animationDelay: '2s',
            zIndex: 2,
          }}
        />

        {/* Floating Badges */}
        <FloatBadge
          value={<Users size={16} style={{ color: 'var(--orange)' }} />}
          label="Vagas quase esgotadas!"
          style={{ top: '20px', right: '-10px', animationDuration: '6s', animationDelay: '0.5s', border: '1px solid rgba(244,124,32,0.5)' }}
        />
      </div>
    </div>

    {/* Scroll indicator */}
    <a
      href="#pacotes"
      aria-label="Rolar para os pacotes"
      style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        color: 'rgba(255,255,255,0.35)',
        fontSize: '0.68rem',
        letterSpacing: '2.5px',
        textTransform: 'uppercase',
        zIndex: 2,
        textDecoration: 'none',
        animation: 'float 2.5s ease-in-out infinite',
      }}
    >
      <span>Explorar</span>
      <ArrowDown size={15} />
    </a>

    <style>{`
      @media (max-width: 900px) {
        #inicio .hero-right { display: none; }
        #inicio > div[class="container"] {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </section>
);

export default Hero;
