import React from 'react';
import { ClipboardCheck, CreditCard, Plane, CheckCircle2 } from 'lucide-react';

/* ──────────────────────────────────────────────
   CarneSection — dark with:
   • Two-column layout: copy left, steps right
   • Numbered steps with teal accent rings
   • Orange bullet list (benefits)
   • Regional "caatinga" texture overlay
   • Floating stats ticker
   ────────────────────────────────────────────── */

const steps = [
  {
    icon: <ClipboardCheck size={22} />,
    number: '01',
    title: 'Escolha seu Destino',
    description: 'Navegue pelos pacotes e escolha a viagem dos seus sonhos.',
  },
  {
    icon: <CreditCard size={22} />,
    number: '02',
    title: 'Reserve via Carnê',
    description: 'Sem cartão de crédito. Pague parcelas mensais no boleto.',
  },
  {
    icon: <Plane size={22} />,
    number: '03',
    title: 'Viaje com Tudo Pago',
    description: 'Com o carnê quitado, você embarca com segurança plena.',
  },
];

const benefits = [
  'Não consulta SPC ou Serasa',
  'Boletos via WhatsApp ou em casa',
  'Primeira parcela para 30 dias',
  'Remarcação sem burocracia',
];

/* Caatinga-inspired triangular SVG motif */
const CaatingaMotif = () => (
  <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03, pointerEvents: 'none' }}>
    <defs>
      <pattern id="caatinga" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon points="30,0 60,52 0,52" fill="#C4863A" />
        <polygon points="30,60 60,8 0,8" fill="#2ABCB6" opacity="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#caatinga)" />
  </svg>
);

const StepCard = ({ step, isLast }) => (
  <div style={{ display: 'flex', gap: '20px', position: 'relative' }}>
    {/* Number + vertical connector */}
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(244,124,32,0.2), rgba(244,124,32,0.05))',
        border: '2px solid rgba(244,124,32,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--orange-light)',
        boxShadow: '0 0 20px rgba(244,124,32,0.15)',
        position: 'relative',
        zIndex: 1,
      }}>
        {step.icon}
      </div>
      {/* Connector line */}
      {!isLast && (
        <div style={{
          width: '2px',
          flex: 1,
          minHeight: '40px',
          marginTop: '8px',
          background: 'linear-gradient(to bottom, rgba(244,124,32,0.4), transparent)',
        }} />
      )}
    </div>

    {/* Text */}
    <div style={{ paddingBottom: isLast ? 0 : '32px' }}>
      <div style={{ fontSize: '0.7rem', letterSpacing: '2px', color: 'var(--orange)', fontWeight: 700, marginBottom: '4px' }}>
        PASSO {step.number}
      </div>
      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
        {step.title}
      </h4>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
        {step.description}
      </p>
    </div>
  </div>
);

const CarneSection = () => (
  <section
    id="carne"
    className="section-padding regional-pattern"
    style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0D1115 0%, #0C1E16 50%, #0D1115 100%)',
      overflow: 'hidden',
    }}
  >
    <CaatingaMotif />

    {/* Top border glow */}
    <div aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--teal), transparent)' }} />

    {/* Green orb */}
    <div aria-hidden="true" style={{ position: 'absolute', left: '-200px', top: '50%', transform: 'translateY(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(54,124,47,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '80px',
        alignItems: 'center',
      }}>

        {/* LEFT — Marketing Copy */}
        <div>
          <div className="badge animate-fadein-up" style={{ background: 'rgba(196,134,58,0.1)', color: 'var(--sertao-sand)', border: '1px solid rgba(196,134,58,0.25)' }}>
            🔑 FACILIDADE TOTAL
          </div>

          <h2
            className="animate-fadein-up animate-delay-1"
            style={{
              font: '800 clamp(2rem,3.5vw,2.8rem) Outfit',
              letterSpacing: '-1px',
              marginBottom: '20px',
              color: '#fff',
              lineHeight: 1.1,
            }}
          >
            O Carnê que{' '}
            <span style={{ color: 'var(--teal-light)' }}>Abre Portas</span>
          </h2>

          <p
            className="animate-fadein-up animate-delay-2"
            style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.85, marginBottom: '32px', maxWidth: '480px' }}
          >
            Na Xique-Xique, acreditamos que <strong style={{ color: 'var(--text-primary)' }}>viajar é um direito</strong>.
            Criamos nosso próprio sistema de parcelamento — sem bancos, sem burocracia, sem preconceito.
          </p>

          {/* Benefit List */}
          <ul className="animate-fadein-up animate-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
            {benefits.map((b, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--orange)', flexShrink: 0 }} />
                {b}
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/5585999999999"
            className="btn btn-secondary animate-fadein-up animate-delay-4"
            style={{ padding: '16px 32px', fontSize: '1rem' }}
          >
            Simular meu Parcelamento 💬
          </a>
        </div>

        {/* RIGHT — Steps Timeline */}
        <div
          className="glass-card"
          style={{ padding: '40px 36px' }}
        >
          <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '36px' }}>
            Como funciona
          </div>

          {steps.map((step, i) => (
            <StepCard key={i} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </div>

    {/* Bottom border glow */}
    <div aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--teal), transparent)' }} />
  </section>
);

export default CarneSection;
