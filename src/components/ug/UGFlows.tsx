import { HomeIcon, LockIcon, ClipboardListIcon, DumbbellIcon, CalendarIcon, BookOpenIcon, BarChartIcon, ShieldIcon, PlusIcon, SendIcon, BotIcon } from '../icons/Icons';
import './UGFlows.css';

interface FlowStep {
  label: string;
  icon: React.ReactNode;
}

const USER_FLOW: FlowStep[] = [
  { label: 'Landing', icon: <HomeIcon size={20} /> },
  { label: 'Login', icon: <LockIcon size={20} /> },
  { label: 'Dashboard Personal', icon: <ClipboardListIcon size={20} /> },
  { label: 'Explorar Ejercicios / Clases', icon: <DumbbellIcon size={20} /> },
  { label: 'Registrarse en Clase', icon: <CalendarIcon size={20} /> },
  { label: 'Ver Guías de Entrenamiento, Alimentación y Hábitos', icon: <BookOpenIcon size={20} /> },
  { label: 'Analytics Personal', icon: <BarChartIcon size={20} /> },
];

const ADMIN_FLOW: FlowStep[] = [
  { label: 'Dashboard Admin', icon: <ShieldIcon size={20} /> },
  { label: 'Crear Ejercicio', icon: <PlusIcon size={20} /> },
  { label: 'Crear Clase', icon: <CalendarIcon size={20} /> },
  { label: 'Ver Estadísticas Globales', icon: <BarChartIcon size={20} /> },
  { label: 'Exportar Datos', icon: <SendIcon size={20} /> },
  { label: 'Enviar Guías Automatizadas (entrenamiento, alimentación y hábitos)', icon: <BotIcon size={20} /> },
];

const FlowTimeline: React.FC<{ steps: FlowStep[]; accent: string }> = ({
  steps,
  accent,
}) => (
  <div className="ug-flows__timeline">
    {steps.map((step, i) => (
      <div key={step.label} className="ug-flows__step">
        <div className="ug-flows__step-dot" style={{ borderColor: accent }}>
          <span className="ug-flows__step-icon">{step.icon}</span>
        </div>
        <span className="ug-flows__step-label">{step.label}</span>
        {i < steps.length - 1 && (
          <div className="ug-flows__step-connector" style={{ background: accent }} />
        )}
      </div>
    ))}
  </div>
);

const UGFlows: React.FC = () => {
  return (
    <section id="ug-flows" className="ug-flows">
      <div className="container">
        <h2 className="ug-flows__title">
          Recorrido <span className="ug-flows__accent">de Usuario</span>
        </h2>
        <p className="ug-flows__subtitle">
          Dos perspectivas, una plataforma
        </p>

        <div className="ug-flows__columns">
          {/* User flow */}
          <div className="ug-flows__column">
            <h3 className="ug-flows__column-title">
              <span className="ug-flows__column-badge ug-flows__column-badge--user">
                👤 Usuario
              </span>
            </h3>
            <FlowTimeline steps={USER_FLOW} accent="#ec4899" />
          </div>

          {/* Admin flow */}
          <div className="ug-flows__column">
            <h3 className="ug-flows__column-title">
              <span className="ug-flows__column-badge ug-flows__column-badge--admin">
                🛡️ Administrador
              </span>
            </h3>
            <FlowTimeline steps={ADMIN_FLOW} accent="#3b82f6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGFlows;
