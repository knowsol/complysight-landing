import React, { useState, useMemo } from 'react';
import { SpecBridgeAnnotation, httpAdapter } from '@specbridge-v1/sdk';
import Variant1 from './Variant1';
import Variant2 from './Variant2';

export default function App() {
  const [variant, setVariant] = useState('v1');

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

        {/* Render selected variant */}
        {variant === 'v1' ? <Variant1 /> : <Variant2 />}
      </>
    </SpecBridgeAnnotation>
  );
}
