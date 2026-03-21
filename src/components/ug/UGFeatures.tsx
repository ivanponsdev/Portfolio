import React from 'react';
import { SmartphoneIcon, DumbbellIcon, CalendarIcon, BarChartIcon, SettingsIcon } from '../icons/Icons';
import './UGFeatures.css';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  items: string[];
  color: string;
}

const FEATURES: Feature[] = [
  {
    id: 'SYS-01',
    icon: <SmartphoneIcon size={24} />,
    title: 'Gestión de Usuarios',
    color: '#d4829a', // Rosa envejecido
    items: [
      'Autenticación segura (JWT + bcrypt)',
      'Roles diferenciados (user / admin)',
      'Perfiles con objetivos de entreno',
      'Sistema de suscripción / baja',
    ],
  },
  {
    id: 'DB-100',
    icon: <DumbbellIcon size={24} />,
    title: 'Catálogo de Ejercicios',
    color: '#dfa85e', // Ocre/Sepia
    items: [
      '+100 ejercicios por grupo muscular',
      'Filtros avanzados (equipamiento)',
      'Búsqueda en tiempo real',
      'Detalles e instrucciones técnicas',
    ],
  },
  {
    id: 'SCH-02',
    icon: <CalendarIcon size={24} />,
    title: 'Gestión de Clases',
    color: '#7aa0c8', // Azul pizarra
    items: [
      'Horarios dinámicos y flexibles',
      'Inscripción automática inteligente',
      'Control de capacidad limitada',
      'Notificaciones de cambios',
    ],
  },
  {
    id: 'ANL-04',
    icon: <BarChartIcon size={24} />,
    title: 'Dashboards Analíticos',
    color: '#88b288', // Verde bosque seco (sustituye al verde neón)
    items: [
      'Estadísticas globales de negocio',
      'Gráficos visuales de rendimiento',
      'KPIs de retención de usuarios',
      'Análisis de tendencias',
    ],
  },
  {
    id: 'AUT-08',
    icon: <SettingsIcon size={24} />,
    title: 'Automatizaciones',
    color: '#ae85ae', // Violeta apagado
    items: [
      'Export automático a Excel',
      'Envío de guías PDF vía email',
      'Triggers basados en eventos',
    ],
  },
];

const UGFeatures: React.FC = () => {
  return (
    <section id="ug-features" className="ug-features">
      <div className="ug-features__container">
        <header className="ug-features__header">
          <h2 className="ug-features__title">ESPECIFICACIONES TÉCNICAS</h2>
          <p className="ug-features__subtitle">
            Módulos operativos diseñados para la optimización de recursos y rendimiento.
          </p>
        </header>

        <div className="ug-features__grid">
          {FEATURES.map((feat, idx) => (
            <article 
              key={feat.title} 
              className={`ug-features__card ug-features__card--${idx}`}
              style={{ '--feat-color': feat.color } as React.CSSProperties}
            >
              <div className="ug-features__card-head">
                <span className="ug-features__card-id">{feat.id}</span>
                <span className="ug-features__card-icon">{feat.icon}</span>
              </div>
              
              <h3 className="ug-features__card-title">{feat.title}</h3>
              
              <ul className="ug-features__list">
                {feat.items.map((item) => (
                  <li key={item} className="ug-features__list-item">
                    <span className="ug-features__marker">»</span>
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