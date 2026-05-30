'use client';

import { useState, useEffect } from 'react';

export default function ImpressumButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--ink-muted)',
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          textDecoration: 'underline',
          textUnderlineOffset: 3,
          padding: 0,
          transition: 'color 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-muted)')}
      >
        Impressum
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(4,10,22,0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#0d1e38',
              border: '1px solid var(--border)',
              maxWidth: 560,
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: 'clamp(32px, 5vw, 52px)',
              position: 'relative',
            }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Schließen"
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                background: 'none',
                border: 'none',
                color: 'var(--ink-muted)',
                cursor: 'pointer',
                fontSize: '1.2rem',
                lineHeight: 1,
                padding: 4,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--ink-muted)')}
            >
              ✕
            </button>

            <p style={{
              fontSize: '0.58rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 20,
            }}>
              Impressum
            </p>

            <h2 style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 300,
              color: 'var(--ink)',
              marginBottom: 32,
              lineHeight: 1.2,
            }}>
              Angaben gemäß ECG & MedienG
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, fontSize: '0.85rem', lineHeight: 1.75, color: 'var(--ink-dim)' }}>

              <div>
                <p style={labelStyle}>Medieninhaber & Diensteanbieter</p>
                <p>Ivan Dubovoi</p>
              </div>

              <div>
                <p style={labelStyle}>Anschrift</p>
                <p>
                  Mariahilfer Gürtel 37/13<br />
                  1150 Wien<br />
                  Österreich
                </p>
              </div>

              <div>
                <p style={labelStyle}>Kontakt</p>
                <p>
                  E‑Mail:{' '}
                  <a
                    href="mailto:ivan2006dubo@gmail.com"
                    style={{ color: 'var(--gold)', textDecoration: 'none' }}
                  >
                    ivan2006dubo@gmail.com
                  </a>
                  <br />
                  Tel.:{' '}
                  <a
                    href="tel:+436818151355"
                    style={{ color: 'var(--gold)', textDecoration: 'none' }}
                  >
                    +43 681 81513554
                  </a>
                </p>
              </div>

              <div>
                <p style={labelStyle}>Unternehmensgegenstand</p>
                <p>Videografie und Filmregie</p>
              </div>

              <div>
                <p style={labelStyle}>Unternehmensart</p>
                <p>Einzelunternehmer</p>
              </div>

              <div>
                <p style={labelStyle}>Haftungsausschluss</p>
                <p>
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                  wird jedoch keine Gewähr übernommen. Alle Rechte an den auf dieser
                  Website verwendeten Fotos, Videos und sonstigen Inhalten vorbehalten.
                  Jede Vervielfältigung oder Verwendung ohne ausdrückliche Genehmigung
                  ist untersagt.
                </p>
              </div>

              <div>
                <p style={labelStyle}>Urheberrecht</p>
                <p>
                  © {new Date().getFullYear()} Ivan Dubovoi. Alle Rechte vorbehalten.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.58rem',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: 'var(--ink-muted)',
  marginBottom: 6,
};
