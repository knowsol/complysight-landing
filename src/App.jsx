import React, { useEffect, useMemo, useState } from 'react';
import { SpecBridgeAnnotation, httpAdapter } from '@specbridge-v1/sdk';
import { ClipboardCheck } from 'lucide-react';
import Variant1 from './Variant1';
import Variant2 from './Variant2';
import Diagnostic from './Diagnostic';

export default function App() {
  const [variant, setVariant] = useState('v1');
  const [diagOpen, setDiagOpen] = useState(false);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!diagOpen) return;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [diagOpen]);

  // ESC to close
  useEffect(() => {
    if (!diagOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setDiagOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [diagOpen]);

  const storage = useMemo(() => httpAdapter({
    baseUrl: 'https://sb-api.aiatti.com',
    apiKey:  'sk_KwYMGQKSW4icLTOpSGIfQO3X-ky0H2wv3hbxrqVVIs0',
  }), []);

  return (
    <SpecBridgeAnnotation pageId="plan-brand-complysight" storage={storage}>
      <>
        {/* Floating variant tab switcher */}
        <div
          style={{
            position: 'fixed',
            top: '16px',
            left: '16px',
            zIndex: 9999,
            display: 'flex',
            gap: '4px',
            padding: '4px',
            background: 'rgba(11, 31, 58, 0.92)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '999px',
            boxShadow: '0 12px 30px -10px rgba(11, 31, 58, 0.4)',
            fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif",
          }}
          aria-label="Variant switcher"
        >
          {[
            { id: 'v1', label: '1안' },
            { id: 'v2', label: '2안' },
          ].map((tab) => {
            const active = variant === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setVariant(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: active ? '#0B1F3A' : 'rgba(255, 255, 255, 0.85)',
                  background: active ? '#FFFFFF' : 'transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Floating CTA → 우리기관 간편 진단 (opens modal) */}
        <button
          type="button"
          onClick={() => setDiagOpen(true)}
          aria-label="우리기관 간편 진단 시작"
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '88px',
            zIndex: 9998,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 22px',
            background: 'linear-gradient(135deg, #0B1F3A 0%, #1E40AF 100%)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '999px',
            cursor: 'pointer',
            fontFamily: "'Pretendard Variable', Pretendard, -apple-system, sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.01em',
            boxShadow: '0 18px 40px -12px rgba(11, 31, 58, 0.45), 0 4px 10px -2px rgba(11, 31, 58, 0.2)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow =
              '0 22px 50px -10px rgba(11, 31, 58, 0.55), 0 6px 14px -2px rgba(11, 31, 58, 0.25)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow =
              '0 18px 40px -12px rgba(11, 31, 58, 0.45), 0 4px 10px -2px rgba(11, 31, 58, 0.2)';
          }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.15)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ClipboardCheck size={15} strokeWidth={2} />
          </span>
          <span>우리기관 간편 진단</span>
        </button>

        {/* Render selected variant */}
        {variant === 'v1'
          ? <Variant1 onOpenDiagnostic={() => setDiagOpen(true)} />
          : <Variant2 onOpenDiagnostic={() => setDiagOpen(true)} />}

        {/* Diagnostic modal */}
        {diagOpen && <Diagnostic onClose={() => setDiagOpen(false)} />}
      </>
    </SpecBridgeAnnotation>
  );
}
