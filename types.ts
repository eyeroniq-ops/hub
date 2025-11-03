export interface AppData {
  id: string;
  name: string;
  description: string;
  url: string;
  colorClasses: {
    bg: string;
    hoverBg: string;
    shadow: string;
    hoverShadow: string;
    text: string;
    border: string;
  };
}