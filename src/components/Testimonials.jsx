import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials, experienceReports } from '../data/mockData';

/* ──────────────────────────────────────────────
   ExperienceCard — immersive photo cards with:
   • Full bleed image
   • Dual gradient overlay (dark bottom + colored top)
   • Author info positioned at bottom-left
   ────────────────────────────────────────────── */
const ExperienceCard = ({ report }) => (
  <div style={{
    position: 'relative',
    height: '340px',
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid var(--border-subtle)',
    cursor: 'pointer',
    transition: 'all 0.35s ease',
  }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'scale(1.02)';
      e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.6)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {/* Background photo */}
    <img
      src={report.image}
      alt={report.title}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      loading="lazy"
    />

    {/* Gradient overlays */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,17,21,0.97) 0%, rgba(13,17,21,0.4) 55%, rgba(13,17,21,0.1) 100%)' }} />
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(140deg, rgba(42,188,182,0.08) 0%, transparent 60%)' }} />

    {/* Content */}
    <div style={{ position: 'absolute', inset: 0, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 2 }}>
      {/* Quote icon */}
      <Quote size={28} style={{ color: 'var(--teal)', opacity: 0.7, marginBottom: '14px' }} />

      <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.3rem', color: '#fff', marginBottom: '10px', lineHeight: 1.2 }}>
        &ldquo;{report.title}&rdquo;
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', marginBottom: '20px', lineHeight: 1.6 }}>
        {report.snippet}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>
          {report.author.charAt(0)}
        </div>
        <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>
          {report.author}
        </span>
      </div>
    </div>
  </div>
);

/* ──────────────────────────────────────────────
   TestimonialCard — minimal dark card with
   warm "cordel" paper tone and gold stars
   ────────────────────────────────────────────── */
const TestimonialCard = ({ t }) => (
  <div style={{
    backgroundColor: 'var(--bg-surface)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '20px',
    padding: '32px',
    position: 'relative',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(42,188,182,0.25)';
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'var(--border-subtle)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {/* Decorative large quote */}
    <div aria-hidden="true" style={{
      position: 'absolute',
      top: 16, right: 20,
      fontFamily: 'Playfair Display, serif',
      fontSize: '5rem',
      lineHeight: 1,
      color: 'rgba(42,188,182,0.07)',
      userSelect: 'none',
    }}>
      "
    </div>

    {/* Stars */}
    <div style={{ display: 'flex', gap: '3px', color: 'var(--orange)', marginBottom: '18px' }}>
      {[...Array(t.rating)].map((_, i) => (
        <Star key={i} size={15} fill="var(--orange)" />
      ))}
      {t.rating < 5 && [...Array(5 - t.rating)].map((_, i) => (
        <Star key={`e-${i}`} size={15} style={{ opacity: 0.2 }} />
      ))}
    </div>

    {/* Quote text */}
    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontStyle: 'italic', flexGrow: 1, marginBottom: '24px' }}>
      &ldquo;{t.content}&rdquo;
    </p>

    {/* Author row */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
      <img
        src={t.avatar}
        alt={t.name}
        style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(42,188,182,0.3)' }}
        loading="lazy"
      />
      <div>
        <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{t.name}</div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t.role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section id="depoimentos" className="section-padding" style={{ background: 'var(--bg-base)' }}>
    <div className="container">

      {/* Section Header */}
      <div className="text-center" style={{ marginBottom: '70px' }}>
        <div className="badge">❤️ NOSSA COMUNIDADE</div>
        <h2 style={{
          font: '800 clamp(2rem,4vw,3rem) Outfit',
          letterSpacing: '-1px',
          marginBottom: '12px',
          background: 'linear-gradient(135deg, #fff 40%, var(--teal-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Quem viaja, recomenda
        </h2>
        <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, var(--teal), var(--orange))', borderRadius: '2px', margin: '0 auto 16px' }} />
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>
          Histórias reais de quem realizou o sonho de viajar com a Xique-Xique.
        </p>
      </div>

      {/* Experience photo cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '24px',
        marginBottom: '40px',
      }}>
        {experienceReports.map(r => <ExperienceCard key={r.id} report={r} />)}
      </div>

      {/* Testimonial glass cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
      }}>
        {testimonials.map(t => <TestimonialCard key={t.id} t={t} />)}
      </div>
    </div>

    <style>{`
      @media (max-width: 768px) {
        div[style*="minmax(340px"] { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>
);

export default Testimonials;
