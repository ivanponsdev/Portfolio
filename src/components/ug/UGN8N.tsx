import React from 'react';
import './UGN8N.css';

interface Workflow {
  id: string;
  title: string;
  trigger: string;
  steps: string[];
  before: string;
  after: string;
  benefit: string;
  color: string;
}

const WORKFLOWS: Workflow[] = [
  {
    id: 'WF-01',
    title: 'Export Automático de Datos',
    trigger: 'Cron Schedule — semanal, misma hora',
    steps: [
      'Timer Schedule ejecuta el workflow automáticamente',
      'n8n recopila los datos de MongoDB',
      'Genera y distribuye un Excel formateado',
    ],
    before: '10 min (manual)',
    after: '30 seg (automático)',
    benefit: 'Ahorro del 95% del tiempo operativo',
    color: '#dfa85e',
  },
  {
    id: 'WF-02',
    title: 'Envío de Guías de Entrenamiento',
    trigger: 'Evento — clic en "Enviar guía" (admin panel)',
    steps: [
      'Admin activa el envío desde su panel de control',
      'El sistema selecciona el PDF según el objetivo del usuario',
      'Email automatizado con la guía correcta sin intervención manual',
    ],
    before: '5 min/usuario (manual)',
    after: '0 intervención manual',
    benefit: '100% automatizado — sin fricción',
    color: '#ae85ae',
  },
];

const UGN8N: React.FC = () => {
  return (
    <section id="ug-n8n" className="ug-n8n">
      <div className="ug-n8n__container">
        <header className="ug-n8n__header">
          <div className="ug-n8n__badge">[ AUTOMATIZACIONES ]</div>
          <h2 className="ug-n8n__title">PROTOCOLOS DE AUTOMATIZACIÓN</h2>
          <p className="ug-n8n__subtitle">
            Flujos operativos que eliminan trabajo manual repetitivo · Integración real n8n
          </p>
        </header>

        <div className="ug-n8n__grid">
          {WORKFLOWS.map((wf) => (
            <article
              key={wf.id}
              className="ug-n8n__card"
              style={{ '--wf-color': wf.color } as React.CSSProperties}
            >
              <div className="ug-n8n__card-head">
                <span className="ug-n8n__card-id">{wf.id}</span>
                <span className="ug-n8n__card-status" style={{ color: wf.color }}>ACTIVO</span>
              </div>
              <h3 className="ug-n8n__card-title">{wf.title.toUpperCase()}</h3>
              <div className="ug-n8n__trigger-row">
                <span className="ug-n8n__trigger-label">TRIGGER:</span>
                <span className="ug-n8n__trigger-value">{wf.trigger}</span>
              </div>
              <div className="ug-n8n__steps">
                {wf.steps.map((step, i) => (
                  <div key={i} className="ug-n8n__step">
                    <div className="ug-n8n__step-dot" style={{ borderColor: wf.color }}>
                      <span style={{ color: wf.color }}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    {i < wf.steps.length - 1 && <div className="ug-n8n__step-line" />}
                    <p className="ug-n8n__step-text">{step}</p>
                  </div>
                ))}
              </div>
              <div className="ug-n8n__comparison">
                <div className="ug-n8n__comparison-before">
                  <span className="ug-n8n__comp-label">ESTADO ANTERIOR</span>
                  <span className="ug-n8n__comp-value ug-n8n__comp-value--before">{wf.before}</span>
                </div>
                <div className="ug-n8n__comparison-arrow">→</div>
                <div className="ug-n8n__comparison-after">
                  <span className="ug-n8n__comp-label">ESTADO ACTUAL</span>
                  <span className="ug-n8n__comp-value" style={{ color: wf.color }}>{wf.after}</span>
                </div>
              </div>
              <p className="ug-n8n__benefit" style={{ color: wf.color }}>» {wf.benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGN8N;
