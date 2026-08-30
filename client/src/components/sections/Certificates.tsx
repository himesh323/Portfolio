import { useState } from 'react';
import { Window } from '@/components/ui/Window';
import { certificates } from '@/data/portfolio';
import type { Certificate } from '@/types';

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certs">
      <Window title="CERTIFICATES.gallery">
        <div className="eyebrow">★ CERTIFICATIONS</div>
        <h2>Verified & in progress</h2>
        <p className="section-sub">Click any card to open the details dialog.</p>

        <div className="cert-grid">
          {certificates.map((c, index) => (
            <div
              key={index}
              className="cert-card"
              onClick={() => setSelectedCert(c)}
            >
              <div className="ico">{c.icon}</div>
              <b>{c.title}</b>
              <span>{c.issuer}</span>
            </div>
          ))}
        </div>
      </Window>

      {/* Retro Modal */}
      {selectedCert && (
        <div
          className="modal-back open"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedCert(null);
          }}
        >
          <div className="modal">
            <div className="title-bar">
              <span className="tb-name">CERTIFICATE.info</span>
              <div className="tb-dots">
                <span className="c-red" onClick={() => setSelectedCert(null)} style={{ cursor: 'pointer' }} />
                <span className="c-yellow" />
                <span className="c-green" />
              </div>
            </div>
            <div className="modal-body">
              <div className="ico-big">{selectedCert.icon}</div>
              <h3>{selectedCert.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--ink-soft)' }}>
                {selectedCert.issuer}
              </p>
              <div className="modal-actions">
                <button className="btn small" onClick={() => setSelectedCert(null)}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
