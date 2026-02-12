import './UGN8N.css';

interface Workflow {
  id: number;
  title: string;
  trigger: string;
  steps: string[];
  before: string;
  after: string;
  benefit: string;
}

const WORKFLOWS: Workflow[] = [
  {
    id: 1,
    title: 'Export Automático de Datos',
    trigger: 'Cron Schedule (semanal, mismo día/hora)',
    steps: [
      'Timer Schedule ejecuta workflow automáticamente',
      'n8n recopila datos de MongoDB',
      'Genera archivo Excel con tablas formateadas',
    ],
    before: '10 minutos (manual)',
    after: '30 segundos (automático)',
    benefit: 'Ahorro de ~95% del tiempo',
  },
  {
    id: 2,
    title: 'Envío de Guías de Entrenamiento, Alimentación y Hábitos',
    trigger: 'Click en botón "Enviar guía" (admin panel)',
    steps: [
      'User hace clic en botón de enviar guías',
      'El sistema envía automáticamente el PDF correspondiente al objetivo del usuario',
      'El admin solo sube cada PDF una vez desde su dashboard; los usuarios reciben el PDF adecuado sin intervención manual',
    ],
    before: '5 minutos por guía (manual)',
    after: '0 intervención manual',
    benefit: '100% automatizado',
  },
];

const UGN8N: React.FC = () => {
  return (
    <section id="ug-n8n" className="ug-n8n">
      <div className="container">
        {/* Section header */}
        <div className="ug-n8n__header">
          <span className="ug-n8n__badge">✨ Lo diferenciador</span>
          <h2 className="ug-n8n__title">
            Automatizaciones con{' '}
            <span className="ug-n8n__accent">n8n</span>
          </h2>
          <p className="ug-n8n__intro">
            Elimina tareas manuales repetitivas mediante workflows inteligentes.
            Mientras otros proyectos muestran CRUD, este integra automatizaciones
            reales que aportan valor de negocio.
          </p>
        </div>

        {/* Workflows */}
        <div className="ug-n8n__workflows">
          {WORKFLOWS.map((wf) => (
            <article key={wf.id} className="ug-n8n__workflow">
              <div className="ug-n8n__workflow-header">
                <span className="ug-n8n__workflow-number">
                  Workflow #{wf.id}
                </span>
                <h3 className="ug-n8n__workflow-title">{wf.title}</h3>
              </div>

              {/* Trigger */}
              <div className="ug-n8n__trigger">
                <span className="ug-n8n__trigger-label">Trigger:</span>
                <span className="ug-n8n__trigger-text">{wf.trigger}</span>
              </div>

              {/* Steps pipeline */}
              <div className="ug-n8n__steps">
                {wf.steps.map((step, i) => (
                  <div key={i} className="ug-n8n__step">
                    <div className="ug-n8n__step-number">{i + 1}</div>
                    <span className="ug-n8n__step-text">{step}</span>
                  </div>
                ))}
              </div>

              {/* Before / After comparison */}
              <div className="ug-n8n__comparison">
                <div className="ug-n8n__comparison-item ug-n8n__comparison-item--before">
                  <span className="ug-n8n__comparison-label">⏱️ Antes</span>
                  <span className="ug-n8n__comparison-value">{wf.before}</span>
                </div>
                <div className="ug-n8n__comparison-arrow">→</div>
                <div className="ug-n8n__comparison-item ug-n8n__comparison-item--after">
                  <span className="ug-n8n__comparison-label">⚡ Ahora</span>
                  <span className="ug-n8n__comparison-value">{wf.after}</span>
                </div>
              </div>

              <p className="ug-n8n__benefit">{wf.benefit}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGN8N;
