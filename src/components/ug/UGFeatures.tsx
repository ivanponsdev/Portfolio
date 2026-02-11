import { SmartphoneIcon, DumbbellIcon, CalendarIcon, BarChartIcon, SettingsIcon } from '../icons/Icons';
import './UGFeatures.css';

interface Feature {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const FEATURES: Feature[] = [
  {
    icon: <SmartphoneIcon size={28} />,
    title: 'Gestión de Usuarios',
    items: [
      'Autenticación segura (JWT + bcrypt)',
      'Roles diferenciados (user / admin)',
      'Perfiles personalizados con objetivos de entrenamiento',
      'Sistema de suscripción / baja',
    ],
  },
  {
    icon: <DumbbellIcon size={28} />,
    title: 'Catálogo de Ejercicios',
    items: [
      '+100 ejercicios clasificados por grupo muscular',
      'Filtros avanzados (equipamiento, dificultad)',
      'Búsqueda en tiempo real',
      'Detalles, imágenes e instrucciones',
    ],
  },
  {
    icon: <CalendarIcon size={28} />,
    title: 'Gestión de Clases',
    items: [
      'Horarios dinámicos',
      'Inscripción / desinscripción automática',
      'Capacidad limitada por clase',
      'Notificaciones de cambios',
    ],
  },
  {
    icon: <BarChartIcon size={28} />,
    title: 'Dashboards Analíticos',
    items: [
      'Estadísticas globales del negocio',
      'Gráficos: barras, circulares, lineales',
      'KPIs de usuarios activos / inactivos',
      'Tendencias de asistencia',
    ],
  },
  {
    icon: <SettingsIcon size={28} />,
    title: 'Automatizaciones',
    items: [
      'Export automático de datos a Excel',
      'Envío de guías (entrenamiento, alimentación y hábitos) en PDF vía email',
      'Triggers basados en eventos',
    ],
  },
];

const UGFeatures: React.FC = () => {
  return (
    <section id="ug-features" className="ug-features">
      <div className="container">
        <h2 className="ug-features__title">
          Características <span className="ug-features__accent">Principales</span>
        </h2>
        <p className="ug-features__subtitle">
          Todo lo que necesita un gimnasio para funcionar de forma moderna y eficiente
        </p>

        <div className="ug-features__grid">
          {FEATURES.map((feat, idx) => (
            <article key={feat.title} className={`ug-features__card ug-features__card--${idx}`}>
              <div className="ug-features__card-header">
                <span className="ug-features__card-icon">{feat.icon}</span>
                <h3 className="ug-features__card-title">{feat.title}</h3>
              </div>
              <ul className="ug-features__list">
                {feat.items.map((item) => (
                  <li key={item} className="ug-features__list-item">
                    <span className="ug-features__check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGFeatures;
