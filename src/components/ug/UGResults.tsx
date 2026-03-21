import React from 'react';
import './UGResults.css';

const METRICS = [
  { id: 'M-01', value: '12+', label: 'Gráficos analíticos en dashboards', color: '#d4829a' },
  { id: 'M-02', value: '8', label: 'Endpoints API implementados', color: '#7aa0c8' },
  { id: 'M-03', value: '4', label: 'Modelos de BD normalizados', color: '#88b288' },
  { id: 'M-04', value: '100%', label: 'Flujos de usuario completados', color: '#dfa85e' },
  { id: 'M-05', value: '2', label: 'Automatizaciones n8n funcionales', color: '#ae85ae' },
  { id: 'M-06', value: 'AA', label: 'Nivel WCAG 2.1 alcanzado', color: '#7aa0c8' },
];

const LEARNINGS = [
  'Arquitectura escalable con componentes reutilizables',
  'Seguridad: autenticación JWT + contraseñas hasheadas',
  'UX inclusiva con widget de accesibilidad integrado',
  'Integración de herramientas low-code (n8n) con código custom',
  'Full-stack completo: base de datos → API → interfaz moderna',
];

const UGResults: React.FC = () => {
  return (
    <section id="ug-results" className="ug-results">
      <div className="ug-results__container">
        <header className="ug-results__header">
          <h2 className="ug-results__title">INFORME DE RESULTADOS</h2>
          <p className="ug-results__subtitle">Métricas finales del sistema · Datos verificados post-entrega</p>
        </header>

        <div className="ug-results__metrics">
          {METRICS.map((m) => (
            <div
              key={m.id}
              className="ug-results__metric"
              style={{ '--metric-color': m.color } as React.CSSProperties}
            >
              <span className="ug-results__metric-id">{m.id}</span>
              <span className="ug-results__metric-value" style={{ color: m.color }}>{m.value}</span>
              <span className="ug-results__metric-label">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="ug-results__learnings">
          <h3 className="ug-results__learnings-title">APRENDIZAJES CLAVE</h3>
          <ul className="ug-results__learnings-list">
            {LEARNINGS.map((l) => (
              <li key={l} className="ug-results__learnings-item">
                <span className="ug-results__learnings-bullet">»</span>
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UGResults;
