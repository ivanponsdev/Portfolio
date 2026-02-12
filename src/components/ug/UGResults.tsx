import { FileTextIcon, PlugIcon, DatabaseIcon, CheckCircleIcon, BotIcon, AccessibilityIcon, GraduationCapIcon, CheckIcon } from '../icons/Icons';
import './UGResults.css';

const METRICS = [
  { value: '12+', label: 'Gráficos analíticos en dashboards', icon: <FileTextIcon size={28} /> },
  { value: '8', label: 'Endpoints API implementados', icon: <PlugIcon size={28} /> },
  { value: '4', label: 'Modelos de BD normalizados', icon: <DatabaseIcon size={28} /> },
  { value: '100%', label: 'Flujos de usuario completados', icon: <CheckCircleIcon size={28} /> },
  { value: '2', label: 'Automatizaciones n8n funcionales', icon: <BotIcon size={28} /> },
  { value: 'AA', label: 'Nivel WCAG 2.1 alcanzado', icon: <AccessibilityIcon size={28} /> },
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
      <div className="container">
        <h2 className="ug-results__title">
          Resultados e <span className="ug-results__accent">Impacto</span>
        </h2>

        {/* Metrics grid */}
        <div className="ug-results__metrics">
          {METRICS.map((m) => (
            <div key={m.label} className="ug-results__metric">
              <span className="ug-results__metric-icon">{m.icon}</span>
              <span className="ug-results__metric-value">{m.value}</span>
              <span className="ug-results__metric-label">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Learnings */}
        <div className="ug-results__learnings">
          <h3 className="ug-results__learnings-title">
            <GraduationCapIcon size={24} /> Aprendizajes Clave
          </h3>
          <ul className="ug-results__learnings-list">
            {LEARNINGS.map((l) => (
              <li key={l} className="ug-results__learnings-item">
                <span className="ug-results__learnings-check">
                  <CheckIcon size={16} />
                </span>
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
