import React from 'react';
import { MonitorIcon, WrenchIcon, BotIcon, AccessibilityIcon } from '../icons/Icons';
import './UGTechStack.css';

interface TechLayer {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  techs: { name: string; desc: string }[];
}

const LAYERS: TechLayer[] = [
  {
    id: 'FE-01',
    title: 'Frontend',
    icon: <MonitorIcon size={20} />,
    color: '#d4829a',
    techs: [
      { name: 'React 19', desc: 'UI moderna e interactiva' },
      { name: 'Vite', desc: 'Bundler optimizado' },
      { name: 'React Router', desc: 'Navegación SPA' },
      { name: 'Axios', desc: 'Cliente HTTP' },
      { name: 'CSS3', desc: 'Animaciones personalizadas' },
    ],
  },
  {
    id: 'BE-02',
    title: 'Backend',
    icon: <WrenchIcon size={20} />,
    color: '#7aa0c8',
    techs: [
      { name: 'Node.js + Express', desc: 'API REST' },
      { name: 'MongoDB + Mongoose', desc: 'Persistencia NoSQL' },
      { name: 'JWT + bcrypt', desc: 'Autenticación segura' },
      { name: 'Multer', desc: 'Gestión de uploads' },
      { name: 'Nodemon', desc: 'Hot reload desarrollo' },
    ],
  },
  {
    id: 'N8N-03',
    title: 'Automatizaciones',
    icon: <BotIcon size={20} />,
    color: '#ae85ae',
    techs: [
      { name: 'n8n', desc: 'Orquestación de workflows' },
      { name: 'Event Triggers', desc: 'Triggers por eventos' },
      { name: 'Integraciones', desc: 'Email, Excel, PDF' },
    ],
  },
  {
    id: 'ACC-04',
    title: 'Accesibilidad',
    icon: <AccessibilityIcon size={20} />,
    color: '#88b288',
    techs: [
      { name: 'WCAG 2.1 AA', desc: 'Cumplimiento normativo' },
      { name: 'Widget Accesibilidad', desc: 'Controles de usuario' },
      { name: 'Alto Contraste', desc: 'Modo visual alternativo' },
    ],
  },
];

const ARCH_NODES = [
  { id: 'FE-01', label: 'React SPA', sub: 'Vite + Router', color: '#d4829a' },
  { id: 'BE-02', label: 'Node.js API', sub: 'Express + JWT', color: '#7aa0c8' },
  { id: 'DB-03', label: 'MongoDB', sub: 'Mongoose ODM', color: '#88b288' },
  { id: 'N8N-04', label: 'n8n', sub: 'Workflows', color: '#ae85ae' },
];

const UGTechStack: React.FC = () => {
  return (
    <section id="ug-tech" className="ug-tech">
      <div className="ug-tech__container">
        <header className="ug-tech__header">
          <h2 className="ug-tech__title">STACK TECNOLÓGICO</h2>
          <p className="ug-tech__subtitle">Capas del sistema · Tecnologías · Decisiones de arquitectura</p>
        </header>

        <div className="ug-tech__grid">
          {LAYERS.map((layer) => (
            <article
              key={layer.id}
              className="ug-tech__card"
              style={{ '--layer-color': layer.color } as React.CSSProperties}
            >
              <div className="ug-tech__card-head">
                <span className="ug-tech__card-id">{layer.id}</span>
                <span className="ug-tech__card-icon" style={{ color: layer.color }}>{layer.icon}</span>
              </div>
              <h3 className="ug-tech__card-title" style={{ color: layer.color }}>
                {layer.title.toUpperCase()}
              </h3>
              <ul className="ug-tech__list">
                {layer.techs.map((t) => (
                  <li key={t.name} className="ug-tech__item">
                    <span className="ug-tech__bullet">»</span>
                    <span>
                      <span className="ug-tech__item-name">{t.name}</span>
                      <span className="ug-tech__item-sep"> — </span>
                      <span className="ug-tech__item-desc">{t.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="ug-tech__arch">
          <p className="ug-tech__arch-label">DIAGRAMA DE ARQUITECTURA</p>
          <div className="ug-tech__arch-row">
            {ARCH_NODES.map((node, i) => (
              <React.Fragment key={node.id}>
                <div
                  className="ug-tech__arch-node"
                  style={{ '--node-color': node.color } as React.CSSProperties}
                >
                  <span className="ug-tech__arch-node-id">{node.id}</span>
                  <span className="ug-tech__arch-node-label">{node.label}</span>
                  <span className="ug-tech__arch-node-sub">{node.sub}</span>
                </div>
                {i < ARCH_NODES.length - 1 && (
                  <div className="ug-tech__arch-connector">—</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGTechStack;