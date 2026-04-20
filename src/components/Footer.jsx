import React, { useState } from 'react';
import { ChevronDown, MapPin, Mail, Phone, Share2, Play } from 'lucide-react';
import { faq } from '../data/mockData';

/* ──────────────────────────────────────────────
   FAQ Item — animated accordion with teal accent
   ────────────────────────────────────────────── */
const FaqItem = ({ item, index, isOpen, onToggle }) => (
  <div
    style={{
      borderRadius: '16px',
      border: `1px solid ${isOpen ? 'rgba(42,188,182,0.35)' : 'var(--border-subtle)'}`,
      background: isOpen ? 'rgba(42,188,182,0.05)' : 'var(--bg-surface)',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
    }}
  >
    <button
      onClick={() => onToggle(index)}
      style={{
        width: '100%',
        padding: '22px 28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'Outfit',
        fontSize: '1rem',
        fontWeight: 600,
        color: isOpen ? 'var(--teal-light)' : 'var(--text-primary)',
        transition: 'color 0.3s ease',
        gap: '16px',
      }}
    >
      {/* Number accent */}
      <span style={{ fontSize: '0.75rem', color: 'var(--teal)', fontWeight: 700, letterSpacing: '1px', flexShrink: 0 }}>
        {String(index + 1).padStart(2, '0')}
      </span>
      <span style={{ flex: 1 }}>{item.question}</span>
      <ChevronDown
        size={18}
        style={{
          color: 'var(--teal)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease',
          flexShrink: 0,
        }}
      />
    </button>

    {isOpen && (
      <div style={{ padding: '0 28px 22px 60px' }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          {item.answer}
        </p>
      </div>
    )}
  </div>
);

/* ──────────────────────────────────────────────
   Footer — dark with:
   • Teal/orange gradient top accent
   • Logo + tagline
   • Nav columns
   • Contact info with icons
   • Social icons with hover glows
   ────────────────────────────────────────────── */
const Footer = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  return (
    <footer>

      {/* ── FAQ SECTION ───────────────────────── */}
      <section className="section-padding" style={{ background: 'var(--bg-deep)' }}>
        <div className="container" style={{ maxWidth: '820px' }}>

          <div className="text-center" style={{ marginBottom: '60px' }}>
            <div className="badge">❓ DÚVIDAS FREQUENTES</div>
            <h2 style={{
              font: '800 clamp(2rem,4vw,3rem) Outfit',
              letterSpacing: '-1px',
              background: 'linear-gradient(135deg, #fff 40%, var(--teal-light))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Perguntas Frequentes
            </h2>
            <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, var(--teal), var(--orange))', borderRadius: '2px', margin: '16px auto 0' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faq.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                index={i}
                isOpen={openFaq === i}
                onToggle={toggleFaq}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="section-divider" />

      {/* ── MAIN FOOTER ───────────────────────── */}
      <div style={{
        background: 'var(--bg-deep)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}>
        {/* Subtle orange glow bottom-right */}
        <div aria-hidden="true" style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(244,124,32,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        {/* Top accent line */}
        <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 0%, var(--teal) 30%, var(--orange) 70%, transparent 100%)' }} />

        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '50px',
            marginBottom: '70px',
          }}>

            {/* Brand Column */}
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <img src="/logo.png" alt="Xique Xique Viagens" style={{ width: '40px', height: '40px', objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(42,188,182,0.4))' }} />
                <div>
                  <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.1rem', color: '#fff' }}>
                    <div style={{ color: 'var(--orange)', lineHeight: 1 }}>
                      X<span style={{ color: 'var(--teal-light)' }}>IQUE</span>
                    </div>
                    <div style={{ color: 'var(--teal-light)', marginTop: '2px', lineHeight: 1, paddingLeft: '8px' }}>
                      X<span style={{ color: 'var(--orange)' }}>IQUE</span>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '2px', color: '#fff', fontWeight: 600 }}>
                    VIAGENS e TURISMO
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.9, maxWidth: '260px' }}>
                A agência de turismo acessível do Nordeste. Realizando sonhos com o carnê próprio desde 2010.
              </p>

              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
                {[
                  { icon: <Share2 size={18} />, label: 'Instagram', color: 'var(--orange)' },
                  { icon: <Play size={18} />, label: 'YouTube', color: '#FF4444' },
                  { icon: <Phone size={18} />, label: 'WhatsApp', color: 'var(--teal)' },
                ].map(({ icon, label, color }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    title={label}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = color;
                      e.currentTarget.style.borderColor = color;
                      e.currentTarget.style.background = `${color}18`;
                      e.currentTarget.style.boxShadow = `0 0 12px ${color}44`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '20px' }}>
                Links Rápidos
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  ['#inicio', 'Página Inicial'],
                  ['#pacotes', 'Próximas Saídas'],
                  ['#carne', 'Como funciona o Carnê'],
                  ['#depoimentos', 'Depoimentos'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s ease' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--teal-light)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--teal)', display: 'inline-block', flexShrink: 0 }} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '20px' }}>
                Contato
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { icon: <MapPin size={16} />, text: 'Fortaleza, CE — Brasil' },
                  { icon: <Phone size={16} />, text: '(85) 99999-9999' },
                  { icon: <Mail size={16} />, text: 'contato@xiquexique.com.br' },
                ].map(({ icon, text }) => (
                  <li key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--teal)', flexShrink: 0 }}>{icon}</span>
                    {text}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5585999999999"
                className="btn btn-primary"
                style={{ marginTop: '28px', padding: '12px 24px', fontSize: '0.88rem' }}
              >
                💬 Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              © 2026 Xique-Xique Viagens e Turismo. CNPJ: 00.000.000/0001-00
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Todos os direitos reservados. Feito com ❤️ no Nordeste.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
