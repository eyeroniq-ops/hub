import React from 'react';
import { AppData } from '../types';

interface AppCardProps {
  app: AppData;
  onClick: (app: AppData) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  return (
    <div
      onClick={() => onClick(app)}
      className="group relative bg-[#0f0f0f] border border-white/5 hover:border-white/20 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl overflow-hidden"
    >
      {/* Top Bar */}
      <div className="flex justify-between items-start mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold bg-opacity-10 ${app.colorClasses.bg} ${app.colorClasses.text} border border-opacity-20 ${app.colorClasses.border}`}>
          {app.name.charAt(0)}
        </div>
        <div className="flex items-center gap-2">
           <span className="inline-block w-2 h-2 rounded-full bg-emerald-500/50 shadow-[0_0_5px_rgba(16,185,129,0.4)]"></span>
           <span className={`text-[10px] font-bold uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors`}>
             {app.category}
           </span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{app.name}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-2">{app.description}</p>
      </div>

      {/* Footer / Action */}
      <div className="pt-4 border-t border-white/5 flex justify-between items-center">
         <span className="text-xs text-neutral-600 font-mono">v{app.version}</span>
         <div className="flex items-center gap-2 text-xs font-bold text-neutral-400 group-hover:text-white transition-colors">
            <span>ABRIR MÓDULO</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
         </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${app.colorClasses.bg} to-transparent opacity-0 group-hover:opacity-5 pointer-events-none transition-opacity duration-500`}></div>
    </div>
  );
};

export default AppCard;