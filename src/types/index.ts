/* Tipos Globales - Portfolio */

/** Datos de un proyecto del portfolio */
export interface Project {
  /** Identificador único del proyecto */
  id: number;
  /** Nombre visible del proyecto */
  title: string;
  /** Descripción corta */
  description: string;
  /** Ruta a la imagen del proyecto (ej: "/images/proyecto1.webp") */
  image: string;
  /** Lista de tecnologías usadas */
  tags: string[];
  /** URL al repositorio o demo (opcional) */
  link?: string;
  /** URL al código fuente (opcional) */
  repo?: string;
}

/** Datos de una tecnología / skill */
export interface Technology {
  /** Nombre visible */
  name: string;
  /** Emoji o ruta a icono (ej: "⚛️" o "/icons/react.svg") */
  icon: string;
}

/** Enlace de red social */
export interface SocialLink {
  /** Nombre de la plataforma */
  name: string;
  /** URL del perfil */
  url: string;
  /** Tipo de icono a mostrar */
  icon: 'github' | 'linkedin' | 'email' | 'twitter' | 'web';
}

/** Enlace de navegación */
export interface NavLink {
  /** Texto visible */
  label: string;
  /** ID de la sección destino (sin #) */
  href: string;
}

