import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUser, FiShield } from 'react-icons/fi';
import './UGFlows.css';

const UGFlows = () => {
  const [activeTab, setActiveTab] = useState<'user' | 'admin'>('user');

  const flows = {
    user: [
      {
        id: 'AUTH-01',
        title: 'Registro & Autenticación',
        desc: 'Creación de cuenta con datos personales. Acceso seguro mediante tokens JWT y contraseñas cifradas con Bcrypt.'
      },
      {
        id: 'PROF-02',
        title: 'Perfil & Objetivos',
        desc: 'Configuración de nombre, edad, sexo y objetivos de entrenamiento. Ajuste de metas semanales de asistencia a clases.'
      },
      {
        id: 'CLASS-03',
        title: 'Explorar & Reservar Clases',
        desc: 'Catálogo de clases disponibles con detalle de horario, cupo y nivel de dificultad. Inscripción y cancelación en tiempo real.'
      },
      {
        id: 'GUIDE-04',
        title: 'Guías de Entrenamiento PDF',
        desc: 'Descarga de guías personalizadas según objetivo: pérdida de peso, ganancia muscular o resistencia cardiovascular.'
      },
      {
        id: 'STATS-05',
        title: 'Estadísticas Personales',
        desc: 'Panel de progreso con clases asistidas, cumplimiento de metas semanales y evolución de rendimiento a lo largo del tiempo.'
      }
    ],
    admin: [
      {
        id: 'USERS-01',
        title: 'Gestión de Usuarios',
        desc: 'Vista completa de usuarios registrados. Creación manual, edición de datos personales, asignación de roles y eliminación de cuentas.'
      },
      {
        id: 'CLASS-02',
        title: 'Administración de Clases',
        desc: 'CRUD de clases: nombre, horario, cupo máximo, nivel de dificultad e instructor asignado. Visualización de alumnos inscritos.'
      },
      {
        id: 'EXER-03',
        title: 'Catálogo de Ejercicios',
        desc: 'Gestión del banco de ejercicios con clasificación por grupo muscular, nivel de dificultad y equipamiento necesario.'
      },
      {
        id: 'PDF-04',
        title: 'Guías & Contenido PDF',
        desc: 'Subida, edición y eliminación de guías de entrenamiento en PDF. Asignación por objetivo específico de usuario.'
      },
      {
        id: 'KPI-05',
        title: 'Estadísticas & Exportación',
        desc: 'Métricas globales: usuarios activos, asistencias totales y distribución por objetivos. Exportación de reportes descargables.'
      }
    ]
  };

  return (
    <section className="ug-flows" id="ug-flows">
      <div className="ug-flows__container">

        <div className="ug-flows__header">
          <span className="ug-flows__badge">PROTOCOLO // FLUJOS</span>
          <h2 className="ug-flows__title">
            Recorrido de <span style={{ color: '#d4af37' }}>Usuario</span>
          </h2>
          <p className="ug-flows__subtitle">Dos perfiles · Flujo completo de funcionalidades</p>
        </div>

        <div className="ug-flows__tabs">
          <button
            className={`ug-flows__tab${activeTab === 'user' ? ' ug-flows__tab--active' : ''}`}
            onClick={() => setActiveTab('user')}
          >
            <FiUser /> MODO USUARIO
          </button>
          <button
            className={`ug-flows__tab${activeTab === 'admin' ? ' ug-flows__tab--active' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            <FiShield /> MODO ADMIN
          </button>
        </div>

        <div className="ug-flows__body">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="ug-flows__steps"
            >
              {flows[activeTab].map((item, index) => (
                <div key={item.id} className="ug-flows__step">
                  <div className="ug-flows__step-visual">
                    <div className="ug-flows__step-circle">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    {index !== flows[activeTab].length - 1 && (
                      <div className="ug-flows__step-line" />
                    )}
                  </div>
                  <div className="ug-flows__step-content">
                    <p className="ug-flows__step-id">{item.id}</p>
                    <h4 className="ug-flows__step-title">{item.title}</h4>
                    <p className="ug-flows__step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default UGFlows;