export type AppCategory = 'Diseño' | 'Búsqueda' | 'Diagnóstico' | 'Administrativo';

export interface AppData {
  id: string;
  name: string;
  description: string;
  url: string;
  version: string;
  category: AppCategory;
  colorClasses: {
    bg: string;
    hoverBg: string;
    shadow: string;
    hoverShadow: string;
    text: string;
    border: string;
  };
}