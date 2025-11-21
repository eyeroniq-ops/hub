import React, { useState, useMemo } from 'react';
import AppModal from './components/AppModal';
import AppCard from './components/AppCard';
import { AppData, AppCategory } from './types';

// --- DATA ---
const APPS: AppData[] = [
  {
    id: 'search-matrix',
    name: 'Search Matrix',
    description: 'Matriz de búsqueda avanzada e inteligencia competitiva para análisis de mercado.',
    url: 'https://searchmatrix.netlify.app',
    category: 'Búsqueda',
    colorClasses: {
      bg: '#06b6d4', // Cyan
      hoverBg: '#22d3ee',
      shadow: '#0891b2',
      hoverShadow: '#06b6d4',
      text: 'text-cyan-400',
      border: 'border-cyan-500'
    }
  },
  {
    id: 'brand-status',
    name: 'Brand Status',
    description: 'Marco de diagnóstico avanzado para la consistencia de marca y seguimiento de salud.',
    url: 'https://brandstatus.netlify.app',
    category: 'Diagnóstico',
    colorClasses: {
      bg: '#f97316', // Orange
      hoverBg: '#fb923c',
      shadow: '#ea580c',
      hoverShadow: '#f97316',
      text: 'text-orange-400',
      border: 'border-orange-500'
    }
  },
  {
    id: 'ai-studio',
    name: 'AI Studio',
    description: 'Entorno de diseño integral de IA para la creación de contenido profesional.',
    url: 'https://ai-studio-eyeroniq-631000688449.us-west1.run.app',
    category: 'Diseño',
    colorClasses: {
      bg: '#ef4444', // Red
      hoverBg: '#f87171',
      shadow: '#dc2626',
      hoverShadow: '#ef4444',
      text: 'text-red-400',
      border: 'border-red-500'
    }
  },
  {
    id: 'brand-assist',
    name: 'Brand Assist',
    description: 'Compañero de marca inteligente y gestor de identidad para activos corporativos.',
    url: 'https://gemini-brand-chat-assistant-631000688449.us-west1.run.app',
    category: 'Administrativo',
    colorClasses: {
      bg: '#2563eb', // Blue
      hoverBg: '#3b82f6',
      shadow: '#1d4ed8',
      hoverShadow: '#2563eb',
      text: 'text-blue-400',
      border: 'border-blue-600'
    }
  },
  {
    id: 'social-media-wizard',
    name: 'Social Media Wizard',
    description: 'Panel administrativo y de planificación estratégica para canales sociales.',
    url: 'https://socialmediawizard.netlify.app/',
    category: 'Administrativo',
    colorClasses: {
      bg: '#10b981', // Emerald
      hoverBg: '#34d399',
      shadow: '#059669',
      hoverShadow: '#10b981',
      text: 'text-emerald-400',
      border: 'border-emerald-500'
    }
  },
  {
    id: 'eyecot',
    name: 'Eyecot',
    description: 'Herramienta inteligente de cotización y estimación de recursos para proyectos.',
    url: 'https://eyecot.netlify.app/',
    category: 'Administrativo',
    colorClasses: {
      bg: '#f59e0b', // Amber
      hoverBg: '#fbbf24',
      shadow: '#d97706',
      hoverShadow: '#f59e0b',
      text: 'text-amber-400',
      border: 'border-amber-500'
    }
  },
  {
    id: 'survey-eyeroniq',
    name: 'Survey Eyeroniq',
    description: 'Sistema integral de recopilación y análisis de opiniones y retroalimentación.',
    url: 'https://surveyeroniq.netlify.app',
    category: 'Diagnóstico',
    colorClasses: {
      bg: '#84cc16', // Lime
      hoverBg: '#a3e635',
      shadow: '#65a30d',
      hoverShadow: '#84cc16',
      text: 'text-lime-400',
      border: 'border-lime-500'
    }
  }
];

const CATEGORIES: AppCategory[] = ['Diseño', 'Búsqueda', 'Diagnóstico', 'Administrativo'];

const App: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
  const [activeCategory, setActiveCategory] = useState<AppCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filteredApps = useMemo(() => {
    return APPS.filter(app => {
      const matchesCategory = activeCategory === 'All' || app.category === activeCategory;
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            app.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#050505] text-white overflow-hidden">
      
      {/* --- BACKGROUND GRID --- */}
      <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none opacity-30"></div>

      {/* --- MOBILE HEADER --- */}
      <header className="md:hidden flex items-center justify-between p-4 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md z-50 sticky top-0">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 rounded bg-gradient-to-br from-emerald-400 to-blue-600"></div>
           <span className="font-space font-bold text-lg tracking-tight">eyeroniq</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-neutral-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </header>

      {/* --- SIDEBAR (DESKTOP) --- */}
      <aside className={`
        fixed md:relative inset-y-0 left-0 w-64 bg-[#0a0a0a] border-r border-white/5 transform transition-transform duration-300 z-40
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 flex flex-col
      `}>
        <div className="p-6 border-b border-white/5 hidden md:flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-400 to-blue-600 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
          <h1 className="font-space font-bold text-xl tracking-tight">eyeroniq</h1>
        </div>

        <div className="p-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Buscar herramientas..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 pl-10 text-sm focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="w-4 h-4 text-neutral-500 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4 px-2 mt-4">Categorías</div>
          <button 
            onClick={() => { setActiveCategory('All'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeCategory === 'All' ? 'bg-white/10 text-white' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}
          >
            <div className={`w-2 h-2 rounded-full ${activeCategory === 'All' ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' : 'bg-neutral-600'}`}></div>
            Vista General
          </button>
          
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => { setActiveCategory(cat); setIsMobileMenuOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${activeCategory === cat ? 'bg-white/10 text-white' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}
            >
              <div className={`w-2 h-2 rounded-full ${activeCategory === cat ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' : 'bg-neutral-600'}`}></div>
              {cat}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-2 py-2 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/5">
            <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">JD</div>
            <div className="flex-1">
               <div className="text-xs font-medium text-white">John Doe</div>
               <div className="text-[10px] text-neutral-500">Administrador</div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 relative z-10 flex flex-col h-[calc(100vh-64px)] md:h-screen overflow-hidden">
        
        {/* Header with Stats (Desktop) */}
        <div className="hidden md:flex items-center justify-between px-8 py-6 border-b border-white/5 bg-[#050505]/50 backdrop-blur-sm sticky top-0 z-20">
          <div>
            <h2 className="text-2xl font-space font-bold text-white">Panel Principal</h2>
            <p className="text-neutral-400 text-sm">Bienvenido de nuevo al Hub Neuronal.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 flex flex-col items-end">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Herramientas Activas</span>
                <span className="font-mono text-lg font-bold text-emerald-400">{filteredApps.length}</span>
             </div>
             <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 flex flex-col items-end">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Estado Sistema</span>
                <span className="font-mono text-lg font-bold text-blue-400">EN LÍNEA</span>
             </div>
          </div>
        </div>

        {/* Mobile Category Pills */}
        <div className="md:hidden p-4 overflow-x-auto whitespace-nowrap border-b border-white/5 flex gap-2 scrollbar-hide">
           <button 
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${activeCategory === 'All' ? 'bg-white text-black border-white' : 'bg-transparent text-neutral-400 border-white/20'}`}
           >
             Todo
           </button>
           {CATEGORIES.map(cat => (
             <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${activeCategory === cat ? 'bg-white text-black border-white' : 'bg-transparent text-neutral-400 border-white/20'}`}
             >
              {cat}
             </button>
           ))}
        </div>

        {/* Scrollable Grid Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {filteredApps.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-neutral-500">
               <svg className="w-12 h-12 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
               <p>No se encontraron módulos activos para esta búsqueda.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">
              {filteredApps.map(app => (
                <AppCard key={app.id} app={app} onClick={setSelectedApp} />
              ))}
            </div>
          )}
        </div>
      </main>

      <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
    </div>
  );
};

export default App;