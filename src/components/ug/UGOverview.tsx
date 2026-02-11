import { TargetIcon, LightbulbIcon, RocketIcon } from '../icons/Icons';
import './UGOverview.css';

const OVERVIEW_CARDS = [
  {
    icon: <TargetIcon size={32} />,
    title: 'El Problema',
    text: 'Los gimnasios pequeños y medianos gestionan usuarios, clases y ejercicios de forma manual, con hojas de cálculo, agendas físicas y procesos repetitivos que consumen tiempo y generan errores.',
  },
  {
    icon: <LightbulbIcon size={32} />,
    title: 'La Solución',
    text: 'Ultimate GYM centraliza toda la gestión en una plataforma web SPA: usuarios, clases, ejercicios, estadísticas y automatizaciones — todo desde una interfaz moderna y accesible.',
  },
  {
    icon: <RocketIcon size={32} />,
    title: 'El Resultado',
    text: 'Una aplicación full-stack funcional con dashboards analíticos, dos automatizaciones n8n que eliminan tareas manuales, y un sistema de accesibilidad que cumple WCAG 2.1 AA.',
  },
];

const UGOverview: React.FC = () => {
  return (
    <section id="ug-overview" className="ug-overview">
      <div className="container">
        <h2 className="ug-overview__title">
          Resumen <span className="ug-overview__accent">Ejecutivo</span>
        </h2>

        <div className="ug-overview__grid">
          {OVERVIEW_CARDS.map((card, idx) => (
            <article key={card.title} className={`ug-overview__card ug-overview__card--${idx}`}>
              <span className="ug-overview__icon">{card.icon}</span>
              <h3 className="ug-overview__card-title">{card.title}</h3>
              <p className="ug-overview__card-text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGOverview;
