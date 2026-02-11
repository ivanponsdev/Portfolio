import { MonitorIcon, WrenchIcon, BotIcon, AccessibilityIcon, DatabaseIcon } from '../icons/Icons';
import './UGTechStack.css';

interface TechLayer {
  title: string;
  icon: React.ReactNode;
  color: string;
  techs: { name: string; desc: string }[];
}

const LAYERS: TechLayer[] = [
  {
    title: 'Frontend',
    icon: <MonitorIcon size={24} />,
    color: '#ec4899',
    techs: [
      { name: 'React 19', desc: 'UI moderna e interactiva' },
      { name: 'Vite', desc: 'Bundler optimizado' },
      { name: 'React Router', desc: 'Navegación SPA' },
      { name: 'Axios', desc: 'Cliente HTTP' },
      { name: 'CSS3', desc: 'Animaciones personalizadas' },
    ],
  },
  {
    title: 'Backend',
    icon: <WrenchIcon size={24} />,
    color: '#3b82f6',
    techs: [
      { name: 'Node.js + Express', desc: 'API REST' },
      { name: 'MongoDB + Mongoose', desc: 'Persistencia NoSQL' },
      { name: 'JWT + bcrypt', desc: 'Autenticación segura' },
      { name: 'Multer', desc: 'Gestión de uploads' },
      { name: 'Nodemon', desc: 'Hot reload desarrollo' },
    ],
  },
  {
    title: 'Automatizaciones',
    icon: <BotIcon size={24} />,
    color: '#a78bfa',
    techs: [
      { name: 'n8n', desc: 'Orquestación de workflows' },
      { name: 'Event Triggers', desc: 'Triggers por eventos' },
      { name: 'Integraciones', desc: 'Email, Excel, PDF' },
    ],
  },
  {
    title: 'Accesibilidad',
    icon: <AccessibilityIcon size={24} />,
    color: '#34d399',
    techs: [
      { name: 'WCAG 2.1 AA', desc: 'Cumplimiento normativo' },
      { name: 'Widget Accesibilidad', desc: 'Controles de usuario' },
      { name: 'Alto Contraste', desc: 'Modo visual alternativo' },
    ],
  },
];

const UGTechStack: React.FC = () => {
  return (
    <section id="ug-tech" className="ug-tech">
      <div className="container">
        <h2 className="ug-tech__title">
          Stack <span className="ug-tech__accent">Tecnológico</span>
        </h2>

        <div className="ug-tech__grid">
          {LAYERS.map((layer) => (
            <div key={layer.title} className="ug-tech__layer">
              {/* Layer header */}
              <div className="ug-tech__layer-header">
                <span className="ug-tech__layer-icon">{layer.icon}</span>
                <h3
                  className="ug-tech__layer-title"
                  style={{ color: layer.color }}
                >
                  {layer.title}
                </h3>
              </div>

              {/* Line accent */}
              <div
                className="ug-tech__layer-line"
                style={{ background: layer.color }}
              />

              {/* Techs */}
              <ul className="ug-tech__list">
                {layer.techs.map((t) => (
                  <li key={t.name} className="ug-tech__item">
                    <span className="ug-tech__item-name">{t.name}</span>
                    <span className="ug-tech__item-desc">{t.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architecture diagram placeholder */}
        <div className="ug-tech__arch">
          <div className="ug-tech__arch-diagram">
            <div className="ug-tech__arch-node ug-tech__arch-node--client">
              <MonitorIcon size={24} />
              <strong>React SPA</strong>
              <small>Vite + Router</small>
            </div>
            <div className="ug-tech__arch-arrow">⟷</div>
            <div className="ug-tech__arch-node ug-tech__arch-node--server">
              <WrenchIcon size={24} />
              <strong>Node.js API</strong>
              <small>Express + JWT</small>
            </div>
            <div className="ug-tech__arch-arrow">⟷</div>
            <div className="ug-tech__arch-node ug-tech__arch-node--db">
              <DatabaseIcon size={24} />
              <strong>MongoDB</strong>
              <small>Mongoose ODM</small>
            </div>
            <div className="ug-tech__arch-arrow ug-tech__arch-arrow--n8n">↕</div>
            <div className="ug-tech__arch-node ug-tech__arch-node--n8n">
              <BotIcon size={24} />
              <strong>n8n</strong>
              <small>Workflows</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGTechStack;
