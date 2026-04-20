import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, Tag } from 'lucide-react';
import { destinations } from '../data/mockData';

/* ──────────────────────────────────────────────
   PackageCard — Premium dark card with:
   • Full-bleed image with a gradient to black
   • Floating "Vagas Limitadas" badge (glassmorphic)
   • Tag pills for included features
   • High-contrast price with carnê branding
   • Teal CTA that glows on hover
   ────────────────────────────────────────────── */
const PackageCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`animate-fadein-up animate-delay-${index + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderRadius: '24px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? 'rgba(42,188,182,0.35)' : 'var(--border-subtle)'}`,
        boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(42,188,182,0.1)' : 'var(--shadow-md)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Image Block */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
        />

        {/* Image bottom gradient */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(24,35,46,1) 0%, rgba(24,35,46,0.3) 50%, transparent 100%)',
        }} />

        {/* "Vagas Limitadas" glassmorphic badge */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'rgba(13,17,21,0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(244,124,32,0.4)',
          borderRadius: '100px',
          padding: '5px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--orange)', display: 'inline-block' }} />
          <span style={{ font: '600 0.72rem Outfit', color: 'var(--orange-light)', letterSpacing: '1px', textTransform: 'uppercase' }}>
            Vagas Limitadas
          </span>
        </div>

        {/* Date chip */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'rgba(255,255,255,0.85)',
          fontSize: '0.82rem',
          fontWeight: 500,
        }}>
          <Calendar size={13} style={{ color: 'var(--orange)' }} />
          {item.date}
        </div>
      </div>

      {/* Content Block */}
      <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Destination Name */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
          <MapPin size={16} style={{ color: 'var(--orange)', marginTop: '4px', flexShrink: 0 }} />
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.25 }}>
            {item.title}
          </h3>
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.7 }}>
          {item.description}
        </p>

        {/* Feature Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
          {item.tags.map((tag, i) => (
            <span key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(42,188,182,0.07)',
              border: '1px solid rgba(42,188,182,0.15)',
              borderRadius: '100px',
              padding: '4px 12px',
              fontSize: '0.75rem',
              color: 'var(--teal-light)',
              fontWeight: 500,
            }}>
              <Tag size={10} /> {tag}
            </span>
          ))}
        </div>

        {/* Price Block */}
        <div style={{
          marginTop: 'auto',
          padding: '18px',
          background: 'rgba(13,17,21,0.6)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
        }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>
            No carnê apenas:
          </div>
          <div style={{
            fontFamily: 'Outfit',
            fontWeight: 900,
            fontSize: '1.8rem',
            color: '#fff',
            lineHeight: 1,
            marginBottom: '4px',
          }}>
            {item.price}
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '18px' }}>
            Total: <span style={{ color: 'var(--sertao-sand)' }}>{item.totalPrice}</span>
          </div>

          <a
            href="https://wa.me/5585999999999"
            className="btn btn-secondary"
            style={{ width: '100%', fontSize: '0.9rem', padding: '13px 20px' }}
          >
            Quero Reservar <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────
   Section header separator — regional "sol" icon
   ────────────────────────────────────────────── */
const Packages = () => (
  <section id="pacotes" className="section-padding" style={{ background: 'var(--bg-deep)' }}>
    <div className="container">
      {/* Section Header */}
      <div className="text-center" style={{ marginBottom: '70px' }}>
        <div className="badge">🗺️ NOSSAS VIAGENS</div>

        <h2 style={{
          font: '800 clamp(2rem,4vw,3rem) Outfit',
          letterSpacing: '-1px',
          marginBottom: '16px',
          background: 'linear-gradient(135deg, #fff 40%, var(--teal-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Próximas Saídas
        </h2>

        {/* Decorative gradient underline */}
        <div style={{
          width: '80px',
          height: '3px',
          background: 'linear-gradient(90deg, var(--teal), var(--orange))',
          borderRadius: '2px',
          margin: '0 auto 20px',
        }} />

        <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.8 }}>
          Escolha o seu próximo destino e pague aos poucos. Pacotes criados para o máximo de conforto com o menor custo.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px',
      }}>
        {destinations.map((item, i) => (
          <PackageCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
          Não encontrou o destino ideal?
        </p>
        <a href="https://wa.me/5585999999999" className="btn btn-ghost">
          Consultar outros roteiros
        </a>
      </div>
    </div>
  </section>
);

export default Packages;
