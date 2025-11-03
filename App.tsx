import React, { useState } from 'react';
import AppCard from './components/AppCard';
import AppModal from './components/AppModal';
import { AppData } from './types';

const APPS: AppData[] = [
  {
    id: 'search-matrix',
    name: 'Search Matrix',
    description: 'Una herramienta de búsqueda avanzada para descubrir y analizar negocios, proporcionando profundos conocimientos del mercado e inteligencia competitiva.',
    url: 'https://searchmatrix.netlify.app',
    colorClasses: {
      bg: 'bg-emerald-500',
      hoverBg: 'hover:bg-emerald-400',
      shadow: 'shadow-emerald-500/40',
      hoverShadow: 'hover:shadow-emerald-500/30',
      text: 'text-emerald-400',
      border: 'border-emerald-500'
    }
  },
  {
    id: 'ai-mockups',
    name: 'AI Mockups',
    description: 'Genera maquetas de productos impresionantes y de alta fidelidad en segundos. Simplemente describe tu visión y deja que nuestra IA le dé vida.',
    url: 'https://gemini-ai-mockup-generator-769977439353.us-west1.run.app',
    colorClasses: {
      bg: 'bg-fuchsia-500',
      hoverBg: 'hover:bg-fuchsia-400',
      shadow: 'shadow-fuchsia-500/40',
      hoverShadow: 'hover:shadow-fuchsia-500/30',
      text: 'text-fuchsia-400',
      border: 'border-fuchsia-500'
    }
  },
  {
    id: 'ai-posts',
    name: 'AI Posts',
    description: 'Crea publicaciones para redes sociales atractivas y optimizadas sin esfuerzo. Nuestra IA entiende tu marca y elabora contenido convincente.',
    url: 'https://generador-de-publicaciones-de-redes-sociales-con-1089729397816.us-west1.run.app',
    colorClasses: {
      bg: 'bg-emerald-500',
      hoverBg: 'hover:bg-emerald-400',
      shadow: 'shadow-emerald-500/40',
      hoverShadow: 'hover:shadow-emerald-500/30',
      text: 'text-emerald-400',
      border: 'border-emerald-500'
    }
  },
  {
    id: 'remixer',
    name: 'Remixer',
    description: 'Clona y remezcla cualquier logotipo con el poder de la IA. Una herramienta revolucionaria para la inspiración de marcas y la creación rápida de prototipos.',
    url: 'https://remixer-769977439353.us-west1.run.app',
    colorClasses: {
      bg: 'bg-fuchsia-500',
      hoverBg: 'hover:bg-fuchsia-400',
      shadow: 'shadow-fuchsia-500/40',
      hoverShadow: 'hover:shadow-fuchsia-500/30',
      text: 'text-fuchsia-400',
      border: 'border-fuchsia-500'
    }
  },
  {
    id: 'brand-assist',
    name: 'Brand Assist',
    description: 'Tu compañero de marca inteligente. Chatea con la base de conocimientos de tu marca para generar publicaciones y descripciones precisas.',
    url: 'https://gemini-brand-chat-assistant-631000688449.us-west1.run.app',
    colorClasses: {
      bg: 'bg-emerald-500',
      hoverBg: 'hover:bg-emerald-400',
      shadow: 'shadow-emerald-500/40',
      hoverShadow: 'hover:shadow-emerald-500/30',
      text: 'text-emerald-400',
      border: 'border-emerald-500'
    }
  },
  {
    id: 'moodboards',
    name: 'Moodboards',
    description: 'Crea moodboards dinámicos e inspiradores sin esfuerzo. Nuestra IA selecciona imágenes, paletas de colores y tipografías basadas en tus ideas.',
    url: 'https://social-media-moodboard-ai-631000688449.us-west1.run.app',
    colorClasses: {
      bg: 'bg-fuchsia-500',
      hoverBg: 'hover:bg-fuchsia-400',
      shadow: 'shadow-fuchsia-500/40',
      hoverShadow: 'hover:shadow-fuchsia-500/30',
      text: 'text-fuchsia-400',
      border: 'border-fuchsia-500'
    }
  },
  {
    id: 'image-mixer',
    name: 'Mezclador de Imágenes',
    description: 'Usa IA para mezclar una imagen de primer plano con una de fondo, creando composiciones únicas y sorprendentes.',
    url: 'https://mezclador-de-im-genes-gemini-623608258254.us-west1.run.app',
    colorClasses: {
      bg: 'bg-emerald-500',
      hoverBg: 'hover:bg-emerald-400',
      shadow: 'shadow-emerald-500/40',
      hoverShadow: 'hover:shadow-emerald-500/30',
      text: 'text-emerald-400',
      border: 'border-emerald-500'
    }
  },
  {
    id: 'image-editor',
    name: 'Image Editor',
    description: 'Edita imágenes con Gemini. Sube una imagen y describe los cambios que quieres hacer.',
    url: 'https://gemini-image-enhancer-631000688449.us-west1.run.app',
    colorClasses: {
      bg: 'bg-blue-500',
      hoverBg: 'hover:bg-blue-400',
      shadow: 'shadow-blue-500/40',
      hoverShadow: 'hover:shadow-blue-500/30',
      text: 'text-blue-400',
      border: 'border-blue-500'
    }
  }
];

const App: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  const handleCardClick = (app: AppData) => {
    setSelectedApp(app);
  };

  const handleCloseModal = () => {
    setSelectedApp(null);
  };

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white p-4 sm:p-8">
      <div aria-hidden="true" className="fixed inset-0 z-0 opacity-30 blur-3xl">
        <div className="absolute top-0 -left-1/4 w-full h-full bg-fuchsia-700/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 -right-1/4 w-full h-full bg-emerald-700/50 rounded-full animate-pulse [animation-delay:3s]"></div>
      </div>
      <div aria-hidden="true" className="fixed inset-0 z-0 bg-black/30"></div>
      
      <div className="relative z-10 container mx-auto">
        <header className="text-center my-16 md:my-24">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">eyeroniq</h1>
          <p className="text-lg text-neutral-500">Suite de Aplicaciones Potenciadas por IA</p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {APPS.map((app) => (
            <AppCard key={app.id} app={app} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      <AppModal app={selectedApp} onClose={handleCloseModal} />
    </main>
  );
};

export default App;